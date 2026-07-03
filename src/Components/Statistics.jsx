import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatItem = ({ number, suffix, label, darkMode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const target = parseInt(number.toString().match(/\d+/)[0]);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className={`text-center p-8 rounded-2xl ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-gray-50 to-white'
      } shadow-card`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="font-poppins text-5xl md:text-6xl font-bold text-gradient mb-2">
          {count}
          {suffix}
        </h3>
        <p className={`font-opensans text-lg font-semibold ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Statistics = ({ darkMode }) => {
  const stats = [
    { number: '1000000', suffix: '+', label: 'Happy Travelers' },
    { number: '250', suffix: '', label: 'Destinations' },
    { number: '150', suffix: '', label: 'Hotels' },
    { number: '98', suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      id="statistics"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Impact</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            See the scale of adventures we've made possible
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              darkMode={darkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
