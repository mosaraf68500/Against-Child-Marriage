import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Heart, Shield, Users, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

export default function ResourcesPage() {
  const emergencyHotlines = [
    {
      name: "National Emergency Service",
      phone: "999",
      description: "24/7 emergency response for immediate assistance",
      type: "emergency",
    },
    {
      name: "Child Helpline Bangladesh",
      phone: "1098",
      description: "Dedicated helpline for children in distress and danger",
      type: "child-focused",
    },
    {
      name: "Women and Children Affairs Helpline",
      phone: "109",
      description: "Government helpline for women and children's issues",
      type: "government",
    },
    {
      name: "BRAC Helpline",
      phone: "16263",
      description: "Support and guidance for various social issues",
      type: "ngo",
    },
  ];

  const ngos = [
    {
      name: "BRAC",
      focus: "Education, Health, and Women's Empowerment",
      phone: "+880-2-9881265",
      email: "info@brac.net",
      website: "www.brac.net",
      description:
        "One of the world's largest NGOs working on education, healthcare, and women's empowerment programs.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Plan International Bangladesh",
      focus: "Child Rights and Protection",
      phone: "+880-2-8836181",
      email: "info.bangladesh@plan-international.org",
      website: "www.plan-international.org/bangladesh",
      description: "International organization focused on advancing children's rights and equality for girls.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      name: "Save the Children Bangladesh",
      focus: "Child Protection and Education",
      phone: "+880-2-8835091",
      email: "info.bangladesh@savethechildren.org",
      website: "www.savethechildren.org.bd",
      description:
        "Working to ensure every child has the right to survival, protection, development, and participation.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Manusher Jonno Foundation",
      focus: "Human Rights and Social Justice",
      phone: "+880-2-8833882",
      email: "info@manusherjonno.org",
      website: "www.manusherjonno.org",
      description: "Local foundation working on human rights, governance, and social justice issues.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      name: "ActionAid Bangladesh",
      focus: "Poverty Alleviation and Women's Rights",
      phone: "+880-2-8833181",
      email: "info.bangladesh@actionaid.org",
      website: "www.actionaid.org/bangladesh",
      description: "International organization working with poor and marginalized communities.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Ain o Salish Kendra (ASK)",
      focus: "Legal Aid and Human Rights",
      phone: "+880-2-8833101",
      email: "info@askbd.org",
      website: "www.askbd.org",
      description: "Legal aid organization providing support for human rights and social justice.",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  const governmentResources = [
    {
      name: "Ministry of Women and Children Affairs",
      phone: "+880-2-7169700",
      email: "info@mowca.gov.bd",
      address: "Bangladesh Secretariat, Dhaka-1000",
      services: "Policy development, program implementation, and coordination",
    },
    {
      name: "Department of Social Services",
      phone: "+880-2-7169800",
      email: "info@dss.gov.bd",
      address: "Agargaon, Dhaka-1207",
      services: "Social welfare programs and community support services",
    },
    {
      name: "Bangladesh Legal Aid and Services Trust",
      phone: "+880-2-8836181",
      email: "info@blast.org.bd",
      address: "House 13/A, Road 136, Gulshan-1, Dhaka",
      services: "Free legal aid and support for marginalized communities",
    },
  ];

  // Animation variants for cards
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
        <title>Resources - AMR Voices Against Child Marriage</title>
        <meta
          name="description"
          content="Access vital resources and organizations dedicated to combating child marriage in Bangladesh, including emergency hotlines, NGOs, and government services."
        />
        <meta
          name="keywords"
          content="child marriage, resources, Bangladesh, emergency hotlines, NGOs, government services, AMR Voices"
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
            Resources Against Child Marriage
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
              to="/resources"
              className="text-teal-400 font-semibold"
              aria-label="Resources"
            >
              Resources
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Resources & Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover vital resources and organizations dedicated to combating child marriage in Bangladesh.
          </p>
        </motion.div>

        {/* Emergency Assistance Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Emergency Assistance
                </h2>
                <p className="text-gray-600 mb-4">
                  If you or someone is in immediate danger due to child marriage, contact these services promptly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {emergencyHotlines.map((hotline, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{hotline.name}</h3>
                          <span className="text-xl font-bold text-red-600">{hotline.phone}</span>
                        </div>
                        <p className="text-sm text-gray-600">{hotline.description}</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* NGOs and Organizations Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 mb-8 text-center"
          >
            NGOs & Organizations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {ngos.map((ngo, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-teal-50 rounded-lg text-teal-600">{ngo.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{ngo.name}</h3>
                      <p className="text-sm font-medium text-teal-600 mb-3">{ngo.focus}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{ngo.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{ngo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{ngo.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4 text-gray-500" />
                          <a
                            href={`https://${ngo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:underline"
                            aria-label={`Visit ${ngo.name} website`}
                          >
                            {ngo.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Government Resources Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 mb-8 text-center"
          >
            Government Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {governmentResources.map((resource, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.services}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <Phone className="h-4 w-4 text-gray-500 mt-0.5" />
                      <span className="text-gray-600">{resource.phone}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-gray-500 mt-0.5" />
                      <span className="text-gray-600">{resource.email}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                      <span className="text-gray-600">{resource.address}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 mb-8 text-center"
          >
            Additional Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {[
                {
                  title: "Educational Support",
                  description: "Organizations providing educational scholarships and support for girls at risk of child marriage.",
                  items: ["Female Secondary School Stipend Program", "BRAC Education Program", "Room to Read Bangladesh"],
                },
                {
                  title: "Healthcare Services",
                  description: "Medical and reproductive health services for young women and girls.",
                  items: ["Marie Stopes Bangladesh", "Family Planning Association", "Government Health Complexes"],
                },
                {
                  title: "Economic Empowerment",
                  description: "Programs providing skills training and economic opportunities for women and girls.",
                  items: ["Grameen Bank Microcredit", "BRAC Skills Development", "Women's Cooperative Societies"],
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                    {resource.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900 mb-8 text-center"
          >
            How You Can Help
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Report Child Marriage</h3>
                <p className="text-gray-600 mb-4">
                  If you know of a child marriage, report it immediately to:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Local police station</li>
                  <li>Child Helpline: 1098</li>
                  <li>Women Affairs Officer</li>
                  <li>Local NGO representatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Prevention</h3>
                <p className="text-gray-600 mb-4">Join efforts to prevent child marriage:</p>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Educate others about the issue</li>
                  <li>Support girls' education initiatives</li>
                  <li>Volunteer with local organizations</li>
                  <li>Advocate for policy changes</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 bg-white rounded-lg border border-gray-200 shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Resource Information</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The contact information and resources listed are for informational purposes. Verify current details and availability before use. Contact us with updates to keep this list current.
          </p>
        </motion.div>
      </div>
    </div>
  );
}