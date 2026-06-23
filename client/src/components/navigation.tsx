import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const scrollTo = (href: string, close?: () => void) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  close?.();
};

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    const els = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'hsl(255 28% 7% / 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="font-display font-bold text-xl text-[var(--text-heading)] tracking-tight hover:text-[var(--accent)] transition-colors"
            aria-label="Back to top"
          >
            YS
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.06 }}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium transition-colors relative pb-0.5"
                  style={{ color: isActive ? 'var(--text-heading)' : 'var(--text-muted)' }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ backgroundColor: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href, () => setOpen(false))}
                  className="text-left text-sm font-medium py-2.5 transition-colors"
                  style={{ color: active === item.href.slice(1) ? 'var(--accent)' : 'var(--text-body)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
