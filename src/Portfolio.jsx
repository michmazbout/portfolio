import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans p-6'>
      <motion.header
        className='mb-10 text-center'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-5xl font-bold mb-2'>Elias Al Alam</h1>
        <p className='text-xl text-gray-400'>Mechanical Engineer • Environmental Scientist • Programmer</p>
      </motion.header>

      <section className='mb-16'>
        <motion.h2
          className='text-3xl font-semibold mb-6 border-b border-gray-700 pb-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Projects
        </motion.h2>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              title: 'Autonomous Tribometer',
              description: 'Designed and built a tribometer to measure surface friction with automated sensors and Arduino controls.',
              tag: 'Mechanical Engineering',
              color: 'text-teal-400',
            },
            {
              title: 'Riverbed Sediment Analysis',
              description: 'Developed a method to assess sediment size distribution in riverbeds using image-based percentile extraction and Python analysis.',
              tag: 'Environmental Science',
              color: 'text-green-400',
            },
            {
              title: 'Smart Farming App',
              description: 'Built a full-stack app to monitor and optimize irrigation using soil sensors, data visualization, and machine learning forecasts.',
              tag: 'Programming',
              color: 'text-blue-400',
            },
            {
              title: 'AI Drone for Forest Monitoring',
              description: 'Programmed autonomous drones with real-time object recognition to identify deforestation patterns and illegal logging activities.',
              tag: 'AI / Robotics',
              color: 'text-purple-400',
            },
            {
              title: 'Rust-Based Blockchain Energy Tracker',
              description: 'Created a decentralized app using Rust and smart contracts to trace carbon footprint per kilowatt of consumed electricity.',
              tag: 'Web3 / Rust',
              color: 'text-yellow-400',
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className='rounded-2xl bg-gray-800 shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-300 mb-2'>{project.description}</p>
              <span className={`text-sm ${project.color}`}>{project.tag}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className='mt-20 text-center text-gray-500 text-sm'>
        &copy; {new Date().getFullYear()} Elias Al Alam. All rights reserved.
      </footer>
    </div>
  );
}
