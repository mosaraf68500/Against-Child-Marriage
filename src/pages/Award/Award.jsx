import React from "react";
import { motion } from "framer-motion";
import awardImage from "../../assets/award.jpg"
import { Award, Trophy, Star, Users, Heart, Globe, Mail } from "lucide-react";

const AwardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/9k9skV6Q/school-children-group-girls-boy-students-uniform-over-bl-black-background-97032148.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AMR Voices Against Child Marriage
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Honoring our achievements in the fight against child marriage in Bangladesh
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center space-x-4 mt-6"
          >
            <a
              href="/"
              className="text-sm sm:text-base text-white hover:text-teal-400 transition-colors duration-300"
              aria-label="Go to Home"
            >
              Home
            </a>
            <span className="text-gray-300">||</span>
            <a
              href="/about"
              className="text-sm sm:text-base text-teal-400 font-semibold"
              aria-label="About Us"
            >
              About Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Awards & Achievements
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Celebrating the recognition and impact of our mission to end child marriage through community engagement, education, and advocacy.
          </p>
          <img
            src={awardImage}
            alt="Awards and Recognition"
            className="mt-8 w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* International Recognition Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">International Recognition</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    UN Women Award for Gender Equality
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Awarded to AMR Voices for outstanding work in preventing child marriage through community engagement and education programs.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">2023</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    UNICEF Innovation Award
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Recognition for innovative mobile technology solutions to identify and prevent child marriages in rural areas.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">2022</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* National Awards Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Trophy className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">National Awards</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Prime Minister's Award for Social Service
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  AMR Voices - For exceptional community outreach and education programs.
                </p>
                <div className="text-sm text-blue-600 font-medium">2023</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ministry of Women Affairs Recognition
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  [Recipient Name] - Outstanding individual contribution to child protection advocacy.
                </p>
                <div className="text-sm text-blue-600 font-medium">2022</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bangladesh NGO Foundation Award
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  [Foundation Name] - Excellence in grassroots mobilization and awareness campaigns.
                </p>
                <div className="text-sm text-blue-600 font-medium">2021</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Heroes Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Users className="h-8 w-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Community Heroes</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Local Leader Recognition</h3>
                  <div className="text-sm text-blue-600 font-medium">2023</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Honoring village leaders who have prevented child marriages through community dialogue and education initiatives.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Recipients:</strong> [Names to be updated]
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Youth Advocate Award</h3>
                  <div className="text-sm text-blue-600 font-medium">2022</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Celebrating young activists raising awareness about child marriage through peer education and social media campaigns.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Recipients:</strong> [Names to be updated]
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <Heart className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Community Impact</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Protected 1000+ Girls
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We have safeguarded over 1000 girls from child marriage, enabling them to continue their education.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    50+ Community Workshops
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Reached over 20,000 people with awareness campaigns on the risks of child marriage.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Goals & Call to Action Section */}
        <section className="bg-blue-50 rounded-lg p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Goals</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              By 2026, we aim to empower 1000 more girls and advocate for national policy changes. Join us in this mission!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
                aria-label="Donate to AMR Voices"
              >
                Donate Now
              </motion.a>
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:outline-none"
                aria-label="Volunteer with AMR Voices"
              >
                Become a Volunteer
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-gray-300 text-sm">
            &copy; 2025 AMR Voices Against Child Marriage. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="About"
            >
              About
            </a>
            <a
              href="/resources"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Resources"
            >
              Resources
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default AwardPage;