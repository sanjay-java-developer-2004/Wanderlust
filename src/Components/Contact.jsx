import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdMail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { containerVariants, itemVariants } from '../utils/animations';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', destination: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: 'Address',
      info: '123 Travel Street, Adventure City, AC 12345',
    },
    {
      icon: <MdPhone className="text-2xl" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
    },
    {
      icon: <MdMail className="text-2xl" />,
      title: 'Email',
      info: 'info@wanderlust.com',
    },
  ];

  return (
    <section
      id="contact"
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
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className={`font-opensans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-8 ${
                darkMode
                  ? 'bg-gray-900 shadow-card'
                  : 'bg-gray-50 shadow-card'
              } text-center`}
            >
              <div className="flex justify-center mb-4 text-primary-blue">
                {info.icon}
              </div>
              <h3 className={`font-poppins font-bold text-xl mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {info.title}
              </h3>
              <p className={`font-opensans ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {info.info}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`max-w-2xl mx-auto rounded-2xl p-8 ${
            darkMode
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 shadow-card'
              : 'bg-gradient-to-br from-gray-50 to-white shadow-card'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className={`block font-poppins font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-primary-blue ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 hover:border-gray-400'
                }`}
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className={`block font-poppins font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-primary-blue ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 hover:border-gray-400'
                }`}
                placeholder="your@email.com"
              />
            </div>

            {/* Destination Input */}
            <div>
              <label className={`block font-poppins font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Desired Destination
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-primary-blue ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 hover:border-gray-400'
                }`}
                placeholder="e.g., Paris, Bali, Tokyo"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className={`block font-poppins font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-primary-blue resize-none ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 hover:border-gray-400'
                }`}
                placeholder="Tell us about your travel dreams..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-sky rounded-lg font-poppins font-bold text-white text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  ></motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <MdSend className="text-lg" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-100 text-green-700 rounded-lg font-opensans text-center"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
