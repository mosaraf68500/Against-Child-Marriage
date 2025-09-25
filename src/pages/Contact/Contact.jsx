import React, { useState } from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "How can I report a child marriage?",
      answer: "Contact the Child Helpline at 1098, local police, or NGOs listed in our Resources section.",
    },
    {
      question: "How can I volunteer with AMR Voices?",
      answer: "Visit our Volunteer page or contact us to learn about opportunities to support our mission.",
    },
    {
      question: "What support do you offer for girls at risk?",
      answer: "We provide education, counseling, and connect girls with NGOs and government services.",
    },
  ];

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Odd: left, Even: right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact - AMR Voices Against Child Marriage</title>
        <meta
          name="description"
          content="Get in touch with AMR Voices Against Child Marriage to support our mission to end child marriage in Bangladesh. Contact us or subscribe to our newsletter."
        />
        <meta
          name="keywords"
          content="contact, AMR Voices, child marriage, Bangladesh, support, newsletter"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/9k9skV6Q/school-children-group-girls-boy-students-uniform-over-bl-black-background-97032148.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="flex justify-center items-center space-x-4 text-sm sm:text-base">
            <Link
              to="/"
              className="text-white hover:text-teal-400 transition-colors duration-300"
              aria-label="Go to Home"
            >
              Home
            </Link>
            <span className="text-gray-300">||</span>
            <Link
              to="/contact"
              className="text-teal-400 font-semibold"
              aria-label="Contact Us"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-amber-50 to-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 bg-white shadow-lg p-6 sm:p-10 rounded-2xl"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2A46] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 mb-6">
              We’re here to support our mission to end child marriage in Bangladesh. Reach out to learn more or get involved.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />,
                  title: "Our Address",
                  content: "LAMB Project Office, Dinajpur, Bangladesh",
                },
                {
                  icon: <FaClock className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />,
                  title: "Hours of Operation",
                  content: "Monday - Friday: 9:00am to 5:00pm",
                  subContent: "[Closed on Weekends]",
                },
                {
                  icon: <FaPhoneAlt className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />,
                  title: "Contact",
                  content: "Phone: +41 (0)31 991 55 56\nEmail: noemi.grossen@womenshope.ch",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start space-x-4 bg-amber-50 p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {item.icon}
                  <div>
                    <h4 className="text-sm text-gray-500">{item.title}</h4>
                    <p className="font-medium text-gray-800 text-sm sm:text-base whitespace-pre-line">
                      {item.content}
                    </p>
                    {item.subContent && (
                      <span className="text-xs text-gray-400">{item.subContent}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {[
              { label: "Name*", name: "name", type: "text", placeholder: "Your Name" },
              { label: "Email Address*", name: "email", type: "email", placeholder: "Your Email" },
              { label: "Phone*", name: "phone", type: "text", placeholder: "Your Phone" },
              { label: "Subject*", name: "subject", type: "text", placeholder: "Subject" },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <label className="block text-sm font-medium text-[#0E2A46]">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                  aria-label={field.label}
                  required
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-[#0E2A46]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                aria-label="Message"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="bg-[#0AB99D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium shadow-md hover:bg-[#09917C] transition-colors duration-300 text-sm sm:text-base"
              aria-label="Send Message"
            >
              Send Message →
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-900 mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#0AB99D] py-12 sm:py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
              Stay Updated with Our Mission
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Subscribe to our newsletter for updates on our fight against child marriage.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 sm:py-4 bg-white rounded-l-lg w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                aria-label="Newsletter Email"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                aria-label="Subscribe to Newsletter"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

     
    </div>
  );
};

export default Contact;