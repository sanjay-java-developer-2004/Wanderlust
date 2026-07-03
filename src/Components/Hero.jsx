import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdExpandMore, MdSearch } from 'react-icons/md';

const Hero = ({ darkMode }) => {
  const [destination, setDestination] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=800&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-10 w-24 h-24 bg-primary-sky/20 rounded-full blur-3xl z-10"
      ></motion.div>
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl z-10"
      ></motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Discover Your{' '}
          <span className="text-gradient">Next Adventure</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-opensans text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Explore the world's most breathtaking destinations and create unforgettable memories.
          Your journey starts here.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="flex gap-2 mb-8 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Search destination..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-blue text-gray-800 placeholder-gray-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-sky rounded-lg font-poppins font-bold text-white hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
            <MdSearch className="text-lg" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-sky rounded-lg font-poppins font-bold text-white text-lg hover:shadow-xl transition-all btn-ripple"
          >
            Explore Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg font-poppins font-bold text-white text-lg hover:bg-white/30 transition-all btn-ripple"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-white">
          <p className="text-sm mb-2">Scroll to explore</p>
          <MdExpandMore className="text-2xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
