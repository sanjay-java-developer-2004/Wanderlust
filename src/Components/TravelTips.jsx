import { motion } from 'framer-motion';
import { travelTips } from '../data/travelTips';
import { containerVariants, itemVariants } from '../utils/animations';

const TravelTips = ({ darkMode }) => {
  return (
    <section
      id="travel-tips"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
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
            <span className="text-gradient">Travel Tips</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Essential advice for your perfect trip
          </p>
        </motion.div>

        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {travelTips.map((tip) => (
            <motion.div
              key={tip.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-6 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800'
                  : 'bg-gradient-to-br from-gray-50 to-white'
              } shadow-card border border-primary-blue/20`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{tip.icon}</div>

              {/* Title */}
              <h3 className={`font-poppins text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {tip.title}
              </h3>

              {/* Tips List */}
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {tip.tips.map((tipItem, index) => (
                  <li key={index} className="font-opensans text-sm flex gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>{tipItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TravelTips;
