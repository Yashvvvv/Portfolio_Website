import { motion } from 'framer-motion';

const STATS = [
  { value: '3+', label: 'Years building' },
  { value: '6', label: 'Shipped projects' },
  { value: '500+', label: 'DSA problems solved' },
  { value: '2', label: 'Hackathon awards' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-[2px] mb-5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-heading)] mb-6">
              Who I am
            </h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
              <p>
                I'm an engineer who gravitates toward the system underneath the feature. At AppStorys,
                I didn't just build UI — I designed the entire Kotlin Multiplatform(KMP) architecture that
                lets a single shared core power Android, Flutter, and React Native simultaneously.
                Then I built the 4-layer QA pipeline to validate it end-to-end automatically.
              </p>
              <p>
                My stack spans Android (Kotlin, Jetpack Compose, KMP), full-stack web (Spring Boot,
                React, TypeScript, PostgreSQL), and automation (n8n, Render, Node.js pipelines).
                I've shipped production features in all three, often on the same project.
              </p>
              <p>
                I won Best Beginner Team at Hack This Fall 4.0 and reached the finals of Smart India
                Hackathon with KrishiApp. I've solved 500+ DSA problems and led application development
                at GDG on Campus GCET. I prefer building things that work over talking about building
                things.
              </p>
              <p>
                Currently focused on harness-based programming and automated deployment workflows, integrating AI
                where it genuinely earns its place in a system rather than as an afterthought.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.15 }}
              className="flex flex-wrap gap-x-8 gap-y-4 py-5 border-y"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold leading-none text-[var(--text-heading)]">{s.value}</div>
                  <div className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Systems philosophy card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
            >
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--accent)' }}>
                How I work
              </p>
              <ul className="space-y-2">
                {[
                  'Plan — design the architecture before writing a single line.',
                  'Build — write clean, modular code with clear contracts between layers.',
                  'Test — automate it. Four layers if needed, zero manual if possible.',
                  'Deploy — know the pipeline and the rollback before day one.',
                ].map((line, i) => (
                  <li key={i} className="text-sm flex gap-2.5" style={{ color: 'var(--text-body)' }}>
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
            >
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--pink-purple)' }}>
                Find me
              </p>
              <div className="space-y-1.5 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                <p>sharmayashh054@gmail.com</p>
                <p>linkedin.com/in/yash-sharmagg</p>
                <p>github.com/Yashvvvv</p>
                <p>Noida, Uttar Pradesh</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
