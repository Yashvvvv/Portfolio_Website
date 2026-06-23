import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // load vite config dynamically to avoid executing any top-level
  // await or heavy plugin initialization at module import time which
  // can cause the whole process to fail silently.
  let viteConfig: any = {};
  try {
    // dynamic import so we can catch and log errors
    const mod = await import("../vite.config");
    viteConfig = mod && mod.default ? mod.default : mod;
  } catch (e) {
    console.warn("Could not load vite.config, continuing with defaults:", e && (e as any).stack ? (e as any).stack : e);
  }

  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    // do not forcefully exit the process from inside the logger.
    // Instead surface the error so the outer caller can log a stack trace.
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        // provide a visible stderr message and throw so it surfaces
        // to the caller instead of abruptly exiting the process.
        try {
          const text = typeof msg === "string" ? msg : JSON.stringify(msg);
          // keep this synchronous and explicit
          console.error("[vite error]", text, options ?? "");
        } catch (e) {
          console.error("[vite error] (failed to stringify)", e);
        }
        throw new Error(typeof msg === "string" ? msg : "Vite logger error");
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
