import React, { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow bg-white">
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 p-2 rounded-full text-white">⚡</div>
        <span className="font-bold text-lg text-gray-900">LogoName</span>
      </div>

      <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Software Team ▾
          {isDropdownOpen && (
            <ul className="absolute top-6 left-0 bg-white shadow rounded-md p-2 space-y-1 z-50 min-w-[200px]">
              <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                Web Development Team
              </li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                Mobile Development Team
              </li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                AI/ML Team
              </li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                DevOps Team
              </li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
                Sales Team
              </li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Technologies</li>
        <li className="cursor-pointer">Resources</li>
        <li className="cursor-pointer">Company</li>
      </ul>

      <button
        onClick={() =>
          window.open("https://digitalprospectsglobal.com/", "_blank")
        }
        className="hidden md:block border-2 border-green-500 text-black-500 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
      >
        Get In Touch ↗
      </button>

      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 md:hidden z-50">
          <ul className="space-y-4 text-gray-700">
            <li
              className="cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Software Team ▾
              {isDropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="hover:text-green-500 cursor-pointer">
                    Web Development Team
                  </li>
                  <li className="hover:text-green-500 cursor-pointer">
                    Mobile Development Team
                  </li>
                  <li className="hover:text-green-500 cursor-pointer">
                    AI/ML Team
                  </li>
                  <li className="hover:text-green-500 cursor-pointer">
                    DevOps Team
                  </li>
                  <li className="hover:text-green-500 cursor-pointer">
                    Sales Team
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Company</li>
            <li>
              <button
                onClick={() =>
                  window.open("https://digitalprospectsglobal.com/", "_blank")
                }
                className="border border-green-500 text-green-500 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-white w-full transition"
              >
                Get In Touch ↗
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
