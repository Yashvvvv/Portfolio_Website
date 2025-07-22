import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const skills = [
    { name: 'Kotlin', category: 'mobile', proficiency: 85, icon: '🎯', color: 'emerald' },
    { name: 'Android SDK', category: 'mobile', proficiency: 80, icon: '🤖', color: 'green' },
    { name: 'React', category: 'web', proficiency: 90, icon: '⚛️', color: 'blue' },
    { name: 'Next.js', category: 'web', proficiency: 85, icon: '▲', color: 'slate' },
    { name: 'TypeScript', category: 'web', proficiency: 80, icon: 'TS', color: 'blue' },
    { name: 'Spring Boot', category: 'backend', proficiency: 85, icon: '🍃', color: 'green' },
    { name: 'Java', category: 'backend', proficiency: 80, icon: '☕', color: 'orange' },
    { name: 'REST APIs', category: 'backend', proficiency: 88, icon: '🔌', color: 'blue' },
    { name: 'Git', category: 'tools', proficiency: 90, icon: '📚', color: 'gray' },
    { name: 'CI/CD', category: 'tools', proficiency: 75, icon: '🚀', color: 'purple' },
    { name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳', color: 'teal' }
  ];

  const filters = [
    { key: 'all', label: 'All Skills' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'web', label: 'Web' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Tools' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
      slate: 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200'
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-500',
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      slate: 'bg-slate-700',
      orange: 'bg-orange-600',
      gray: 'bg-gray-600',
      purple: 'bg-purple-600',
      teal: 'bg-teal-600'
    };
    return colors[color as keyof typeof colors];
  };

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(skill.color)} rounded-full flex items-center justify-center text-2xl font-bold`}>
                    {skill.icon}
                  </div>
                  
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {skill.name}
                  </h3>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${getProgressColor(skill.color)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {skill.proficiency}% Proficiency
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
