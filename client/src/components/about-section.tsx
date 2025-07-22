import { motion } from 'framer-motion';

export function AboutSection() {
  const badges = [
    { label: 'Prompt Engineer', color: 'bg-pink-purple/20 text-pink-purple border-pink-purple/30' },
    { label: 'Gen AI Enthusiast', color: 'bg-lavender/20 text-lavender border-lavender/30' },
    { label: 'Full-Stack Explorer', color: 'bg-blue-400/20 text-blue-300 border-blue-400/30' },
    { label: 'Problem Solver', color: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent"
          >
            About My Journey
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white text-purple-900 p-8 rounded-2xl shadow-2xl border border-purple-200 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                  The Beginning
                </h3>
                <p className="text-purple-700 leading-relaxed">
                  I launched my first mobile prototype in Kotlin—learned to debug hardware integration, 
                  navigate Android's complex lifecycle, and discovered my passion for solving real-world 
                  problems through code. Those late nights wrestling with sensor APIs taught me that 
                  persistence and curiosity are a developer's best tools.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-purple-950 text-white p-8 rounded-2xl shadow-2xl border border-purple-700 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-lavender">
                  The Evolution & AI Revolution
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  I pivoted to React + Spring Boot to build scalable web solutions, then embraced the AI revolution. 
                  Now I specialize in prompt engineering and integrating LLMs into applications. This journey taught me 
                  that adaptability and continuous learning are essential—from mobile apps to web platforms to 
                  generative AI workflows with ComfyUI and Stable Diffusion.
                </p>
              </motion.div>

              {/* Geeky badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {badges.map((badge, index) => (
                  <motion.span
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${badge.color}`}
                  >
                    {badge.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-950 via-purple-800 to-purple-900 rounded-2xl flex items-center justify-center shadow-2xl border border-purple-600 card-shadow">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6 animate-bounce-gentle">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Passionate Developer
                  </h3>
                  <div className="flex flex-col space-y-2 text-purple-200">
                    <span className="text-sm">Always Learning</span>
                    <span className="text-xs text-lavender">•</span>
                    <span className="text-sm">Always Building</span>
                    <span className="text-xs text-pink-purple">•</span>
                    <span className="text-sm">Always Exploring</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
