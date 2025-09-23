import React from "react";
import lambLogo from "../../assets/lamb_logo-480.png";
import noemi from "../../assets/noemi_grossen_neu-480.jpg";

const GoalAndDescription = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Goal, Overview, and What We Do */}
        <div className="lg:col-span-2 space-y-6">
          {/* Goal Card */}
          <div className=" p-6 bg-[#22A3D1] text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h1 className="text-2xl sm:text-3xl font-bold  mb-4">Goal</h1>
            <p className=" leading-relaxed text-sm sm:text-base">
              Girls get to decide if, when, and whom they marry. Married girls lead
              healthy, empowered, and self-determined lives.
            </p>
          </div>

          {/* Overview Card */}
          <div className=" p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Overview</h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Bangladesh has one of the highest rates of child marriages in the
              world. Despite a legal ban, two out of three girls are married
              before they are 18 years old. 51% of girls are married off under the
              age of 18, 15% at younger than 15. Girls from poor backgrounds are
              particularly affected. Extreme poverty is one of many causes of
              child marriages. The great inequality between men and women and the
              associated low social position of girls in society also play a role.
              For the girls affected, forced marriage usually also means the end
              of school education. They often become pregnant at an early age and
              are exposed to greater risks during pregnancy and childbirth due to
              their young age. Violence within marriage is widespread and is
              considered normal and accepted by large sections of society.
              According to surveys by the United Nations Population Fund (UNFPA)
              and the Bangladesh Bureau of Statistics (BBS), 73% of married women
              in Bangladesh experience violence at the hands of their partner.
            </p>
          </div>

          {/* What We Do Card */}
          <div className=" p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">What We Do</h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              The programme in Bangladesh works on different levels. In order for
              child marriages in Bangladesh to finally be a thing of the past, a
              social change has to happen. Since January 2023, the new project
              phase has been running with the aim of creating an environment for
              girls and women that is free of violence. To this end, at the request
              of the girls and women, boys and men will now also be more closely
              involved in the project, as they play a central role in combating
              child marriages and gender-based violence. Our project in Bangladesh
              is carrying out the following activities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
              <li>
                We continue with the 30 safe spaces formed in the first phase of
                the project and expand them with new offers such as cultural
                events and computer training.
              </li>
              <li>
                We raise awareness among key decision-makers and parents about the
                harmful consequences of child marriages and reinforce dialogues on
                gender-based violence and equality.
              </li>
              <li>
                Adolescent men are educated about harmful gender norms and
                motivated to challenge and change them.
              </li>
              <li>
                Health workers receive training and education to best support
                pregnant women and prevent gender-based violence.
              </li>
              <li>
                Regular advocacy meetings with government officials help ensure
                that legal mechanisms to prevent child marriage and gender-based
                violence are functioning.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Overview, Partner, and Programme Manager Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Overview Card */}
          <div className="bg-amber-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p><strong>Country:</strong> Bangladesh</p>
              <p><strong>Period:</strong> 01.07.2025 - 30.06.2029</p>
              <p><strong>Phase II:</strong> 01.02.2023 - 30.06.2025</p>
              <p><strong>Preparatory phase:</strong> 01.07.2022 - 31.12.2022</p>
              <p><strong>Local partner:</strong> LAMB (Lutheran Aid to Medicine in Bangladesh)</p>
              <p><strong>Target groups:</strong> Girls and their families, men and boys from the communities, husbands of recently married girls, local leaders</p>
              <p><strong>Direct beneficiaries:</strong> 12,000 girls, of which about 1,500 are particularly vulnerable</p>
            </div>
          </div>

          {/* Partner Card */}
          <div className="bg-amber-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Partner: LAMB</h2>
            <div className=" sm:items-start gap-4">
              <img
                src={lambLogo}
                alt="LAMB Logo"
                className="w-24 sm:w-32 object-contain"
              />
              <p className="text-gray-700 text-sm sm:text-base">
                Lutheran Aid to Medicine Bangladesh [LAMB] has been active in
                Bangladesh since the 1970s and is now regarded as a key provider
                of healthcare services there.
              </p>
            </div>
          </div>

          {/* Programme Manager Card */}
          <div className="bg-amber-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Programme Manager</h2>
            <img
              src={noemi}
              alt="Noemi Grossen"
              className="w-full h-48 sm:h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Noemi Grossen</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-2">+41 (0)31 991 55 56</p>
            <p className="text-gray-700 text-sm sm:text-base flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m0 0l4-4m0 0l4 4m-4-4v8"
                />
              </svg>
              noemi.grossen@womenshope.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalAndDescription;