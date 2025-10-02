import { useState } from "react";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen scroll-smooth ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-4 pt-20"
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
              Rohit Rana
            </span>
          </h1>
          <p className="text-2xl mb-8 opacity-80">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg mb-12 opacity-70 max-w-2xl mx-auto">
            I build exceptional digital experiences that make people's lives
            easier. Passionate about creating clean, efficient, and
            user-friendly applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#work"
              className={`px-8 py-3 rounded ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded border ${
                darkMode
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              } transition`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg opacity-80 text-center">
            I'm Rohit Rana, a passionate developer who loves solving complex
            problems with simple, elegant solutions.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">My Work</h2>
          <p className="opacity-80">
            Here are some of the projects I’ve worked on recently.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${
          darkMode ? "bg-blue-900" : "bg-blue-500"
        } text-white`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6">
            I'm always open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:yourmail@example.com"
            className="inline-block px-8 py-3 rounded bg-white text-blue-600 hover:bg-gray-100 transition font-semibold"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 text-center ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <p className="opacity-70">© 2025 Rohit Rana. All rights reserved.</p>
      </footer>
    </div>
  );
};
