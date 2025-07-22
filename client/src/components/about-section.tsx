import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About My Journey
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  The Beginning
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-2xl font-semibold mb-4 text-violet-600 dark:text-violet-400">
                  The Evolution
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I pivoted to React + Spring Boot to build scalable web solutions because the job market 
                  demanded full-stack versatility. This transition wasn't just about learning new syntax—it 
                  was about understanding how different technologies serve different purposes. I'm a fast 
                  learner who thrives on exploring new domains and connecting the dots between mobile, web, 
                  and backend systems.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                    Passionate Developer
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                    Always Learning • Always Building
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
