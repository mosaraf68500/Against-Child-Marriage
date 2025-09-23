import {
  BookOpen,
  GraduationCap,
  Monitor,
  Presentation,
  Quote,
  ThumbsUp,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const About = () => {
  const programs = [
    {
      id: 1,
      title: "Safe Spaces for Girls",
      activities: 30,
      hours: "Ongoing",
      beneficiaries: "12,000+",
      image: "https://i.ibb.co.com/NvQsVwd/dsc00649-480.jpg",
      partner: "LAMB",
    },
    {
      id: 2,
      title: "Community Awareness Campaigns",
      activities: 50,
      hours: "Ongoing",
      beneficiaries: "10,000+",
      image: "https://i.ibb.co.com/zhdLYdzv/dsc00670-480.jpg",
      partner: "LAMB",
    },
    {
      id: 3,
      title: "Training for Health Workers",
      activities: 20,
      hours: "Ongoing",
      beneficiaries: "1,500+",
      image: "https://i.ibb.co.com/LDxNCwbs/page.webp",
      partner: "LAMB",
    },
  ];

  const team = [
    {
      id: 1,
      name: "NOEMI GROSSEN",
      role: "Programme Manager",
      img: "https://i.ibb.co.com/hxFQ29Z0/team-1-5.webp",
    },
    {
      id: 2,
      name: "SARAH AKTER",
      role: "Community Coordinator",
      img: "https://i.ibb.co.com/N2pdJQf9/team-1-6.webp",
    },
    {
      id: 3,
      name: "FATIMA BEGUM",
      role: "Education Specialist",
      img: "https://i.ibb.co.com/S4vPsRvs/team-1-7.webp",
    },
    {
      id: 4,
      name: "RAHIM KHAN",
      role: "Advocacy Lead",
      img: "https://i.ibb.co.com/TDLBDmwW/team-1-8.webp",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/zhdLYdzv/dsc00670-480.jpg) ",
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

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Images */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 sm:gap-6"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <img
              src="https://i.ibb.co.com/LDxNCwbs/page.webp"
              alt="girl1"
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg border-4 border-[#0AB99D]"
            />
            <img
              src="https://i.ibb.co.com/zhdLYdzv/dsc00670-480.jpg"
              alt="girl2"
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg border-4 border-[#0AB99D]"
            />
          </div>
          <img
            src="https://i.ibb.co.com/NvQsVwd/dsc00649-480.jpg"
            alt="girl3"
            className="rounded-[50%] w-40 h-48 sm:w-56 sm:h-72 object-cover shadow-xl border-4 border-[#0AB99D]"
          />
          
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium text-[#0AB99D] uppercase tracking-widest mb-2">
            Our Mission
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Empowering Girls to End{" "}
            <span className="text-[#0AB99D]">Child Marriage</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Our mission is to ensure girls in Bangladesh can decide if, when,
            and whom they marry, leading healthy, empowered, and self-determined
            lives. We work to create a violence-free environment by engaging
            communities, educating stakeholders, and advocating for systemic
            change.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-[#0AB99D] text-white p-3 rounded-lg shadow-md"
              >
                <Monitor size={20} />
              </motion.div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Safe Spaces
                </h4>
                <p className="text-gray-600 text-sm">
                  Providing 30 safe spaces with cultural events and computer
                  training for girls to learn and grow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="bg-[#0AB99D] text-white p-3 rounded-lg shadow-md"
              >
                <Presentation size={20} />
              </motion.div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Community Advocacy
                </h4>
                <p className="text-gray-600 text-sm">
                  Raising awareness among decision-makers and parents about the
                  harms of child marriage.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#0AB99D] hover:bg-[#08a18b] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
            >
              Support Our Cause →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: Users, value: "12k+", label: "Girls Reached" },
            { icon: BookOpen, value: "30+", label: "Safe Spaces" },
            { icon: ThumbsUp, value: "73%", label: "Violence Reduction Goal" },
            {
              icon: GraduationCap,
              value: "1.5k+",
              label: "Vulnerable Girls Supported",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0AB99D] text-white rounded-lg p-6 flex flex-col items-center shadow-lg"
            >
              <stat.icon size={28} className="sm:h-8 sm:w-8" />
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6"
        >
          <p className="uppercase text-[#0AB99D] text-xs sm:text-sm font-semibold mb-2 tracking-widest">
            Testimonial
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Building a Future Free from{" "}
            <span className="text-[#0AB99D] underline decoration-4 decoration-[#0AB99D]/40">
              Child Marriage
            </span>
          </h2>

          <div className="relative bg-gray-900 text-white rounded-lg p-6 sm:p-8 mt-8 shadow-xl">
            <Quote
              size={32}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#0AB99D] bg-white rounded p-1"
            />
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="testimonial"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#0AB99D]"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-semibold">
                  Ayesha Begum
                </h4>
                <p className="text-[#0AB99D] text-xs sm:text-sm mb-3">
                  COMMUNITY MEMBER
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  "This program has given our girls a voice and a safe space to
                  dream. By educating our community and involving men and boys,
                  we’re breaking the cycle of child marriage and building a
                  brighter future for our daughters."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="bg-amber-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
            Our Programs{" "}
            <span className="text-[#0AB99D]">Fighting Child Marriage</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white text-gray-800 shadow-lg rounded-xl w-full sm:w-80 overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-base sm:text-lg line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {program.activities} Activities | {program.hours} |{" "}
                    {program.beneficiaries} Beneficiaries
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Partner: {program.partner}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 sm:mt-10 bg-[#0AB99D] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#08a18b] transition-colors duration-300"
          >
            Learn More About Our Programs →
          </motion.button>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#0BB99E] py-12 sm:py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
            Meet Our Dedicated Team
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white text-gray-900 rounded-xl shadow-lg w-full sm:w-56 overflow-hidden"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center bg-[#0E2A46] text-white">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Subscribe to our newsletter for updates on our fight against child
              marriage.
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

export default About;
