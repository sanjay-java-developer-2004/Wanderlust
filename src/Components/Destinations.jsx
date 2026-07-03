import { motion } from 'framer-motion';
import { MdStar, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { destinations } from '../data/destinations';
import { fadeInUp, containerVariants, itemVariants } from '../utils/animations';

const Destinations = ({ darkMode }) => {
  return (
    <section
      id="destinations"
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
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              Popular
            </span>{' '}
            <span className="text-gradient">Destinations</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore some of the world's most amazing travel destinations
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer shadow-card transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Rating Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-1 ${
                  darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                } backdrop-blur-sm`}>
                  <MdStar className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="font-poppins font-bold text-sm">{dest.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MdLocationOn className="text-primary-blue" size={16} />
                  <p className={`text-sm font-opensans ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {dest.country}
                  </p>
                </div>

                <h3 className="font-poppins text-xl font-bold mb-2">
                  {dest.name}
                </h3>

                <p className={`font-opensans text-sm mb-4 line-clamp-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {dest.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-poppins font-bold text-primary-blue text-lg">
                    {dest.price}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full group-hover:bg-primary-blue transition-colors ${
                      darkMode ? 'hover:bg-primary-blue' : 'hover:bg-primary-blue/10'
                    }`}
                  >
                    <MdArrowForward className="text-primary-blue group-hover:text-white transition-colors" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
