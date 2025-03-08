import React from 'react'
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between text-center md:text-left">
          {/* Copyright Section */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Shariful. All rights reserved.</p>

          {/* Social Media Links */}
          <div className="flex lg:space-x-6 mt-4 space-x-3 md:mt-0">
            <a href="#" className="hover:text-yellow-500 transition duration-300 flex items-center space-x-2">
              <FaGithub /> <span>GitHub</span>
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300 flex items-center space-x-2">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300 flex items-center space-x-2">
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300 flex items-center space-x-2">
              <FaInstagramSquare /> <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300 flex items-center space-x-2">
              <SiGmail /> <span>Email</span>
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer