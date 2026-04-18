import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // for Dark Mode Togal
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const links = ["home", "about", "skills", "projects", "contact"];
  

  return (
    <nav className="fixed w-full bg-[#0f172a]/70 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <h1 className="text-2xl font-bold text-blue-500">PORTFOLIO</h1>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}

          {/* Dark Mode Toggle */}

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-full border border-cyan-400 text-black dark:text-white hover:bg-cyan-400 hover:text-black transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] px-6 py-4 space-y-4 w-full">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block capitalize hover:text-cyan-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="w-full px-3 py-1 rounded border border-cyan-400 text-black dark:text-white hover:bg-cyan-400 hover:text-black transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>
      )}
    </nav>
  );
}
