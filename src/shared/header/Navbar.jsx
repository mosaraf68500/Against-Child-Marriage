import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.jpg"
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/resources">Resources</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      

     
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-900 px-8 bg-gradient-to-r from-[#d1ecdb] to-white w-full">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow dark:text-green-500 w-36"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <img className="w-[35px] text-[#22A3D1] rounded-full" src={logo} alt="" />
          <Link to="/" className="text-md lg:text-xl text-[#22A3D1] font-bold ">
            Against Child Marriage
          </Link>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 lg:gap-3">
        {/* Theme Toggle Button */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-white row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 0 0 21.64 13z" />
          </svg>
        </label>

       
      </div>
    </div>
  );
};

export default Navbar;
