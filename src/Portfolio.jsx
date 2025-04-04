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
      url: 'mailto:eliasalalam@outlook.com?subject=Portfolio%20Inquiry',
      color: 'bg-red-500',
      hoverText: 'eliasalalam@outlook.com'
    },
    { 
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/elias-al-alam/',
      color: 'bg-blue-600',
      hoverText: 'in/elias-al-alam'
    },
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      url: 'https://github.com/michmazbout',
      color: 'bg-gray-800',
      hoverText: '@michmazbout'
    },
    {
      name: 'Discord',
      icon: <FaDiscord size={24} />,
      onClick: () => {
        navigator.clipboard.writeText('Hikigaya#4360');
        alert('Discord username copied to clipboard!');
      },
      color: 'bg-indigo-500',
      hoverText: 'Click to copy username'
    }
  ];

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    controls.start({
      rotate: 360,
      transition: { duration: 0.5 },
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
      
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: darkMode ? '#4FD1C5' : '#2D3748' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: darkMode ? '#4FD1C5' : '#2D3748', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' }
            }
          }
        }}
        className="fixed inset-0 -z-10"
      />

      {/* 3D Floating Sphere */}
      <div className="absolute top-20 right-10 w-40 h-40 md:w-60 md:h-60">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color={darkMode ? '#4FD1C5' : '#2D3748'} roughness={0.2} metalness={0.1} />
          </mesh>
        </Canvas>
      </div>

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        animate={controls}
        className={`fixed top-6 right-6 p-3 rounded-full ${darkMode ? 'bg-gray-800 text-teal-400' : 'bg-gray-200 text-yellow-500'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.button>

      {/* Header Section */}
      <motion.header
        className='mb-16 text-center pt-20'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className='text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'
          whileHover={{ scale: 1.02 }}
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
            Mechanical Engineer • Environmental Scientist • AI Developer
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
            className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-500' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <FiArrowRight />
          </motion.a>
          <motion.a 
            href="#contact" 
            className={`px-8 py-3 rounded-full font-medium ${darkMode ? 'border border-teal-400 hover:bg-gray-800' : 'border border-blue-500 hover:bg-gray-100'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.header>

      {/* Projects Section */}
      <section id="projects" className='mb-20 max-w-6xl mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold mb-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My <span className="text-teal-400">Projects</span>
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              title: 'Autonomous Tribometer',
              description: 'Designed and built a tribometer to measure surface friction with automated sensors and Arduino controls.',
              tag: 'Mechanical Engineering',
              color: 'text-teal-400',
              icon: '⚙️',
              link: '#'
            },
            {
              title: 'Riverbed Sediment Analysis',
              description: 'Developed a method to assess sediment size distribution in riverbeds using image-based percentile extraction and Python analysis.',
              tag: 'Environmental Science',
              color: 'text-green-400',
              icon: '🌊',
              link: '#'
            },
            {
              title: 'Smart Farming App',
              description: 'Built a full-stack app to monitor and optimize irrigation using soil sensors, data visualization, and machine learning forecasts.',
              tag: 'Programming',
              color: 'text-blue-400',
              icon: '🌱',
              link: '#'
            },
            {
              title: 'AI Drone for Forest Monitoring',
              description: 'Programmed autonomous drones with real-time object recognition to identify deforestation patterns and illegal logging activities.',
              tag: 'AI / Robotics',
              color: 'text-purple-400',
              icon: '🚁',
              link: '#'
            },
            {
              title: 'Rust-Based Blockchain Energy Tracker',
              description: 'Created a decentralized app using Rust and smart contracts to trace carbon footprint per kilowatt of consumed electricity.',
              tag: 'Web3 / Rust',
              color: 'text-yellow-400',
              icon: '⛓️',
              link: '#'
            },
            {
              title: '3D Printed Prosthetic Hand',
              description: 'Designed a low-cost, customizable prosthetic hand with pressure-sensitive grip control using 3D printing and Arduino.',
              tag: 'Biomechanics',
              color: 'text-red-400',
              icon: '🖐️',
              link: '#'
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:shadow-teal-500/20' : 'bg-white hover:shadow-blue-500/20'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: darkMode ? '0 20px 25px -5px rgba(16, 185, 129, 0.1)' : '0 20px 25px -5px rgba(59, 130, 246, 0.1)' }}
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
                    View <FiArrowRight size={14} />
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

      {/* Skills Section */}
      <section className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My <span className="text-teal-400">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['CAD Design', 'Python', 'Machine Learning', 'Environmental Analysis', 'Rust', 'IoT', '3D Printing', 'Blockchain'].map((skill, idx) => (
            <motion.div
              key={idx}
              className={`p-4 rounded-xl text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-32 mb-4 flex items-end justify-center">
                <motion.div 
                  className={`w-8 rounded-t-lg ${darkMode ? 'bg-teal-500' : 'bg-blue-500'}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: Math.random() * 80 + 40 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', damping: 10 }}
                />
              </div>
              <h3 className="font-medium">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Let's <span className="text-teal-400">Connect</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-xl shadow-md transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} cursor-pointer`}
              whileHover={{ y: -5 }}
              onClick={item.onClick || (() => window.open(item.url, '_blank'))}
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">{item.name}</h3>
              <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.hoverText}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
          Built with React, Next.js, Framer Motion, Three.js & Tailwind CSS
        </motion.p>
      </footer>
    </div>
  );
}