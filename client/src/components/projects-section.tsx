import { motion } from 'framer-motion';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Smart Sensor Mobile App',
      category: 'Mobile • Kotlin',
      gradient: 'from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10',
      border: 'border-emerald-200 dark:border-emerald-800/30',
      problem: 'How might we create an intuitive mobile interface for complex hardware sensor integration that non-technical users can easily understand and interact with?',
      exploration: 'Started with native Android development using Kotlin, explored sensor APIs, implemented real-time data visualization, and created custom UI components for hardware interaction.',
      impact: 'Learned the importance of user-centric design in technical applications. The app improved data collection efficiency by 40% and taught me how to bridge the gap between complex hardware and simple user experiences.',
      mockup: '📱',
      mockupTitle: 'Sensor Dashboard',
      mockupSubtitle: 'Real-time Data Visualization',
      technologies: ['Kotlin', 'Android SDK', 'Sensor APIs', 'Custom UI']
    },
    {
      title: 'Scalable Business Platform',
      category: 'Web • Full-Stack',
      gradient: 'from-blue-50 to-violet-50 dark:from-blue-900/10 dark:to-violet-900/10',
      border: 'border-blue-200 dark:border-blue-800/30',
      problem: 'How might we create a modern, responsive web platform that handles complex business logic while maintaining excellent user experience and scalability?',
      exploration: 'Transitioned from mobile to web development, learning React ecosystem, implementing REST APIs with Spring Boot, and integrating modern deployment practices with CI/CD.',
      impact: 'Mastered full-stack development principles and learned the importance of API design. The platform now serves 1000+ users with 99.9% uptime, validating my transition to web technologies.',
      mockup: '💼',
      mockupTitle: 'Full-Stack Platform',
      mockupSubtitle: 'React + Spring Boot',
      technologies: ['React', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'CI/CD']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-r ${project.gradient} rounded-2xl p-8 border ${project.border}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                  <div className="mb-6">
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">
                        Problem Statement
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                        Tech Exploration
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {project.exploration}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-violet-600 dark:text-violet-400">
                        Key Learnings & Impact
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ rotate: index % 2 === 0 ? 1 : -1 }}
                  className={`relative ${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}
                >
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-2xl border border-slate-200 dark:border-slate-600 transition-transform duration-300">
                    <div className={`${index === 0 ? 'aspect-[9/16]' : 'aspect-video'} ${
                      index === 0 ? 'bg-gradient-to-b from-emerald-400 to-blue-500' : 'bg-gradient-to-br from-blue-400 to-violet-500'
                    } rounded-lg flex items-center justify-center text-white`}>
                      <div className="text-center">
                        <div className="text-4xl mb-4">{project.mockup}</div>
                        <div className="text-sm opacity-90">{project.mockupTitle}</div>
                        <div className="text-xs opacity-75 mt-2">{project.mockupSubtitle}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
