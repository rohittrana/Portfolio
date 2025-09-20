import { useState } from "react";
import contact from '../Contact';
export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex p-4 gap-6 justify-center items-center 
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Navigation Links */}
      <ul className="flex gap-6 list-none">
        <li><a href="">About</a></li>
        <li><a href="">Work</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-6 px-3 py-1 rounded border"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};
