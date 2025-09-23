import React from "react";
import { FaRegArrowAltCircleRight, FaUserPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";

const TopNavbar = () => {
  return (
    <div className="bg-gray-800 py-3 px-4 sm:px-8 text-white relative z-[9999]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        {/* Welcome Text - Only for md and up */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <IoIosStar className="text-[#22A3D1]" />
          <span>
            Welcome to <span className="text-[#22A3D1]">Against Child Marriage</span> - Protecting Childhood, Promoting Education.

            
          </span>
        </div>

        {/* Login/Register - Always visible */}
        
      </div>
    </div>
  );
};

export default TopNavbar;