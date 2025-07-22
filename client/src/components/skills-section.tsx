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
    { name: 'OpenAI GPT', category: 'ai', proficiency: 90, icon: '🧠', color: 'purple' },
    { name: 'Prompt Engineering', category: 'ai', proficiency: 92, icon: '💭', color: 'pink' },
    { name: 'ComfyUI', category: 'ai', proficiency: 75, icon: '🎨', color: 'violet' },
    { name: 'Stable Diffusion', category: 'ai', proficiency: 80, icon: '🖼️', color: 'indigo' },
    { name: 'Git', category: 'tools', proficiency: 90, icon: '📚', color: 'gray' },
    { name: 'CI/CD', category: 'tools', proficiency: 75, icon: '🚀', color: 'purple' },
    { name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳', color: 'teal' }
  ];

  const filters = [
    { key: 'all', label: 'All Skills' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'web', label: 'Web' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI & LLMs' },
    { key: 'tools', label: 'DevOps' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      green: 'bg-green-500/20 text-green-300 border-green-400/30',
      blue: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      slate: 'bg-slate-400/20 text-slate-300 border-slate-400/30',
      orange: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
      gray: 'bg-gray-500/20 text-gray-300 border-gray-400/30',
      purple: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      teal: 'bg-teal-500/20 text-teal-300 border-teal-400/30',
      pink: 'bg-pink-purple/20 text-pink-purple border-pink-purple/30',
      violet: 'bg-violet-500/20 text-violet-300 border-violet-400/30',
      indigo: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30'
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-400',
      green: 'bg-green-400',
      blue: 'bg-blue-400',
      slate: 'bg-slate-400',
      orange: 'bg-orange-400',
      gray: 'bg-gray-400',
      purple: 'bg-purple-500',
      teal: 'bg-teal-400',
      pink: 'bg-pink-purple',
      violet: 'bg-violet-400',
      indigo: 'bg-indigo-400'
    };
    return colors[color as keyof typeof colors];
  };

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-purple-950 to-purple-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-lavender to-pink-purple text-white shadow-lg'
                  : 'bg-purple-800/50 text-purple-200 border-purple-600/50 hover:bg-purple-700/50 hover:text-white backdrop-blur-sm'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
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
                whileHover={{ y: -8, scale: 1.05 }}
                className={`${
                  index % 3 === 0 ? 'bg-white text-purple-900' :
                  index % 3 === 1 ? 'bg-purple-950 text-white border-purple-600' :
                  'bg-purple-900 text-white border-purple-700'
                } p-6 rounded-2xl shadow-2xl border ${
                  index % 3 === 0 ? 'border-purple-200' : ''
                } card-shadow hover:card-shadow-hover transition-all duration-300`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(skill.color)} rounded-2xl border flex items-center justify-center text-2xl font-bold backdrop-blur-sm`}>
                    {skill.icon}
                  </div>
                  
                  <h3 className="font-bold mb-3 text-lg">
                    {skill.name}
                  </h3>
                  
                  <div className={`w-full ${
                    index % 3 === 0 ? 'bg-purple-200' : 'bg-purple-800/50'
                  } rounded-full h-2 mb-2`}>
                    <motion.div
                      className={`h-2 rounded-full ${getProgressColor(skill.color)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <p className={`text-xs font-medium ${
                    index % 3 === 0 ? 'text-purple-600' : 'text-purple-300'
                  }`}>
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
