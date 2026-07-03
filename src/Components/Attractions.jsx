import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';
import { attractions } from '../data/attractions';
import { containerVariants, itemVariants } from '../utils/animations';

const Attractions = ({ darkMode }) => {
  return (
    <section
      id="attractions"
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
            <span className="text-gradient">Top Attractions</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover incredible experiences and iconic landmarks
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {attractions.map((attraction) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${
                darkMode ? 'bg-gray-900 shadow-card' : 'bg-gray-50 shadow-card'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 text-5xl">{attraction.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`font-poppins text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {attraction.name}
                </h3>

                <p className={`font-opensans mb-6 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {attraction.description}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-primary-blue font-poppins font-bold hover:text-primary-sky transition-colors"
                >
                  Learn More <MdArrowForward size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Attractions;
