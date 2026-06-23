import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="text-center">
        <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--accent)' }} />
        <h1 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>404</h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Page not found.</p>
      </div>
    </div>
  );
}
