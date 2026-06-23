import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

type EntryType = 'work' | 'community';

interface TimelineEntry {
  type: EntryType;
  period: string;
  org: string;
  role: string;
  location?: string;
  bullets: string[];
  stack?: string[];
}

const ENTRIES: TimelineEntry[] = [
  {
    type: 'work',
    period: 'Dec 2025 – Present',
    org: 'AppStorys · AppVersal Pvt. Ltd.',
    role: 'Android Intern',
    location: 'Noida, UP',
    bullets: [
      'Designed and built the entire KMP shared core architecture for the AppStorys SDK — a single Kotlin codebase deployed across Android (Kotlin), Flutter, and React Native, decoupling all business logic from platform-specific UI layers.',
      'Engineered a 4-layer automated QA pipeline (DB → CDN diff → SDK parse validation → Paparazzi visual snapshots → Maestro E2E flows) that validates every campaign end-to-end with zero manual testing; built on a Node.js SSE orchestrator with a live dashboard.',
      'Built and optimized Jetpack Compose UI components with robust state management and lifecycle safety for the in-app engagement SDK (stories, surveys, overlays, CTA flows).',
      'Developed native UI layers in Kotlin, Flutter, and React Native on top of the shared KMP core, ensuring modular and consistent SDK integration across host applications.',
    ],
    stack: ['Kotlin', 'KMP', 'Jetpack Compose', 'Flutter', 'React Native', 'Node.js', 'Paparazzi', 'Maestro', 'adb', 'SSE'],
  },
  {
    type: 'community',
    period: 'Sept 2024 – July 2025',
    org: 'GDG on Campus GCET',
    role: 'Application Development Lead',
    bullets: [
      'Led the application development vertical — organised workshops on Android and full-stack development, mentored members building real projects.',
    ],
    stack: ['Android', 'Kotlin', 'React', 'Community Leadership'],
  },
  {
    type: 'community',
    period: 'Sept 2023 – Aug 2024',
    org: 'GDSC GCET',
    role: 'Cybersecurity Executive',
    bullets: [
      'Ran cybersecurity awareness sessions and technical workshops, introduced the college community to CTF-style problem solving.',
    ],
    stack: ['Cybersecurity', 'CTF', 'Community'],
  },
];

const ICON_MAP: Record<EntryType, typeof Briefcase> = {
  work: Briefcase,
  community: Users,
};

const ACCENT_MAP: Record<EntryType, string> = {
  work: 'var(--accent)',
  community: 'var(--pink-purple)',
};

const ACHIEVEMENTS = [
  { label: 'Best Beginner Team', sub: 'Hack This Fall 4.0 Hackathon' },
  { label: 'SIH Finalist', sub: 'Smart India Hackathon — KrishiApp, top 50+ teams' },
  { label: '500+ DSA solved', sub: 'LeetCode · GeeksforGeeks · CodeStudio' },
];

export function TimelineSection() {
  return (
    <section id="journey" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-base font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Experience
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-heading)]">
            Background
          </h2>
          <p className="mt-4 leading-relaxed max-w-[52ch] text-sm" style={{ color: 'var(--text-body)' }}>
            Work and community contributions. B.Tech AI/ML — Galgotias College of Engineering and Technology (7.5 CGPA).
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-5 top-3 bottom-3 w-px hidden md:block"
            style={{ backgroundColor: 'var(--border-subtle)' }}
          />

          <div className="space-y-6">
            {ENTRIES.map((entry, i) => {
              const Icon = ICON_MAP[entry.type];
              const accent = ACCENT_MAP[entry.type];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative md:pl-16"
                >
                  {/* Icon dot */}
                  <div
                    className="absolute left-[9px] top-4 w-8 h-8 rounded-full border items-center justify-center hidden md:flex"
                    style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl border p-6 transition-colors duration-200"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)')}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-3.5 h-3.5 md:hidden" style={{ color: accent }} />
                          <h3 className="font-display font-semibold text-base text-[var(--text-heading)]">
                            {entry.role}
                          </h3>
                        </div>
                        <p className="text-sm font-medium" style={{ color: accent }}>{entry.org}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded"
                          style={{ color: 'var(--accent)', backgroundColor: 'hsl(258 68% 60% / 0.10)' }}
                        >
                          {entry.period}
                        </span>
                        {entry.location && (
                          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                            {entry.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="text-sm leading-relaxed flex gap-2.5" style={{ color: 'var(--text-body)' }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {entry.stack && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        {entry.stack.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2 py-0.5 rounded border"
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
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-8 border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <p className="text-base font-mono tracking-widest uppercase mb-5" style={{ color: 'var(--accent)' }}>
            Achievements
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
              >
                <p className="font-display font-semibold text-sm text-[var(--text-heading)] mb-1">{a.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
