import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
{/* <a href="https://ibb.co.com/1tjF4jZ6"><img src="https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg" alt="group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo" border="0"></a> */}
const Blogs = () => {
  const cards = [
    {
      id: 1,
      title: "Community Empowerment",
      description:
        "LAMB's integrated health and community development activities empower people for sustainable development.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 2,
      title: "Healthcare Services",
      description:
        "A team of 200 staff provides 24/7 emergency care across In and Outpatient departments for holistic health.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 3,
      title: "Learning & Development",
      description:
        "Courses in nursing, midwifery, and health services promote competent and compassionate health work in Bangladesh.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 4,
      title: "Health Research",
      description:
        "Conducting studies to improve health outcomes in rural communities.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 5,
      title: "Training Programs",
      description:
        "Offering training for healthcare professionals to combat child marriage.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 6,
      title: "Outreach Services",
      description: "Delivering healthcare services to remote areas in Bangladesh.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 7,
      title: "Maternal Health",
      description:
        "Focused initiatives on improving maternal health and reducing mortality.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 8,
      title: "Child Welfare",
      description: "Programs ensuring the well-being of children at risk.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 9,
      title: "Nutrition Education",
      description: "Educating communities on proper nutrition to support health.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
    {
      id: 10,
      title: "Emergency Response",
      description: "Rapid response to health emergencies and disasters.",
      image: "https://i.ibb.co.com/1tjF4jZ6/group-of-asian-school-girls-teen-friend-in-school-uniform-together-look-tablet-happy-smiling-photo.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", newsletterEmail);
    setNewsletterEmail("");
  };

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
    exit: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Helmet>
        <title>Blogs - AMR Voices Against Child Marriage</title>
        <meta
          name="description"
          content="Explore stories and updates on our efforts to end child marriage in Bangladesh through community empowerment, healthcare, and education."
        />
        <meta
          name="keywords"
          content="blogs, child marriage, AMR Voices, Bangladesh, community, healthcare, education"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] flex items-center justify-center"
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
            Our Stories
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
              to="/blogs"
              className="text-teal-400 font-semibold"
              aria-label="Blogs"
            >
              Blogs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Stories of Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AMR Voices is making a difference in the fight against child marriage through community initiatives, healthcare, and education programs.
          </p>
        </motion.div>
      </section>

      {/* Blog Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-900 mb-8 text-center"
        >
          Our Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentCards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-teal-600 mb-3">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    to={`/blogs/${card.id}`}
                    className="mt-4 inline-block text-teal-600 hover:underline text-sm font-medium"
                    aria-label={`Read more about ${card.title}`}
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              className={`px-4 py-2 rounded-md font-medium text-sm ${
                currentPage === page
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:outline-none`}
              onClick={() => handlePageChange(page)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-12 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Share Your Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have a story or insight about combating child marriage? Contribute to our blog and inspire others!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none"
            aria-label="Submit Your Story"
          >
            Submit Your Story
          </motion.a>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-teal-600 py-12 sm:py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
              Stay Updated
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Subscribe to our newsletter for the latest stories and updates on our mission.
            </p>
          </div>
          <div className="flex justify-center">
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 sm:py-4 bg-white rounded-l-lg w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                aria-label="Newsletter Email"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-900 transition-colors duration-300 text-sm sm:text-base"
                aria-label="Subscribe to Newsletter"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

     
    </div>
  );
};

export default Blogs;