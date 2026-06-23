import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const CODE_LINES = [
  // Android
  { indent: 0, tokens: [{ t: '// Android', c: 'text-[var(--text-muted)]' }] },
  { indent: 0, tokens: [
    { t: 'class ', c: 'text-[var(--lavender)]' },
    { t: 'FeedViewModel', c: 'text-[#7dd3fc]' },
    { t: '(private val repo: ', c: 'text-[var(--text-body)]' },
    { t: 'StoryRepo', c: 'text-[#fdba74]' },
    { t: ') : ', c: 'text-[var(--text-body)]' },
    { t: 'ViewModel', c: 'text-[#fdba74]' },
    { t: '() {', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 1, tokens: [
    { t: 'val ', c: 'text-[var(--lavender)]' },
    { t: 'feed ', c: 'text-[var(--text-body)]' },
    { t: '= repo.', c: 'text-[var(--text-body)]' },
    { t: 'observe', c: 'text-[#7dd3fc]' },
    { t: '()', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 2, tokens: [
    { t: '.', c: 'text-[var(--text-body)]' },
    { t: 'stateIn', c: 'text-[#7dd3fc]' },
    { t: '(viewModelScope, ', c: 'text-[var(--text-body)]' },
    { t: 'Lazily', c: 'text-[#fdba74]' },
    { t: ', ', c: 'text-[var(--text-body)]' },
    { t: 'emptyList', c: 'text-[#7dd3fc]' },
    { t: '())', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 1, tokens: [
    { t: 'fun ', c: 'text-[var(--lavender)]' },
    { t: 'refresh', c: 'text-[#7dd3fc]' },
    { t: '() = viewModelScope.', c: 'text-[var(--text-body)]' },
    { t: 'launch', c: 'text-[#7dd3fc]' },
    { t: ' { repo.', c: 'text-[var(--text-body)]' },
    { t: 'sync', c: 'text-[#7dd3fc]' },
    { t: '() }', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 0, tokens: [{ t: '}', c: 'text-[var(--text-body)]' }] },
  { indent: 0, tokens: [] },
  // Spring Boot
  { indent: 0, tokens: [{ t: '// Spring Boot', c: 'text-[var(--text-muted)]' }] },
  { indent: 0, tokens: [{ t: '@RestController', c: 'text-[#86efac]' }] },
  { indent: 0, tokens: [
    { t: 'class ', c: 'text-[var(--lavender)]' },
    { t: 'StoryController', c: 'text-[#7dd3fc]' },
    { t: '(val repo: ', c: 'text-[var(--text-body)]' },
    { t: 'StoryRepo', c: 'text-[#fdba74]' },
    { t: ') {', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 1, tokens: [{ t: '@GetMapping("/api/stories")', c: 'text-[#86efac]' }] },
  { indent: 1, tokens: [
    { t: 'fun ', c: 'text-[var(--lavender)]' },
    { t: 'getAll', c: 'text-[#7dd3fc]' },
    { t: '() = repo.', c: 'text-[var(--text-body)]' },
    { t: 'findAll', c: 'text-[#7dd3fc]' },
    { t: '().', c: 'text-[var(--text-body)]' },
    { t: 'map', c: 'text-[#7dd3fc]' },
    { t: '(Story::toDto)', c: 'text-[var(--text-body)]' },
  ]},
  { indent: 0, tokens: [{ t: '}', c: 'text-[var(--text-body)]' }] },
];

const TECH_TAGS = ['Android', 'KMP', 'Spring Boot', 'React', 'Render', 'AWS', 'n8n'];

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, hsl(258 68% 60% / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-mono tracking-widest uppercase mb-5 select-none"
              style={{ color: 'var(--accent)' }}
            >
              Developer · Builder · Problem Solver
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Yash
              <br />
              Sharma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-[48ch]"
              style={{ color: 'var(--text-body)' }}
            >
              I design systems, not just features. KMP SDK architecture across Android, Flutter,
              and React Native at AppStorys. Full-stack web with Spring Boot and React.
              Automated QA pipelines, n8n workflows, and AI integrations that ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-md border"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                onClick={() => scrollTo('#projects')}
                className="gap-2 px-6 py-5 font-semibold text-white rounded-lg transition-all"
                style={{ backgroundColor: 'var(--accent)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--accent)')}
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => scrollTo('#contact')}
                variant="outline"
                className="gap-2 px-6 py-5 font-semibold rounded-lg transition-all"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-body)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-heading)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-body)';
                }}
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </Button>
            </motion.div>
          </div>

          {/* Right — QA pipeline terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                boxShadow: '0 24px 64px hsl(258 68% 60% / 0.10)',
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  StoryController.kt
                </span>
              </div>

              <div className="p-5 overflow-x-auto">
                <div className="flex text-xs font-mono leading-[1.8]">
                  <div
                    className="select-none pr-4 text-right min-w-[2rem]"
                    style={{ color: 'var(--border)' }}
                  >
                    {CODE_LINES.map((_, i) => <div key={i}>{i + 1}</div>)}
                  </div>
                  <div>
                    {CODE_LINES.map((line, i) => (
                      <div key={i} style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                        {line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))}
                      </div>
                    ))}
                    <div>
                      <span
                        className="inline-block w-2 h-[1.1em] align-middle animate-cursor-blink"
                        style={{ backgroundColor: 'var(--accent)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
