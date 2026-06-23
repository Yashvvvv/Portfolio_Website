import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SOCIAL = [
  { icon: Mail,     label: 'Email',    href: 'mailto:sharmayashh054@gmail.com', display: 'sharmayashh054@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yash-sharmagg', display: 'yash-sharmagg' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/Yashvvvv',  display: 'Yashvvvv' },
];

const PROJECT_TYPES = [
  { value: 'android',    label: 'Android App (Kotlin / KMP)' },
  { value: 'ai',         label: 'AI Integration & LLMs' },
  { value: 'web',        label: 'Web Application' },
  { value: 'fullstack',  label: 'Full-Stack Solution' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other',      label: 'Other' },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Required fields missing', variant: 'destructive' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: 'Invalid email address', variant: 'destructive' });
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast({ title: 'Message sent', description: "I'll get back to you shortly." });
    setForm({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
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
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-heading)] mb-5">
              Let's work together
            </h2>
            <p className="leading-relaxed max-w-[44ch] mb-8 text-sm" style={{ color: 'var(--text-body)' }}>
              Available for Android projects, full-stack web development, AI integration work, and
              technical consulting. Tell me what you're building.
            </p>

            <div className="space-y-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200 group"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-heading)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
                >
                  <span
                    className="w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
                  >
                    <s.icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono text-xs">{s.display}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border p-6 lg:p-8 space-y-4"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    Name <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
                    style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)' }}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    Email <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
                    style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)' }}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Project type
                </label>
                <Select
                  value={form.projectType}
                  onValueChange={(v) => setForm({ ...form, projectType: v })}
                >
                  <SelectTrigger
                    className="text-sm"
                    style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)' }}
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)' }}>
                    {PROJECT_TYPES.map((pt) => (
                      <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Message <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you're building..."
                  className="resize-none text-sm text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
                  style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)' }}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full gap-2 font-semibold py-5 text-white rounded-lg transition-all"
                style={{ backgroundColor: sending ? 'var(--accent-dim)' : 'var(--accent)' }}
                onMouseEnter={(e) => {
                  if (!sending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--accent-hover)';
                }}
                onMouseLeave={(e) => {
                  if (!sending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--accent)';
                }}
              >
                <Send className="w-4 h-4" />
                {sending ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
