import { motion } from 'framer-motion';

export function TimelineSection() {
  const timelineItems = [
    {
      period: '2021-2022',
      title: 'Android Development with Kotlin',
      description: 'Built my first mobile prototype with Kotlin, learning hardware integration and native Android development patterns. Discovered my passion for problem-solving through code.',
      technologies: ['Kotlin', 'Android SDK', 'Hardware Integration', 'Mobile UI'],
      color: 'emerald',
      position: 'right',
      icon: '📱'
    },
    {
      period: '2022-2023',
      title: 'Web Development Mastery',
      description: 'Pivoted to web development, mastering React ecosystem and modern frontend practices. Learned to create scalable, responsive applications with excellent UX.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'blue',
      position: 'left',
      icon: '💻'
    },
    {
      period: '2023-2024',
      title: 'Full-Stack Integration',
      description: 'Expanded to Spring Boot backend development, creating end-to-end solutions. Mastered API design, database architecture, and deployment strategies.',
      technologies: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'CI/CD'],
      color: 'violet',
      position: 'right',
      icon: '🔧'
    },
    {
      period: '2024-Present',
      title: 'AI & Prompt Engineering',
      description: 'Embraced the AI revolution, specializing in prompt engineering and integrating LLMs into applications. Exploring ComfyUI, Stable Diffusion, and generative AI workflows.',
      technologies: ['Prompt Engineering', 'OpenAI GPT', 'ComfyUI', 'Stable Diffusion', 'LangChain'],
      color: 'pink',
      position: 'left',
      icon: '🤖'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        dot: 'bg-emerald-400',
        badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
        title: 'text-emerald-300'
      },
      blue: {
        dot: 'bg-blue-400',
        badge: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
        title: 'text-blue-300'
      },
      violet: {
        dot: 'bg-violet-400',
        badge: 'bg-violet-500/20 text-violet-300 border-violet-400/30',
        title: 'text-violet-300'
      },
      pink: {
        dot: 'bg-pink-purple',
        badge: 'bg-pink-purple/20 text-pink-purple border-pink-purple/30',
        title: 'text-pink-purple'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent"
        >
          My Tech Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 via-violet-400 to-pink-purple rounded-full"></div>
          
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
                  <motion.div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${colorClasses.dot} rounded-full border-4 border-purple-900 z-10 flex items-center justify-center text-xl shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`${
                      index % 2 === 0 ? 'bg-white text-purple-900' : 'bg-purple-950 text-white'
                    } p-8 rounded-2xl shadow-2xl border ${
                      index % 2 === 0 ? 'border-purple-200' : 'border-purple-700'
                    } max-w-lg ${
                      item.position === 'right' ? 'ml-auto mr-4 md:mr-8' : 'mr-auto ml-4 md:ml-8'
                    } group-hover:shadow-purple-500/25 transition-all duration-300 card-shadow hover:card-shadow-hover`}
                  >
                    <div className="flex items-center mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border ${colorClasses.badge}`}>
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 ${colorClasses.title}`}>
                      {item.title}
                    </h3>
                    
                    <p className={`${index % 2 === 0 ? 'text-purple-700' : 'text-purple-200'} mb-6 leading-relaxed`}>
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 rounded-full border ${
                            index % 2 === 0 
                              ? 'bg-purple-100 text-purple-800 border-purple-200' 
                              : 'bg-purple-800/50 text-purple-200 border-purple-600'
                          }`}
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
