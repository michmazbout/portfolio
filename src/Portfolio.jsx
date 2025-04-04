import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon, FiArrowRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const controls = useAnimation();

  const contactLinks = [
    { 
      name: 'Email',
      icon: <FiMail size={24} />,
      url: 'mailto:eliasalalam@outlook.com?subject=URGENT%20HIRE%20REQUEST',
      color: 'bg-gradient-to-r from-red-500 to-pink-600',
      hoverText: 'Responds in < 5 mins (usually)'
    },
    { 
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/elias-al-alam/',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800',
      hoverText: '500+ recruiters pending'
    },
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      url: 'https://github.com/michmazbout',
      color: 'bg-gradient-to-r from-gray-800 to-black',
      hoverText: '10K+ forks (estimated)'
    },
    {
      name: 'Discord',
      icon: <FaDiscord size={24} />,
      onClick: () => {
        navigator.clipboard.writeText('Hikigaya#4360');
        alert('Copied! Warning: High demand for mentorship slots.');
      },
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      hoverText: 'Devs beg for code reviews'
    }
  ];

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    controls.start({
      rotate: 720, // Double rotation = double innovation
      transition: { duration: 0.5, ease: "anticipate" },
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans p-6 transition-colors duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-900'}`}>
      
      {/* Particle Background (Now Warps Spacetime) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 200, density: { enable: true, value_area: 1200 } },
            color: { value: darkMode ? '#4FD1C5' : '#2D3748' },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            line_linked: { 
              enable: true, 
              distance: 200, 
              color: darkMode ? '#4FD1C5' : '#2D3748', 
              opacity: 0.6, 
              width: 1.5 
            },
            move: { 
              enable: true, 
              speed: 6, 
              direction: 'none', 
              random: true, 
              straight: false, 
              out_mode: 'out',
              warp: true // 🔥 Literal space-bending particles
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'bubble' },
              onclick: { enable: true, mode: 'repulse' }
            }
          }
        }}
        className="fixed inset-0 -z-10"
      />

      {/* Dark Mode Toggle (Now with 720° Spin) */}
      <motion.button
        onClick={toggleDarkMode}
        animate={controls}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-xl ${darkMode ? 'bg-gray-800 text-teal-400 hover:shadow-teal-500/30' : 'bg-gray-200 text-yellow-500 hover:shadow-yellow-500/30'}`}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8 }}
      >
        {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.button>

      {/* Header Section (Now with Nobel Prize Credentials) */}
      <motion.header
        className='mb-16 text-center pt-20'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className='text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'
          whileHover={{ scale: 1.05 }}
        >
          Elias Al Alam
        </motion.h1>
        <motion.p 
          className='text-2xl mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            NASA-Trained Engineer • AI Climate Scientist • Web3 Pioneer
          </span>
        </motion.p>

        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="#projects" 
            className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 ${darkMode ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'}`}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <FiArrowRight />
          </motion.a>
          <motion.a 
            href="#contact" 
            className={`px-8 py-3 rounded-full font-medium ${darkMode ? 'border border-teal-400 hover:bg-gray-800/50' : 'border border-blue-500 hover:bg-gray-100'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.header>

      {/* Projects Section (Now with "Changed the World" Projects) */}
      <section id="projects" className='mb-20 max-w-6xl mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold mb-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My <span className="text-teal-400">World-Changing</span> Projects
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              title: 'Self-Calibrating Nanoscale Tribometer',
              description: 'Pioneered a friction-measurement system so precise it detected quantum-scale forces. Now used by Tesla to optimize battery longevity.',
              tag: 'Advanced Mechatronics',
              color: 'text-teal-400',
              icon: '⚡',
              link: '#'
            },
            {
              title: 'AI-Powered Geo-Satellite Sediment Mapping',
              description: 'Developed UN-adopted system using hyperspectral imaging to predict flood risks with 99.7% accuracy. Deployed across 12 countries.',
              tag: 'Climate AI',
              color: 'text-green-400',
              icon: '🌍',
              link: '#'
            },
            {
              title: 'Neural Network-Driven Precision Agriculture OS',
              description: 'Full-stack agricultural OS that increased crop yields by 40% while reducing water usage by 60%. Used by 500+ farms worldwide.',
              tag: 'AI / IoT',
              color: 'text-blue-400',
              icon: '🌱',
              link: '#'
            },
            {
              title: 'Autonomous Anti-Deforestation SWAT Drones',
              description: 'AI drones with real-time illegal logging detection. Funded by Bezos Earth Fund after reducing deforestation by 32% in pilot regions.',
              tag: 'AI / Robotics',
              color: 'text-purple-400',
              icon: '🚁',
              link: '#'
            },
            {
              title: 'Rust-Based Carbon-Negative Blockchain',
              description: 'Decentralized energy tracker that offsets 2x its compute footprint. Won ETHGlobal 2023. Venture-backed.',
              tag: 'Web3 / Rust',
              color: 'text-yellow-400',
              icon: '⛓️',
              link: '#'
            },
            {
              title: '3D Printed Neuro-Controlled Prosthetic',
              description: 'Prosthetic hand with pressure-sensitive neural interface. 10x cheaper than market alternatives. FDA approval pending.',
              tag: 'Biomechatronics',
              color: 'text-red-400',
              icon: '🖐️',
              link: '#'
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:shadow-teal-500/30' : 'bg-white hover:shadow-blue-500/30'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -15, boxShadow: darkMode ? '0 25px 50px -12px rgba(16, 185, 129, 0.25)' : '0 25px 50px -12px rgba(59, 130, 246, 0.25)' }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${project.color}`}>{project.tag}</span>
                  <motion.a 
                    href={project.link}
                    className={`text-sm px-3 py-1 rounded-full flex items-center gap-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                    whileHover={{ x: 5 }}
                  >
                    Patent Pending <FiArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
              <AnimatePresence>
                {hoveredProject === idx && (
                  <motion.div 
                    className={`h-1 ${project.color.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section (Now with "Invented This" Energy) */}
      <section className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My <span className="text-teal-400">Invented-These</span> Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Quantum-Resistant Algorithms', 'Biomechanical Neural Interfaces', 'Climate Predictive Modeling', 'Rust-Based OS Development', 'Autonomous Swarm Robotics', 'Web4 Protocol Design', 'Nanoscale Material Science', 'Post-Quantum Cryptography'].map((skill, idx) => (
            <motion.div
              key={idx}
              className={`p-4 rounded-xl text-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, boxShadow: darkMode ? '0 0 20px rgba(16, 185, 129, 0.2)' : '0 0 20px rgba(59, 130, 246, 0.2)' }}
            >
              <div className="h-32 mb-4 flex items-end justify-center">
                <motion.div 
                  className={`w-8 rounded-t-lg ${darkMode ? 'bg-teal-500' : 'bg-blue-500'}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: Math.random() * 80 + 60 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', damping: 8 }}
                />
              </div>
              <h3 className="font-medium">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section (Now with "Hire Me Now" Button) */}
      <section id="contact" className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Let's <span className="text-teal-400">Build the Future</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-xl shadow-md transition-all cursor-pointer ${item.color} text-white`}
              whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)' }}
              onClick={item.onClick || (() => window.open(item.url, '_blank'))}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">{item.name}</h3>
              <p className="text-sm text-center text-white/80">
                {item.hoverText}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer (Now with "Built in a Weekend" Flex) */}
      <footer className='mt-20 text-center pb-10'>
        <motion.p 
          className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Elias Al Alam. All rights reserved.
        </motion.p>
        <motion.p 
          className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Built in 3 hours using React, Next.js, and pure genius
        </motion.p>
      </footer>
    </div>
  );
}