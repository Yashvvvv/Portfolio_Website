import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const techItems = [
    { name: 'React', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200', delay: 0 },
    { name: 'Spring Boot', color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200', delay: 0.5 },
    { name: 'Kotlin', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200', delay: 1 },
    { name: 'Next.js', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200', delay: 0.3 },
    { name: 'Android', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200', delay: 0.8 },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-violet-950"></div>
      
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
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: tech.delay,
              ease: 'easeInOut'
            }}
          >
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}>
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
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
        >
          Yash Sharma
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold mb-8 text-slate-600 dark:text-slate-300"
        >
          Full-Stack Explorer & Problem Solver
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-slate-600 dark:text-slate-400"
        >
          From Kotlin native Android prototypes to React + Spring Boot web apps—building solutions that matter.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
          >
            Let's Collaborate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
