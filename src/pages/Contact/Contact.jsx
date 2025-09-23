import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
             className="relative bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] flex items-center justify-center"
             style={{
               backgroundImage: "url(https://i.ibb.co.com/9k9skV6Q/school-children-group-girls-boy-students-uniform-over-bl-black-background-97032148.webp) ",
             }}
           >
             {/* <a href="https://ibb.co.com/zhdLYdzv"><img src="https://i.ibb.co.com/zhdLYdzv/dsc00670-480.jpg" alt="dsc00670-480" border="0"></a> */}
             <div className="absolute inset-0 bg-black/60"></div>
             <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="relative text-center text-white z-10 px-4 sm:px-6"
             >
               <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                 About Our Mission
               </h1>
               <div className="flex justify-center items-center space-x-2 text-sm sm:text-base">
                 <Link
                   to="/"
                   className="hover:text-[#0AB99D] transition-colors duration-300"
                 >
                   Home
                 </Link>
                 <span className="text-gray-300">||</span>
                 <Link to="" className="text-[#0AB99D] font-semibold">
                   About Us
                 </Link>
               </div>
             </motion.div>
           </section>

      <section>
        <div className="bg-amber-50 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 bg-white shadow-lg p-6 sm:p-10 rounded-2xl">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2A46] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3 mb-6">
                We’re here to support our mission to end child marriage in Bangladesh. Reach out to us to learn more or get involved.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 bg-amber-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaMapMarkerAlt className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">Our Address</h4>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      LAMB Project Office, Dinajpur, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 bg-amber-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaClock className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">Hours of Operation</h4>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Monday - Friday: 9:00am to 5:00pm
                    </p>
                    <span className="text-xs text-gray-400">
                      [Closed on Weekends]
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start space-x-4 bg-amber-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaPhoneAlt className="text-[#0AB99D] text-xl sm:text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">Contact</h4>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Phone: +41 (0)31 991 55 56
                    </p>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Email: noemi.grossen@womenshope.ch
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Phone*
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <button
                className="bg-[#0AB99D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium shadow-md hover:bg-[#09917C] transition-colors duration-300 text-sm sm:text-base"
              >
                Send Message →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#0AB99D] py-12 sm:py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
                className="px-4 py-3 sm:py-4 bg-white rounded-l-lg w-full text-gray-900 focus:outline-none text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-3 sm:py-4 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base">
                Subscribe Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;