import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdArrowUpward } from 'react-icons/md';

const ScrollTop = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-blue to-primary-sky z-40"
        style={{
          scaleX: `calc(var(--scroll-progress, 0) * 1)`,
          transformOrigin: 'left',
        }}
        onViewportBoxUpdate={({ scrollProgress }) => {
          document.documentElement.style.setProperty(
            '--scroll-progress',
            scrollProgress
          );
        }}
      ></motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-lg transition-all ${
          darkMode
            ? 'bg-primary-blue hover:bg-primary-sky'
            : 'bg-primary-blue hover:bg-primary-sky'
        } text-white`}
      >
        <MdArrowUpward size={24} />
      </motion.button>
    </>
  );
};

export default ScrollTop;
