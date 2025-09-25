import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.jpg";

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
      <li>
        <NavLink to="/award">Award</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-900 px-4 lg:px-8 bg-gradient-to-r from-[#d1ecdb] to-white w-full">
      {/* --------- Mobile Layout --------- */}
      <div className="flex w-full items-center justify-between lg:hidden">
        {/* Hamburger left */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-teal-400 font-semibold rounded-box z-10 mt-3 p-2 shadow w-36"
          >
            {links}
          </ul>
        </div>

        {/* Logo right */}
        <div className="flex items-center gap-2">
          <img className="w-[35px] rounded-full" src={logo} alt="logo" />
          <Link to="/" className="text-md text-[#22A3D1] font-bold">
            VACM
          </Link>
        </div>
      </div>

      {/* --------- Desktop Layout --------- */}
      <div className="hidden lg:flex w-full items-center justify-between">
        {/* Logo left */}
        <div className="flex items-center gap-2">
          <img className="w-[40px] rounded-full" src={logo} alt="logo" />
          <Link to="/" className="text-xl text-[#22A3D1] font-bold">
            VACM
          </Link>
        </div>

        {/* Nav links center */}
        <div className="flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>

        {/* Right side empty (future buttons if needed) */}
        <div className="w-[40px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
