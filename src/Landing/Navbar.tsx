// Navbar.tsx
import React from "react";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex p-4 gap-6 justify-center items-center shadow-md
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Navigation Links */}
      <ul className="flex gap-6 list-none">
        <li><a href="#home" className="hover:opacity-70">Home</a></li>
        <li><a href="#about" className="hover:opacity-70">About</a></li>
        <li><a href="#work" className="hover:opacity-70">Work</a></li>
        <li><a href="#experience" className="hover:opacity-70">Experience</a></li>
        <li><a href="#skills" className="hover:opacity-70">Skills</a></li>
        <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-6 px-3 py-1 rounded border transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};
