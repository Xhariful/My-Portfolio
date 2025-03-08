import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for Large Screens */}
      <nav className="hidden md:flex fixed left-0 top-0 bg-gray-100 w-[80px] h-screen flex-col items-center py-8 px-4 shadow-lg z-50">
        {/* Logo Section */}
        <div className="group flex items-center cursor-pointer mb-6">
          <div className="relative w-[50px] h-[50px] bg-[#2b2a2a] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black">
            <span className="font-semibold text-2xl text-white">S</span>
            <span className="absolute left-[50px] top-1/2 transform -translate-y-1/2 translate-x-[-10px] opacity-0 group-hover:translate-x-[10px] group-hover:opacity-100 transition-all duration-500 ease-out bg-black text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              Shariful
            </span>
          </div>
        </div>

        {/* Navigation List */}
        <ul className="flex flex-col space-y-6 w-full">
          <SidebarItem icon={<FaHome />} text="Home" link="/" />
          <SidebarItem icon={<CgProfile />} text="About" link="/about" />
          <SidebarItem icon={<FaSuitcase />} text="Portfolio" link="/portfolio" />
          <SidebarItem icon={<FaSquarePhone />} text="Contact" link="/contact" />
        </ul>
      </nav>

      {/* Off-Canvas Sidebar for Small Screens */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-4 py-3">
          <span className="text-xl font-bold text-gray-800">Shariful</span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800"
          >
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Off-canvas Mobile Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-3/4 bg-white h-full shadow-lg transition-all duration-300 ease-in-out z-50`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <FaHome />
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <CgProfile />
              <span>About</span>
            </Link>

            <Link
              to="/portfolio"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <FaSuitcase />
              <span>Portfolio</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <FaSquarePhone />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

// SidebarItem Component
const SidebarItem = ({ icon, text, link }) => (
  <li className="group flex items-center cursor-pointer">
    {/* Wrap the entire item in the Link */}
    <Link
      to={link}
      className="relative w-[50px] h-[50px] bg-[#2b2a2a] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black text-white"
    >
      {icon}
      <span className="absolute left-[50px] top-1/2 transform -translate-y-1/2 translate-x-[-10px] opacity-0 group-hover:translate-x-[10px] group-hover:opacity-100 transition-all duration-500 ease-out bg-black text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
        {text}
      </span>
    </Link>
  </li>
);

export default Navbar;
