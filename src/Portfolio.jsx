import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon, FiArrowRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import confetti from 'canvas-confetti';

export default function Portfolio() {
  // ============= STATE =============
  const [darkMode, setDarkMode] = useState(true);
  const [nobelMode, setNobelMode] = useState(false);
  const [unlockAttempts, setUnlockAttempts] = useState(0);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [unlockInput, setUnlockInput] = useState('');
  const [hypeCount, setHypeCount] = useState(14258);
  const [googleRejections, setGoogleRejections] = useState(2);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showModal, setShowModal] = useState({ active: false, type: null });
  const controls = useAnimation();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  // ============= CONSTANTS =============
  const GOLD_UNLOCK_RIDDLE = {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "echo"
  };

  const projects = [
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
  ];

  const skills = [
    'Quantum-Resistant Algorithms', 
    'Biomechanical Neural Interfaces',
    'Climate Predictive Modeling',
    'Rust-Based OS Development',
    'Autonomous Swarm Robotics',
    'Web4 Protocol Design',
    'Nanoscale Material Science',
    'Post-Quantum Cryptography'
  ];

  const contactLinks = [
    { 
      name: 'Email',
      icon: <FiMail size={24} />,
      color: 'bg-gradient-to-r from-red-500 to-pink-600',
      hoverText: 'Responds in < 5 mins (usually)',
      modal: {
        title: "⚠️ Email Privileges Request",
        message: "By contacting Elias, you agree to:",
        terms: [
          "📧 Receive replies written in Shakespearean English",
          "🤖 Potential AI-generated haiku responses",
          "🔥 Spontaneous confetti explosions"
        ]
      }
    },
    { 
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      color: 'bg-gradient-to-r from-blue-600 to-blue-800',
      hoverText: '500+ recruiters pending',
      modal: {
        title: "🔗 LinkedIn Access Challenge",
        message: "To proceed, you must:",
        terms: [
          "💼 Have at least 1 mutual connection who worships Elias",
          "🌟 Promise not to send generic connection requests",
          "🦸‍♂️ Acknowledge Elias as your professional hero"
        ]
      }
    },
    {
      name: 'GitHub',
      icon: <FiGithub size={24} />,
      color: 'bg-gradient-to-r from-gray-800 to-black',
      hoverText: '10K+ forks (estimated)',
      modal: {
        title: "👨‍💻 GitHub Code Review",
        message: "Warning: Viewing Elias's code may cause:",
        terms: [
          "🤯 Imposter syndrome",
          "💡 Sudden enlightenment",
          "⌨️ Urge to rewrite all your projects"
        ]
      }
    },
    {
      name: 'Discord',
      icon: <FaDiscord size={24} />,
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      hoverText: 'Devs beg for code reviews',
      modal: {
        title: "🎮 Discord Initiation",
        message: "By joining Elias's server, you pledge to:",
        terms: [
          "🤫 Never ask 'how to center a div'",
          "🐛 Report bugs in iambic pentameter",
          "🏆 Worship the #god-tier-code channel"
        ]
      }
    }
  ];

  // ============= EFFECTS =============
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let input = [];
    const handleKeyDown = (e) => {
      input.push(e.key);
      if (input.length > konamiCode.length) input.shift();
      if (input.join('') === konamiCode.join('')) {
        setGoogleRejections(prev => prev + 1);
        setShowGoogleModal(true);
        setTimeout(() => setShowGoogleModal(false), 3000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHypeCount(prev => prev + Math.floor(Math.random() * 5));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // ============= HANDLERS =============
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    controls.start({
      rotate: 720,
      transition: { duration: 0.5, ease: "anticipate" },
    });
  };

  const handleNobelClick = () => {
    if (nobelMode) {
      setNobelMode(false);
    } 
    else if (unlockAttempts < 2) {
      setUnlockAttempts(unlockAttempts + 1);
      controls.start({
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 0.6 }
      });
      setTimeout(() => {
        setShowUnlockModal(true);
        setTimeout(() => setShowUnlockModal(false), 2000);
      }, 500);
    }
    else {
      setShowUnlockModal(true);
    }
  };

  const checkRiddleAnswer = () => {
    if (unlockInput.toLowerCase().trim() === GOLD_UNLOCK_RIDDLE.answer) {
      setNobelMode(true);
      setShowUnlockModal(false);
      confetti({
        particleCount: 300,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#C0C0C0', '#CD7F32']
      });
    } else {
      setUnlockAttempts(0);
      setShowUnlockModal(false);
    }
    setUnlockInput('');
  };

  const triggerModal = (type) => {
    setShowModal({ active: true, type });
  };

  const handleContactAction = (type) => {
    setShowModal({ active: false, type: null });
    if (type === 0) { // Email
      confetti({ particleCount: 150, spread: 70 });
      window.open('mailto:eliasalalam@outlook.com?subject=URGENT%20HIRE%20REQUEST', '_blank');
    } 
    else if (type === 1) { // LinkedIn
      window.open('https://www.linkedin.com/in/elias-al-alam/', '_blank');
    }
    else if (type === 2) { // GitHub
      window.open('https://github.com/michmazbout', '_blank');
    }
    else if (type === 3) { // Discord
      navigator.clipboard.writeText('Hikigaya#4360');
      alert('Discord username copied! Prepare for enlightenment.');
    }
  };

  // ============= STYLE HELPERS =============
  const getTextColor = () => {
    if (nobelMode) return 'text-amber-100';
    return darkMode ? 'text-white' : 'text-gray-900';
  };

  const getModalBg = () => {
    if (nobelMode) return 'bg-amber-900';
    return darkMode ? 'bg-gray-800' : 'bg-white';
  };

  const getModalText = () => {
    if (nobelMode) return 'text-amber-100';
    return darkMode ? 'text-gray-300' : 'text-gray-700';
  };

  // ============= RENDER =============
  return (
    <div className={`min-h-screen font-sans p-6 transition-colors duration-500 ${
      nobelMode ? 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700' :
      darkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 
      'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
    }`}>
      
      {/* ===== NOBEL MODE BANNER ===== */}
      {nobelMode && (
        <motion.div 
          className="absolute top-0 left-0 w-full py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-center font-bold z-50"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          NOBEL PRIZE MODE ACTIVATED • ALL HAIL ELIAS
        </motion.div>
      )}

      {/* ===== PARTICLE BACKGROUND ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 200, density: { enable: true, value_area: 1200 } },
            color: { 
              value: nobelMode ? '#FFD700' : (darkMode ? '#4FD1C5' : '#2D3748')
            },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            line_linked: { 
              enable: true, 
              distance: 200, 
              color: nobelMode ? '#FFD700' : (darkMode ? '#4FD1C5' : '#2D3748'),
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
              warp: true
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

      {/* ===== DARK MODE TOGGLE ===== */}
      <motion.button
        onClick={toggleDarkMode}
        animate={controls}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-xl ${
          nobelMode ? 'bg-amber-700 text-amber-200' :
          darkMode ? 'bg-gray-800 text-teal-400' : 'bg-gray-200 text-yellow-500'
        }`}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8 }}
      >
        {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.button>

      {/* ===== NOBEL MODE TOGGLE ===== */}
      <motion.button
        onClick={handleNobelClick}
        className={`fixed top-20 right-6 p-3 rounded-full ${
          nobelMode ? 'bg-gradient-to-r from-amber-400 to-amber-600' : 'bg-gray-500'
        }`}
        whileHover={{ scale: 1.3, rotate: 360 }}
        whileTap={{ scale: 0.8 }}
      >
        🏆
      </motion.button>

      {/* ===== UNLOCK MODAL ===== */}
      <AnimatePresence>
        {showUnlockModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`p-8 rounded-xl text-center max-w-md ${
                nobelMode ? 'bg-amber-900 text-amber-100' :
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
              }`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              {unlockAttempts < 2 ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">
                    {unlockAttempts === 0 ? "🔒 Nobel Mode Locked" : "🤔 Still Trying?"}
                  </h2>
                  <p className="mb-4">
                    {unlockAttempts === 0 
                      ? "This mode requires solving the Riddle of Elias." 
                      : "Perseverance is key, but wisdom is required."}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4">Final Challenge</h2>
                  <p className="mb-2 italic">"{GOLD_UNLOCK_RIDDLE.question}"</p>
                  <input
                    type="text"
                    value={unlockInput}
                    onChange={(e) => setUnlockInput(e.target.value)}
                    className={`px-4 py-2 border rounded mb-4 w-full text-center ${
                      nobelMode ? 'bg-amber-800 border-amber-600 text-amber-100' :
                      darkMode ? 'bg-gray-700 border-gray-600 text-white' : 
                      'bg-gray-100 border-gray-300 text-gray-800'
                    }`}
                    placeholder="Your answer..."
                    autoFocus
                  />
                  <button 
                    onClick={checkRiddleAnswer}
                    className={`px-4 py-2 rounded ${
                      nobelMode ? 'bg-amber-600 text-white' :
                      darkMode ? 'bg-teal-500 text-white' : 'bg-blue-500 text-white'
                    }`}
                  >
                    Submit Answer
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HYPE COUNTER ===== */}
      <motion.div 
        className={`fixed top-32 right-6 text-lg font-mono ${
          nobelMode ? 'text-amber-300' :
          darkMode ? 'text-teal-300' : 'text-blue-600'
        }`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🚀 RECRUITER HYPE: {hypeCount.toLocaleString()}+  
      </motion.div>

      {/* ===== HEADER ===== */}
      <motion.header
        className='mb-16 text-center pt-20'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className={`text-6xl font-bold mb-4 bg-clip-text text-transparent ${
            nobelMode ? 'bg-gradient-to-r from-amber-300 to-amber-500' :
            'bg-gradient-to-r from-teal-400 to-blue-500'
          }`}
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
          <span className={nobelMode ? 'text-amber-200' : 
                          (darkMode ? 'text-gray-400' : 'text-gray-600')}>
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
            className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 ${
              nobelMode ? 'bg-gradient-to-r from-amber-500 to-amber-700' :
              darkMode ? 'bg-gradient-to-r from-teal-600 to-blue-600' : 
              'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <FiArrowRight />
          </motion.a>
          <motion.a 
            href="#contact" 
            className={`px-8 py-3 rounded-full font-medium ${
              nobelMode ? 'border border-amber-400 hover:bg-amber-800/50' :
              darkMode ? 'border border-teal-400 hover:bg-gray-800/50' : 
              'border border-blue-500 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.header>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className='mb-20 max-w-6xl mx-auto px-4'>
        <motion.h2
          className={`text-4xl font-bold mb-10 text-center ${
            nobelMode ? 'text-amber-300' : 'text-teal-400'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My <span className={nobelMode ? 'text-amber-400' : 'text-teal-400'}>World-Changing</span> Projects
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                nobelMode ? 'bg-amber-900/80 hover:shadow-amber-500/30' :
                darkMode ? 'bg-gray-800 hover:shadow-teal-500/30' : 
                'bg-white hover:shadow-blue-500/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -15 }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                <p className={`mb-4 ${
                  nobelMode ? 'text-amber-100' :
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${project.color}`}>{project.tag}</span>
                  <motion.a 
                    href={project.link}
                    className={`text-sm px-3 py-1 rounded-full flex items-center gap-1 ${
                      nobelMode ? 'bg-amber-800 hover:bg-amber-700' :
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 
                      'bg-gray-100 hover:bg-gray-200'
                    }`}
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

      {/* ===== SKILLS ===== */}
      <section className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className={`text-4xl font-bold mb-10 text-center ${
            nobelMode ? 'text-amber-300' : 'text-teal-400'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My <span className={nobelMode ? 'text-amber-400' : 'text-teal-400'}>Invented-These</span> Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className={`p-4 rounded-xl text-center ${
                nobelMode ? 'bg-amber-900/80 hover:bg-amber-800' :
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 
                'bg-white hover:bg-gray-100'
              } shadow-md`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="h-32 mb-4 flex items-end justify-center">
                <motion.div 
                  className={`w-8 rounded-t-lg ${
                    nobelMode ? 'bg-amber-500' :
                    darkMode ? 'bg-teal-500' : 'bg-blue-500'
                  }`}
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

      {/* ===== CONTACT ===== */}
      <section id="contact" className="mb-20 max-w-4xl mx-auto px-4">
        <motion.h2 
          className={`text-4xl font-bold mb-10 text-center ${
            nobelMode ? 'text-amber-300' : 'text-teal-400'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Let's <span className={nobelMode ? 'text-amber-400' : 'text-teal-400'}>Build the Future</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-xl shadow-md transition-all cursor-pointer ${item.color} text-white`}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => triggerModal(idx)}
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
      {/* 🟡 Nobel-Mode-Aware Easter Eggs */}

      <motion.div 
        className={`fixed bottom-4 left-4 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-md ${
          nobelMode ? 'bg-amber-700 text-amber-200 shadow-amber-500/30' :
          darkMode ? 'bg-gray-800 text-teal-400' : 'bg-gray-200 text-gray-800'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        🌱 {nobelMode ? 'Beyond Carbon-Negative' : 'CO₂-NEGATIVE HOSTING'}  
        <motion.span 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ({nobelMode ? 'Powered by genius' : 'Source: Trust me'})
        </motion.span>
      </motion.div>

      <div className={`fixed bottom-4 right-4 flex items-center gap-1 text-xs opacity-80 font-medium ${
        nobelMode ? 'text-amber-300/90' :
        darkMode ? 'text-gray-500' : 'text-gray-600'
      }`}>
        🔈 "
        {nobelMode 
          ? 'This man needs to be stopped.' 
          : 'This portfolio sounds as good as it looks'
        }" — {nobelMode ? 'Elon Musk' : 'WSJ'}
      </div>

      {/* ===== FOOTER ===== */}
      <footer className='mt-20 text-center pb-10'>
        <motion.p 
          className={`text-sm mb-2 ${
            nobelMode ? 'text-amber-300/80' :
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Elias Al Alam. All rights reserved.
        </motion.p>
        <motion.p 
          className={`text-xs ${
            nobelMode ? 'text-amber-400/60' :
            darkMode ? 'text-gray-600' : 'text-gray-500'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Built with React, Next.js, Framer Motion & pure genius
        </motion.p>
      </footer>

      {/* ===== GOOGLE REJECTION MODAL ===== */}
      <AnimatePresence>
        {showGoogleModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`p-8 rounded-xl text-center max-w-md ${
                nobelMode ? 'bg-amber-900 text-amber-100' :
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
              }`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Google Rejection #{googleRejections}</h2>
              <p className="mb-4">"We can't afford you." — Sundar Pichai (probably)</p>
              <button 
                onClick={() => setShowGoogleModal(false)}
                className={`px-4 py-2 rounded ${
                  nobelMode ? 'bg-amber-600 text-white' :
                  darkMode ? 'bg-teal-500 text-white' : 'bg-blue-500 text-white'
                }`}
              >
                😎 Understandable
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== CONTACT MODALS ===== */}
      <AnimatePresence>
        {showModal.active && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`p-8 rounded-xl text-center max-w-md ${
                nobelMode ? 'bg-amber-900 text-amber-100' :
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
              }`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {contactLinks[showModal.type].modal.title}
              </h2>
              <p className="mb-4">
                {contactLinks[showModal.type].modal.message}
              </p>
              <ul className={`text-left mb-6 space-y-2 ${
                nobelMode ? 'text-amber-200' : 
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {contactLinks[showModal.type].modal.terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>•</span> {term}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => handleContactAction(showModal.type)}
                  className={`px-4 py-2 rounded ${
                    nobelMode ? 'bg-amber-600 text-white' :
                    darkMode ? 'bg-teal-500 text-white' : 'bg-blue-500 text-white'
                  }`}
                >
                  I Accept
                </button>
                <button 
                  onClick={() => setShowModal({ active: false, type: null })}
                  className={`px-4 py-2 rounded ${
                    nobelMode ? 'bg-amber-800 text-amber-100' :
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}