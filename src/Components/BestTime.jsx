import { motion } from 'framer-motion';
import { seasonalData } from '../data/seasons';
import { containerVariants, itemVariants } from '../utils/animations';

const BestTime = ({ darkMode }) => {
  return (
    <section
      id="best-time"
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
            <span className="text-gradient">Best Time to Visit</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Plan your trip according to the perfect season
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-sky"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {seasonalData.map((season, index) => (
              <motion.div
                key={season.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-8 ${
                      darkMode
                        ? 'bg-gray-800 shadow-card'
                        : 'bg-white shadow-card'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{season.emoji}</span>
                      <h3 className="font-poppins text-3xl font-bold text-gradient">
                        {season.season}
                      </h3>
                    </div>

                    <p className={`font-opensans mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="font-bold text-primary-blue">Weather: </span>
                      {season.weather}
                    </p>

                    <p className={`font-opensans mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="font-bold text-primary-blue">Temperature: </span>
                      {season.temperature}
                    </p>

                    <div className="mb-4">
                      <p className="font-bold text-primary-blue mb-2">Activities:</p>
                      <div className="flex flex-wrap gap-2">
                        {season.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-opensans"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm font-opensans">
                      <span className={`px-3 py-1 rounded-full ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        Crowd: {season.crowdLevel}
                      </span>
                      <span className="px-3 py-1 bg-primary-sand/30 text-primary-blue rounded-full">
                        Cost: {season.cost}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-1/2 justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 bg-gradient-to-r from-primary-blue to-primary-sky rounded-full z-10 shadow-lg"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestTime;
