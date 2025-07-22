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
    { icon: Mail, label: 'Email', href: 'mailto:yash@example.com', color: 'bg-gradient-to-br from-lavender to-pink-purple hover:from-purple-500 hover:to-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'bg-gradient-to-br from-blue-400 to-violet-500 hover:from-blue-500 hover:to-violet-600' },
    { icon: Github, label: 'GitHub', href: '#', color: 'bg-gradient-to-br from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'bg-gradient-to-br from-pink-purple to-purple-500 hover:from-pink-500 hover:to-purple-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-900 to-purple-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent"
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to collaborate on your next project? From AI-powered applications to full-stack web solutions, 
            I'm always excited to tackle new challenges and explore innovative solutions.
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white text-purple-900 p-8 rounded-2xl border border-purple-200 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Quick Connect
              </h3>
              <p className="text-purple-700 mb-6 leading-relaxed">
                Have a project idea or want to discuss opportunities? Let's connect directly and explore 
                how we can bring your vision to life.
              </p>
              <Button
                onClick={() => window.open('mailto:yash@example.com', '_blank')}
                className="inline-flex items-center bg-gradient-to-r from-lavender to-pink-purple hover:from-purple-500 hover:to-pink-500 text-white shadow-lg"
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
              whileHover={{ y: -5 }}
              className="bg-purple-950 text-white p-8 rounded-2xl border border-purple-600 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-lavender">
                Social Connect
              </h3>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Follow my journey in AI, full-stack development, and tech exploration on professional networks.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="icon"
                      onClick={() => window.open(link.href, '_blank')}
                      className={`${link.color} text-white p-3 rounded-full transition-all duration-300 shadow-lg`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="sr-only">{link.label}</span>
                    </Button>
                  </motion.div>
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
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-900 to-purple-950 text-white p-8 rounded-2xl border border-purple-600 card-shadow hover:card-shadow-hover transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-6 text-lavender">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-purple-200 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-purple-800/50 border-purple-600 text-white placeholder:text-purple-300 focus:border-pink-purple rounded-xl h-12"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-purple-200 mb-2">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-purple-800/50 border-purple-600 text-white placeholder:text-purple-300 focus:border-pink-purple rounded-xl h-12"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-purple-200 mb-2">
                  Project Type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-purple-800/50 border-purple-600 text-white rounded-xl h-12">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-900 border-purple-600">
                    <SelectItem value="ai-integration" className="text-white hover:bg-purple-800">AI Integration & LLMs</SelectItem>
                    <SelectItem value="web" className="text-white hover:bg-purple-800">Web Application</SelectItem>
                    <SelectItem value="mobile" className="text-white hover:bg-purple-800">Mobile App Development</SelectItem>
                    <SelectItem value="fullstack" className="text-white hover:bg-purple-800">Full-Stack Solution</SelectItem>
                    <SelectItem value="consulting" className="text-white hover:bg-purple-800">Technical Consulting</SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-purple-800">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-purple-200 mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project idea, goals, requirements, and timeline..."
                  className="bg-purple-800/50 border-purple-600 text-white placeholder:text-purple-300 focus:border-pink-purple rounded-xl resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-lavender to-pink-purple hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 rounded-xl shadow-lg"
              >
                Let's Collaborate 🚀
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
