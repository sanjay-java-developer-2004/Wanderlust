import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages, categories } from '../data/gallery';
import { containerVariants, itemVariants } from '../utils/animations';

const Gallery = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section
      id="gallery"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Beautiful Gallery</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Stunning travel photography from around the world
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-poppins font-bold capitalize transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-blue to-primary-sky text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden group cursor-pointer shadow-card"
              layoutId={`gallery-${image.id}`}
            >
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/favicon.svg';
                    e.currentTarget.classList.add('loaded');
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>

                {/* Overlay Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <div>
                    <h3 className="text-white font-poppins font-bold text-lg">{image.title}</h3>
                    <p className="text-primary-sky font-opensans capitalize">{image.category}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;