import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const techItems = [
    { name: 'React', color: 'bg-blue-200/20 text-blue-200 border border-blue-300/30', delay: 0, icon: '⚛️' },
    { name: 'Spring Boot', color: 'bg-emerald-200/20 text-emerald-200 border border-emerald-300/30', delay: 0.5, icon: '🍃' },
    { name: 'Kotlin', color: 'bg-orange-200/20 text-orange-200 border border-orange-300/30', delay: 1, icon: '🎯' },
    { name: 'Gen AI', color: 'bg-pink-purple/20 text-pink-purple border border-pink-purple/30', delay: 0.3, icon: '🤖' },
    { name: 'Prompt Eng.', color: 'bg-lavender/20 text-lavender border border-lavender/30', delay: 0.8, icon: '💭' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 animate-gradient texture-grain"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-700/20 to-pink-purple/10"></div>
      
      {/* Floating particles/orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lavender/30 rounded-full"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Stack Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {techItems.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${
              index === 0 ? 'top-1/4 left-1/4' :
              index === 1 ? 'top-1/3 right-1/4' :
              index === 2 ? 'bottom-1/3 left-1/3' :
              index === 3 ? 'top-1/2 right-1/3' :
              'bottom-1/4 right-1/5'
            }`}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: tech.delay,
              ease: 'easeInOut'
            }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className={`px-4 py-3 rounded-2xl text-sm font-medium backdrop-blur-sm ${tech.color} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}>
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-lavender to-pink-purple bg-clip-text text-transparent"
        >
          Yash Sharma
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold mb-8 text-purple-100"
        >
          Full-Stack Explorer & Problem Solver
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-purple-200"
        >
          From Kotlin Android prototypes to React & Spring Boot web solutions—with a passion for AI and prompt engineering.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('#journey')}
              className="bg-gradient-to-r from-lavender to-pink-purple hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Journey
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-lavender/50 bg-white/10 backdrop-blur-sm text-white hover:bg-lavender hover:border-lavender px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
