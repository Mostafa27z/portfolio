"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">Mostafa Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Resume", path: "/resume" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-cyan-400">
                  {link.name}
                </span>
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Resume", path: "/resume" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
