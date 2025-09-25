import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Blogs = () => {
  const cards = [
    {
      id: 1,
      title: "Community",
      description:
        "LAMB's integrated health and community development activities empower people for sustainable development.",
      image: "https://via.placeholder.com/300x200?text=Community",
    },
    {
      id: 2,
      title: "Hospital",
      description:
        "A team of 200 staff are committed to caring for the whole health and wellbeing of patients. Providing 24/7 emergency care across In and Outpatient departments.",
      image: "https://via.placeholder.com/300x200?text=Hospital",
    },
    {
      id: 3,
      title: "Learning & Development",
      description:
        "Courses in nursing, midwifery and health services promote and increase competent and compassionate health and development work throughout Bangladesh.",
      image: "https://via.placeholder.com/300x200?text=Learning",
    },
    {
      id: 4,
      title: "Research",
      description:
        "Conducting studies to improve health outcomes in rural communities.",
      image: "https://via.placeholder.com/300x200?text=Research",
    },
    {
      id: 5,
      title: "Training Programs",
      description:
        "Offering various training programs for healthcare professionals.",
      image: "https://via.placeholder.com/300x200?text=Training",
    },
    {
      id: 6,
      title: "Outreach Services",
      description: "Providing healthcare services to remote areas.",
      image: "https://via.placeholder.com/300x200?text=Outreach",
    },
    {
      id: 7,
      title: "Maternal Health",
      description:
        "Focused initiatives on improving maternal health and reducing mortality.",
      image: "https://via.placeholder.com/300x200?text=Maternal",
    },
    {
      id: 8,
      title: "Child Welfare",
      description: "Programs aimed at ensuring the well-being of children.",
      image: "https://via.placeholder.com/300x200?text=Child",
    },
    {
      id: 9,
      title: "Nutrition Education",
      description: "Educating communities on proper nutrition and health.",
      image: "https://via.placeholder.com/300x200?text=Nutrition",
    },
    {
      id: 10,
      title: "Emergency Response",
      description: "Rapid response to health emergencies and disasters.",
      image: "https://via.placeholder.com/300x200?text=Emergency",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="oi bg-gray-50 ">
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence>
          {currentCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-red-600 underline mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            className={`px-4 py-2 rounded-md font-medium text-sm ${
              currentPage === page
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
            onClick={() => handlePageChange(page)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {page}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;