import { motion } from 'framer-motion';

export function TimelineSection() {
  const timelineItems = [
    {
      period: '2021-2022',
      title: 'Android Development with Kotlin',
      description: 'Built my first mobile prototype with Kotlin, learning hardware integration and native Android development patterns.',
      technologies: ['Kotlin', 'Android SDK', 'Hardware Integration'],
      color: 'emerald',
      position: 'right'
    },
    {
      period: '2022-2023',
      title: 'Frontend Mastery with React',
      description: 'Pivoted to web development, mastering React ecosystem and modern frontend practices for scalable applications.',
      technologies: ['React', 'Next.js', 'TypeScript'],
      color: 'blue',
      position: 'left'
    },
    {
      period: '2023-Present',
      title: 'Full-Stack Integration',
      description: 'Expanded to Spring Boot backend development, creating end-to-end solutions with modern tech stacks.',
      technologies: ['Spring Boot', 'REST APIs', 'Full Stack'],
      color: 'violet',
      position: 'right'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        dot: 'bg-emerald-500',
        badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200',
        title: 'text-emerald-600 dark:text-emerald-400'
      },
      blue: {
        dot: 'bg-blue-500',
        badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
        title: 'text-blue-600 dark:text-blue-400'
      },
      violet: {
        dot: 'bg-violet-500',
        badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200',
        title: 'text-violet-600 dark:text-violet-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="journey" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Tech Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineItems.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.position === 'right' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-center justify-center group"
                >
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colorClasses.dot} rounded-full border-4 border-white dark:border-slate-800 z-10`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600 max-w-lg ${
                      item.position === 'right' ? 'ml-auto mr-4 md:mr-8' : 'mr-auto ml-4 md:ml-8'
                    } group-hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.badge}`}>
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-2 ${colorClasses.title}`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-slate-100 dark:bg-slate-600 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
