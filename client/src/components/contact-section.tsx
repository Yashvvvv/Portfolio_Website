import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:yash@example.com', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Github, label: 'GitHub', href: '#', color: 'bg-gray-800 hover:bg-gray-900' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'bg-blue-500 hover:bg-blue-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Ready to collaborate on your next project? I'm always excited to tackle new challenges 
            and explore innovative solutions.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Quick Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Have a project idea or want to discuss opportunities? Let's connect directly.
              </p>
              <Button
                onClick={() => window.open('mailto:yash@example.com', '_blank')}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl border border-slate-200 dark:border-slate-600"
            >
              <h3 className="text-2xl font-semibold mb-4 text-violet-600 dark:text-violet-400">
                Social Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Follow my journey and connect with me on professional networks.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    size="icon"
                    onClick={() => window.open(link.href, '_blank')}
                    className={`${link.color} text-white p-3 rounded-full transition-colors`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.label}</span>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-slate-50 dark:bg-slate-700 p-8 rounded-xl border border-slate-200 dark:border-slate-600"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="web">Web Application</SelectItem>
                    <SelectItem value="fullstack">Full-Stack Solution</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project idea, requirements, and timeline..."
                  className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-4 px-8 text-lg transition-all duration-300 hover:scale-105"
              >
                Let's Collaborate
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
