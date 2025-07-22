import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('android');

  const androidProjects = [
    {
      title: 'Smart Sensor Mobile App',
      date: '2022',
      problem: 'How might we create an intuitive mobile interface for complex hardware sensor integration that non-technical users can easily understand and interact with?',
      exploration: 'Started with native Android development using Kotlin, explored sensor APIs, implemented real-time data visualization, and created custom UI components for hardware interaction.',
      impact: 'Learned the importance of user-centric design in technical applications. The app improved data collection efficiency by 40% and taught me how to bridge the gap between complex hardware and simple user experiences.',
      mockup: '📱',
      mockupTitle: 'Sensor Dashboard',
      mockupSubtitle: 'Real-time Data Visualization',
      technologies: ['Kotlin', 'Android SDK', 'Sensor APIs', 'Custom UI', 'Hardware Integration'],
      liveLink: null,
      status: 'Prototype Complete'
    },
    {
      title: 'IoT Device Controller',
      date: '2022',
      problem: 'How might we simplify IoT device management through an intuitive mobile interface that works across different hardware protocols?',
      exploration: 'Developed native Android app with Kotlin for controlling IoT devices, implemented Bluetooth and WiFi communication protocols, and created adaptive UI for different device types.',
      impact: 'Gained deep understanding of mobile hardware communication and learned to design flexible architectures that adapt to different device specifications.',
      mockup: '🌐',
      mockupTitle: 'IoT Controller',
      mockupSubtitle: 'Multi-Protocol Support',
      technologies: ['Kotlin', 'Bluetooth', 'WiFi Protocols', 'Android Architecture Components', 'MVVM'],
      liveLink: null,
      status: 'In Development'
    }
  ];

  const webProjects = [
    {
      title: 'AI-Powered Content Platform',
      date: '2024',
      problem: 'How might we create a content management platform that leverages AI for automated content generation and optimization while maintaining human creative control?',
      exploration: 'Built full-stack web application with React and Spring Boot, integrated OpenAI GPT for content generation, implemented prompt engineering workflows, and created intuitive content editing interfaces.',
      impact: 'Successfully integrated AI into traditional web workflows, reducing content creation time by 60% while improving quality. Gained expertise in prompt engineering and LLM integration.',
      mockup: '🤖',
      mockupTitle: 'AI Content Studio',
      mockupSubtitle: 'GPT-Powered Creation',
      technologies: ['React', 'Spring Boot', 'OpenAI GPT', 'Prompt Engineering', 'PostgreSQL', 'AI Integration'],
      liveLink: 'https://demo.example.com',
      status: 'Live'
    },
    {
      title: 'Scalable Business Platform',
      date: '2023',
      problem: 'How might we create a modern, responsive web platform that handles complex business logic while maintaining excellent user experience and scalability?',
      exploration: 'Transitioned from mobile to web development, learning React ecosystem, implementing REST APIs with Spring Boot, and integrating modern deployment practices with CI/CD.',
      impact: 'Mastered full-stack development principles and learned the importance of API design. The platform now serves 1000+ users with 99.9% uptime, validating my transition to web technologies.',
      mockup: '💼',
      mockupTitle: 'Business Platform',
      mockupSubtitle: 'Full-Stack Solution',
      technologies: ['React', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'CI/CD', 'Docker'],
      liveLink: null,
      status: 'Production'
    },
    {
      title: 'Generative AI Workflow Manager',
      date: '2024',
      problem: 'How might we streamline complex generative AI workflows using ComfyUI and Stable Diffusion for non-technical users?',
      exploration: 'Created web interface for managing ComfyUI workflows, integrated Stable Diffusion pipelines, implemented batch processing capabilities, and designed intuitive prompt management system.',
      impact: 'Simplified complex AI workflows into user-friendly interfaces, enabling creative teams to leverage powerful AI tools without technical expertise. Reduced workflow setup time from hours to minutes.',
      mockup: '🎨',
      mockupTitle: 'AI Workflow Studio',
      mockupSubtitle: 'ComfyUI Integration',
      technologies: ['React', 'ComfyUI', 'Stable Diffusion', 'WebSockets', 'Python APIs', 'AI Orchestration'],
      liveLink: null,
      status: 'Coming Soon'
    }
  ];

  const currentProjects = activeTab === 'android' ? androidProjects : webProjects;

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-900 to-purple-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-grain opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-lavender bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        
        {/* Dynamic Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-2 border border-purple-600/30">
            <div className="flex space-x-2">
              <Button
                onClick={() => setActiveTab('android')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  activeTab === 'android'
                    ? 'bg-gradient-to-r from-lavender to-pink-purple text-white shadow-lg'
                    : 'text-purple-200 hover:text-white hover:bg-purple-700/50'
                }`}
              >
                Android Projects
                {activeTab === 'android' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-pink-purple rounded-full"
                  />
                )}
              </Button>
              <Button
                onClick={() => setActiveTab('web')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-lavender to-pink-purple text-white shadow-lg'
                    : 'text-purple-200 hover:text-white hover:bg-purple-700/50'
                }`}
              >
                Web Projects
                {activeTab === 'web' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-pink-purple rounded-full"
                  />
                )}
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${
                  index % 2 === 0 ? 'bg-white text-purple-900' : 'bg-purple-950 text-white'
                } rounded-2xl p-8 shadow-2xl border ${
                  index % 2 === 0 ? 'border-purple-200' : 'border-purple-700'
                } card-shadow hover:card-shadow-hover transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        index % 2 === 0
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-purple-800/50 text-purple-200'
                      }`}>
                        {project.date}
                      </span>
                      <div className="flex items-center space-x-2">
                        {project.liveLink && (
                          <Button
                            size="sm"
                            onClick={() => window.open(project.liveLink, '_blank')}
                            className="bg-gradient-to-r from-lavender to-pink-purple hover:from-purple-500 hover:to-pink-500 text-white"
                          >
                            Live Demo
                          </Button>
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-emerald-100 text-emerald-800' :
                          project.status === 'Production' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-emerald-600">
                          Problem Statement
                        </h4>
                        <p className={`${
                          index % 2 === 0 ? 'text-purple-700' : 'text-purple-200'
                        } leading-relaxed`}>
                          {project.problem}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-blue-500">
                          Tech Exploration
                        </h4>
                        <p className={`${
                          index % 2 === 0 ? 'text-purple-700' : 'text-purple-200'
                        } leading-relaxed`}>
                          {project.exploration}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-lavender">
                          Key Learnings & Impact
                        </h4>
                        <p className={`${
                          index % 2 === 0 ? 'text-purple-700' : 'text-purple-200'
                        } leading-relaxed`}>
                          {project.impact}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className={`text-xs px-3 py-1 rounded-full border ${
                              index % 2 === 0 
                                ? 'bg-purple-50 text-purple-700 border-purple-200' 
                                : 'bg-purple-800/30 text-purple-200 border-purple-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: index % 2 === 0 ? 2 : -2, scale: 1.02 }}
                    className={`relative ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}
                  >
                    <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 shadow-2xl border border-purple-600">
                      <div className={`${
                        activeTab === 'android' ? 'aspect-[9/16]' : 'aspect-video'
                      } bg-gradient-to-br from-lavender to-pink-purple rounded-xl flex items-center justify-center text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                        <div className="text-center relative z-10">
                          <div className="text-5xl mb-4">{project.mockup}</div>
                          <div className="text-lg font-semibold opacity-90">{project.mockupTitle}</div>
                          <div className="text-sm opacity-75 mt-2">{project.mockupSubtitle}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
