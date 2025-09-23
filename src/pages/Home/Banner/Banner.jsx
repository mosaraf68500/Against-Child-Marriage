import React from "react";
// import banner from "../../../assets/child_marriage.jpg";
import { Link } from "react-router";
import { ArrowRight, BarChart3, BookOpen, Users } from "lucide-react";
import hero from "../../../assets/hero.jpg"
import GoalAndDescribtion from "../../../components/GoalAndDescribtion.jsx/GoalAndDescribtion";

const Banner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Join the Fight Against Child Marriage
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Help us protect the future of young girls by raising awareness and
              advocating for an end to child marriage. Together, we can create a
              world where every child has the right to education and a safe
              childhood.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#22A3D1] rounded-lg shadow-md hover:bg-[#0f90c0] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                aria-label="Learn more about the fight against child marriage"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Image Content */}
         <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
  <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl">
    <iframe
      className="w-full h-full rounded-xl"
      src="https://www.youtube.com/embed/yV4Umh3zFPY?si=TVotZkmpCnZyIIMQ"
      title="Against Child Marriage"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    ></iframe>
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
  </div>
</div>

        </div>
      </div>

      <section>
        {/* Hero Section */}
        <section className="hero-gradient py-12 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  Ending Child Marriage in Bangladesh
                </h1>

                {/* Subheadline */}
                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium text-pretty">
                  Building awareness, advocating for change, and protecting
                  children's rights
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
                  Child marriage remains a critical issue in Bangladesh,
                  affecting millions of girls and their communities. This
                  platform provides comprehensive information, data, and
                  resources to understand and address this challenge through
                  education, legal awareness, and community support.
                </p>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 justify-center items-center  gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#22A3D1] text-white font-semibold rounded-lg hover:bg-[#1081ab] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/resources"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#22A3D1] text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Help
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={hero} // Replace with actual image path
                    alt="Children in Bangladesh classroom representing hope and education"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
            <GoalAndDescribtion></GoalAndDescribtion>
        </div>

        {/* Quick Stats Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                  51%
                </div>
                <div className="text-gray-600">Girls married before 18</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                  15%
                </div>
                <div className="text-gray-600">Girls married before 15</div>
              </div>
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  38M
                </div>
                <div className="text-gray-600">Women affected nationwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Sections Preview */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Understanding the Issue
              </h2>
              <p className="text-base sm:text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
                Explore comprehensive information about child marriage in
                Bangladesh through data, legal frameworks, and available
                resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Data & Facts Card */}
              <Link to="/about" className="group">
                <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-6 group-hover:bg-blue-100 transition-colors">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Data & Facts
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Comprehensive statistics and data about child marriage
                    rates, regional variations, and trends in Bangladesh.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    View Statistics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Legal Timeline Card */}
              <Link to="/blogs" className="group">
                <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-lg mb-6 group-hover:bg-green-100 transition-colors">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Legal Timeline
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Historical overview of legal developments and current laws
                    addressing child marriage in Bangladesh.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Explore Timeline
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Resources Card */}
              <Link to="/resources" className="group">
                <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-lg mb-6 group-hover:bg-purple-100 transition-colors">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Resources & Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Find organizations, hotlines, and support services for those
                    affected by or working to prevent child marriage.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Find Resources
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Together We Can Make a Difference
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 text-pretty">
              Every child deserves the right to childhood, education, and a
              future of their choosing. Join us in working towards a Bangladesh
              where no child is forced into marriage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#22A3D1] text-white font-semibold rounded-lg hover:bg-[#127ca3] transition-colors"
              >
                Learn About the Issue
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Banner;
