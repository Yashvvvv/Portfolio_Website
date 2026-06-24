import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Android & KMP',
    skills: ['Kotlin', 'Jetpack Compose', 'Kotlin Multiplatform', 'Android SDK', 'Hilt/Dagger', 'Retrofit', 'Room', 'Coroutines', 'MVVM', 'Material Design 3', 'Flutter', 'React Native'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'WebFlux', 'RESTful APIs', 'JWT', 'JPA/Hibernate', 'Maven', 'Keycloak', 'OAuth2/OIDC', 'Node.js'],
  },
  {
    title: 'AI & Integrations',
    skills: ['Google Gemini API', 'Claude API', 'ML Kit', 'Prompt Engineering', 'ComfyUI', 'Stable Diffusion', 'n8n'],
  },
  {
    title: 'Database & Cloud',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Room', 'Mongo Atlas', 'AWS EC2', 'Cloudflare Pages', 'Render'],
  },
  {
    title: 'DevOps & Testing',
    skills: ['Docker', 'GitHub Actions', 'Harness Based Programming', 'Paparazzi', 'Maestro', 'adb', 'Git', 'Postman', 'JUnit', 'SSE Pipelines'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="w-8 h-[2px] mb-5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-heading)]">
            Skills & Tools
          </h2>
          <p className="mt-4 leading-relaxed max-w-[52ch] text-sm" style={{ color: 'var(--text-body)' }}>
            Everything I reach for when building — across mobile, web, backend, and automation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 22, delay: ci * 0.07 }}
              whileHover={{ y: -2 }}
              className="rounded-xl border p-5"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
            >
              <h3
                className="font-display font-semibold text-xs uppercase tracking-widest mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md border"
                    style={{
                      color: 'var(--text-body)',
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--surface-raised)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cert strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 rounded-xl border p-5 flex flex-wrap items-center gap-4"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>
            Certified
          </span>
          <span className="text-sm" style={{ color: 'var(--text-body)' }}>
            Android Jetpack Compose: The Comprehensive Bootcamp — Udemy (37 hours)
          </span>
        </motion.div>

      </div>
    </section>
  );
}
