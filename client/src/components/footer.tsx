import { Github, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { icon: Mail,     label: 'Email',    href: 'mailto:sharmayashh054@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yash-sharmagg' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/Yashvvvv' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-display font-bold text-xl text-[var(--text-heading)] mb-0.5">
              Yash Sharma
            </p>
            <p className="text-xs mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
              Noida, Uttar Pradesh
            </p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Android & full-stack engineer specializing in KMP, Spring Boot, and React. B.Tech AI/ML, GCET. Building production-grade systems at AppStorys.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
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
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-base font-mono uppercase tracking-wide mb-4" style={{ color: 'var(--accent)' }}>
              Sections
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-heading)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <p className="text-base font-mono uppercase tracking-wide mb-4" style={{ color: 'var(--accent)' }}>
              Current focus
            </p>
            <div className="flex flex-wrap gap-1.5 max-w-[200px]">
              {['Kotlin KMP', 'Spring Boot', 'React', 'n8n', 'Render', 'Harness'].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded border font-mono"
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

        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Yash Sharma · sharmayashh054@gmail.com
          </p>
          <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            Kotlin · Spring Boot · React · AI
          </p>
        </div>
      </div>
    </footer>
  );
}
