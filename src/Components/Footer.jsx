import { motion } from 'framer-motion';
import { MdFacebook, MdMail, MdPhone, MdLocationOn, MdFavoriteBorder } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  const services = [
    { name: 'Flight Booking', href: '#' },
    { name: 'Hotel Reservations', href: '#' },
    { name: 'Tour Packages', href: '#' },
    { name: 'Travel Insurance', href: '#' },
  ];

  const socialLinks = [
    { icon: MdFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white`}>
      {/* Main Footer */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-primary-blue to-primary-sky rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-poppins text-3xl font-bold mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="font-opensans text-white/80">
                  Get the latest travel tips, exclusive deals, and destination guides delivered to your inbox.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-primary-blue font-poppins font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <h2 className="font-poppins text-2xl font-bold mb-4">
                ✈️ Wanderlust
              </h2>
              <p className="font-opensans text-gray-300 mb-4">
                Your ultimate travel companion for unforgettable adventures around the world.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-primary-sky transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-opensans text-gray-400 hover:text-primary-sky transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="font-poppins font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="font-opensans text-gray-400 hover:text-primary-sky transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="font-poppins font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <MdMail className="text-primary-sky mt-1" size={18} />
                  <span className="font-opensans text-gray-400">
                    info@wanderlust.com
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <MdPhone className="text-primary-sky mt-1" size={18} />
                  <span className="font-opensans text-gray-400">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <MdLocationOn className="text-primary-sky mt-1" size={18} />
                  <span className="font-opensans text-gray-400">
                    123 Travel Street, Adventure City
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-700'} py-8 px-4`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-opensans text-gray-400 text-center md:text-left">
            © {currentYear} Wanderlust Travel. All rights reserved.
          </p>
          <p className="font-opensans text-gray-400 flex items-center gap-2">
            Made with <MdFavoriteBorder className="text-red-500 fill-red-500" size={16} /> by Travel Enthusiasts
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-opensans text-gray-400 hover:text-primary-sky transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-opensans text-gray-400 hover:text-primary-sky transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
