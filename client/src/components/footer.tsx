import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:yash@example.com', color: 'hover:text-pink-purple' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-lavender' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-emerald-400' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-950 to-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-10"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent">
              Yash Sharma
            </h3>
            <p className="text-purple-200 leading-relaxed">
              Full-stack developer passionate about AI integration, modern web technologies, 
              and building innovative solutions that bridge the gap between creativity and functionality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => window.open(link.href, '_blank')}
                    className={`text-purple-300 ${link.color} transition-colors duration-300`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Current Focus</h4>
            <div className="flex flex-wrap gap-2">
              {['AI Integration', 'React', 'Spring Boot', 'Prompt Engineering', 'ComfyUI', 'Next.js'].map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 border border-purple-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-purple-300 text-sm mt-4">
              Exploring the intersection of AI and web development to create intelligent, 
              user-centric applications.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-8"></div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-300"
        >
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© {currentYear} Yash Sharma. Built with</span>
            <Heart className="w-4 h-4 text-pink-purple animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>Powered by React + Spring Boot</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-pink-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}