import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
 
} from "lucide-react";

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Express",
  "Node.js",
  "MongoDB",
  "Next.js",
  "Prisma",
  "WebSocket",
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
];

const projects = [
  {
    title: "Coming Soon",
    description:
      "Currently working on exciting projects that showcase real-time communication, full-stack development, and data-driven solutions. Check back soon!",
    tags: ["React", "Node.js", "WebSocket", "TypeScript"],
    github: "https://github.com/rohittrana",
    live: null,
  },
  {
    title: "Your Next Project",
    description:
      "Exploring opportunities to build scalable web applications with modern technologies. Open to collaborations and innovative ideas!",
    tags: ["Next.js", "AWS", "Docker", "Prisma"],
    github: "https://github.com/rohittrana",
    live: null,
  },
  {
    title: "Data Science Projects",
    description:
      "Applying machine learning and data analysis techniques to solve real-world problems. Currently learning and building projects in this domain.",
    tags: ["Python", "Data Science", "React", "MongoDB"],
    github: "https://github.com/rohittrana",
    live: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rohittrana", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rohittrana17/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/Rohittrana17", label: "X" },
  { icon: Mail, href: "mailto:rohitrana2429@gmail.com", label: "Email" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          darkMode
            ? "bg-black/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold flex items-center gap-2"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            <Code2 className="text-rose-500" size={28} />
            <span className={darkMode ? "text-rose-400" : "text-rose-600"}>
              RR
            </span>
          </h1>

          <div className="flex items-center gap-8">
            <div
              className="hidden md:flex gap-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:scale-105 transition-transform ${
                    darkMode ? "hover:text-rose-400" : "hover:text-rose-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg transition-all ${
                darkMode
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="px-6 py-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <img
              src="/rohitimage.jpg"
              alt="Rohit Rana"
              className={`w-72 h-72 rounded-full object-cover object-top shadow-2xl border-4 ${
                darkMode ? "border-rose-400" : "border-rose-600"
              }`}
            />
            <div
              className={`absolute -inset-4 rounded-full -z-10 blur-xl opacity-30 ${
                darkMode
                  ? "bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600"
                  : "bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"
              }`}
            ></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hi, I'm{" "}
            <span className={darkMode ? "text-rose-400" : "text-rose-600"}>
              Rohit Rana
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 opacity-85"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            Full Stack Developer | Data Science Enthusiast | Problem Solver
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-3 rounded-full transition-colors ${
                  darkMode
                    ? "bg-gray-900 hover:bg-rose-900"
                    : "bg-gray-100 hover:bg-rose-100"
                }`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className={`px-8 py-3 rounded-lg font-semibold shadow-lg transition-all hover:scale-105 ${
                darkMode
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                  : "bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700"
              } text-white`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105 ${
                darkMode
                  ? "border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-black"
                  : "border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-6 text-center ${
          darkMode ? "bg-black" : "bg-gray-100"
        }`}
      >
        <p
          className="mb-4 opacity-70"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          © 2025 Rohit Rana. Crafted with passion and precision.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all hover:scale-110 ${
                darkMode
                  ? "text-rose-400 hover:text-rose-300"
                  : "text-rose-600 hover:text-rose-700"
              }`}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
