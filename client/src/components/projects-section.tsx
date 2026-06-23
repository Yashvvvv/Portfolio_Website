import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  year: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  github: string | null;
  live: string | null;
}

const WEB_PROJECTS: Project[] = [
  {
    title: 'VenueSync',
    year: '2024',
    status: 'Live',
    description:
      'OAuth2/OIDC-secured event ticketing platform with Keycloak RBAC, real-time QR check-in, and a race-condition-proof concurrency engine.',
    highlights: [
      'Keycloak-backed OAuth2/OIDC auth with role-based access control; deployed via Cloudflare Pages + AWS EC2 GitHub Actions pipeline.',
      'Race-condition-proof ticketing engine preventing overselling across 100+ concurrent purchases.',
      'QR code generation with Google ZXing and real-time scanner — reduced manual check-ins by 95% with sub-100ms responses.',
    ],
    stack: ['Spring Boot', 'JPA', 'OAuth2/OIDC', 'Keycloak', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'AWS EC2'],
    github: 'https://github.com/Yashvvvv',
    live: 'https://venuesync.pages.dev/',
  },
  {
    title: 'PharmaLens',
    year: '2024',
    status: 'Production',
    description:
      'AI pharmaceutical intelligence platform — medicine recognition via reactive OCR, pharmacy locator with geo-search, and secure multi-tier API.',
    highlights: [
      'Google Gemini 1.5 Flash + WebFlux reactive OCR pipeline with <100ms latency; reduced API calls by 70% while supporting 500+ concurrent users.',
      'JWT authentication with 4-tier RBAC, BCrypt encryption, and IP-based rate limiting — blocked 95% of malicious traffic.',
      'Pharmacy locator using Google Maps API with 50km geo-search and AI-based availability prediction at 85% accuracy.',
    ],
    stack: ['Spring Boot', 'Google Gemini API', 'WebFlux', 'PostgreSQL', 'JWT', 'Spring Security', 'Google Maps API'],
    github: 'https://github.com/Yashvvvv',
    live: null,
  },
  {
    title: 'Hospital Management System',
    year: '2023',
    status: 'Complete',
    description:
      'Full-stack hospital management platform with secured REST APIs, JWT-based RBAC, and a React + TypeScript frontend.',
    highlights: [
      'Spring Boot + JPA/Hibernate backend with JWT + RBAC — blocked 90% unauthorized access.',
      '99.9% uptime under 500+ concurrent users in load testing.',
      'React + TypeScript frontend with full CRUD across patient, doctor, and appointment management.',
    ],
    stack: ['Spring Boot', 'PostgreSQL', 'JWT', 'Spring Security', 'JUnit', 'Maven', 'React', 'TypeScript'],
    github: 'https://github.com/Yashvvvv',
    live: null,
  },
];

const ANDROID_PROJECTS: Project[] = [
  {
    title: 'GCET Connect',
    year: '2024',
    status: 'Complete',
    description:
      'AI-powered college assistant chatbot for Android. Integrates Google Gemini LLM with a custom Levenshtein-distance matching engine for 95% query resolution accuracy.',
    highlights: [
      'Google Gemini API integration with prompt engineering achieving 95% query resolution accuracy.',
      'MVVM architecture with Kotlin Coroutines for async processing and Room for persistent offline storage.',
      'Custom Levenshtein-distance algorithm for precise query matching when LLM confidence is low.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Google Gemini API', 'Room', 'MVVM', 'Coroutines', 'Material Design 3'],
    github: 'https://github.com/Yashvvvv',
    live: null,
  },
  {
    title: 'JetAReader (ReadSphere)',
    year: '2024',
    status: 'Complete',
    description:
      'Full-featured Android book reading companion with Google Books API, Firebase real-time sync, and a rich reading statistics dashboard.',
    highlights: [
      'Google Books API via Retrofit + Coroutines for fast search and detailed book metadata.',
      'Firebase Authentication + Cloud Firestore for real-time sync and offline storage across large personal libraries.',
      'Reading progress tracking, categorized shelves, personal notes, star ratings, and statistics dashboard in Material Design 3.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Firebase Auth', 'Cloud Firestore', 'Retrofit', 'Coroutines', 'MVVM', 'Google Books API'],
    github: 'https://github.com/Yashvvvv',
    live: null,
  },
  {
    title: 'MedAssist',
    year: '2024',
    status: 'Complete',
    description:
      'Full-stack AI medical recognition app — Android + Spring Boot + PostgreSQL, with Claude API, ML Kit image recognition, and Google Maps pharmacy locator.',
    highlights: [
      'Android (Kotlin + Jetpack Compose) + Spring Boot + PostgreSQL full-stack with Claude API and ML Kit image recognition.',
      'JWT + Spring Security RBAC with optimized Spring Data JPA queries and Swagger-documented REST APIs.',
      'Google Maps API integration for pharmacy location lookup from recognized medicine data.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Spring Boot', 'PostgreSQL', 'JWT', 'Claude API', 'ML Kit', 'Google Maps API', 'MVVM'],
    github: 'https://github.com/Yashvvvv',
    live: null,
  },
];

const STATUS_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  Live:       { color: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.3)' },
  Production: { color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.3)' },
  Complete:   { color: 'var(--text-muted)', bg: 'var(--surface-raised)', border: 'var(--border)' },
};

function ProjectCard({ p }: { p: Project }) {
  const ss = STATUS_STYLE[p.status] ?? STATUS_STYLE.Complete;
  return (
    <div
      className="rounded-xl border p-6 lg:p-7 transition-colors duration-200"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)')}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-display font-bold text-lg text-[var(--text-heading)] mb-0.5">
            {p.title}
          </h3>
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{p.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full border"
            style={{ color: ss.color, backgroundColor: ss.bg, borderColor: ss.border }}
          >
            {p.status}
          </span>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="w-7 h-7 rounded border flex items-center justify-center transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--surface-raised)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
              }}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {p.live && (
            <Button
              size="sm"
              className="gap-1.5 text-xs h-7 px-3 text-white"
              style={{ backgroundColor: 'var(--accent)' }}
              onClick={() => window.open(p.live!, '_blank')}
            >
              Live
              <ExternalLink className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-body)' }}>
        {p.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 mb-5">
        {p.highlights.map((h, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2.5" style={{ color: 'var(--text-body)' }}>
            <span
              className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
        {p.stack.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded border"
            style={{
              color: 'var(--text-muted)',
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface-raised)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [tab, setTab] = useState<'web' | 'android'>('web');
  const projects = tab === 'web' ? WEB_PROJECTS : ANDROID_PROJECTS;

  return (
    <section id="projects" className="py-24 lg:py-32 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-base font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Work
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-heading)]">
            Projects
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            All projects on{' '}
            <a
              href="https://github.com/Yashvvvv"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              github.com/Yashvvvv
            </a>
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div
          className="inline-flex rounded-lg border p-1 mb-10"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          {(['web', 'android'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-2 text-sm font-medium rounded-md transition-all duration-200"
              style={{
                backgroundColor: tab === t ? 'var(--surface-raised)' : 'transparent',
                color: tab === t ? 'var(--text-heading)' : 'var(--text-muted)',
              }}
            >
              {t === 'web' ? 'Web & Full-Stack' : 'Android'}
            </button>
          ))}
        </div>

        {/* Project list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
              >
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
