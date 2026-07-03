import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';
import { faqData } from '../data/faq';
import { containerVariants, itemVariants } from '../utils/animations';

const FAQ = ({ darkMode }) => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Find answers to common questions about our travel services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden ${
                darkMode
                  ? 'bg-gray-800 shadow-card'
                  : 'bg-white shadow-card'
              }`}
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleAccordion(faq.id)}
                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                  activeId === faq.id
                    ? 'bg-primary-blue/20'
                    : darkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <h3 className={`font-poppins font-bold text-lg text-left ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdExpandMore className="text-primary-blue text-xl" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden border-t ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                  >
                    <p className={`px-6 py-4 font-opensans ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
