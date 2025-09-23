import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-gray-800 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-bold mb-4">Voice Against Child Marriage</h3>
            <p className="text-gray-300">
              Dedicated to ending child marriage through awareness, advocacy, and support.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeIn}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Mission', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={fadeIn}>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Join our newsletter for updates and ways to help.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-white rounded-l-md border focus:outline-white"
              />
              <button className="bg-[#22A3D1] px-4 py-2 rounded-r-md hover:bg-[#0b7da6] transition-colors duration-300">
                Subscribe
              </button>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          variants={fadeIn}
        >
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Voice Against Child Marriage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;