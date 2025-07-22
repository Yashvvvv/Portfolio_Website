import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:yash@example.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Yash Sharma</h3>
            <p className="text-slate-400">Full-Stack Explorer & Problem Solver</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-500">
              © 2024 Yash Sharma. Built with passion and curiosity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
