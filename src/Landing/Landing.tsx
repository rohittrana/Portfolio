import { useState } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "Ethereum",
    "React",
    "Next.js",
    "Prisma",
    "MongoDB",
  ];

  return (
    <div
      className={`min-h-screen scroll-smooth font-['Space_Mono'] transition-all duration-500 ${
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
            Hi, I’m{" "}
            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
              Rohit Rana
            </span>
          </h1>

          <p className="text-2xl mb-8 opacity-85">
            Full Stack Developer | Problem Solver | Lifelong Learner
          </p>

          <p className="text-lg mb-12 opacity-75 max-w-2xl mx-auto leading-relaxed">
            I’m a developer who enjoys turning complex ideas into smooth,
            scalable, and interactive web applications. My focus lies in
            crafting clean user experiences and writing code that’s easy to
            maintain and extend. Currently, I’m exploring how{" "}
            <span className="font-semibold">AI and Blockchain</span> can merge to
            build smarter and more secure applications.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#skills"
              className={`px-8 py-3 rounded ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition`}
            >
              My Skills
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

      {/* Skills Section with 3D Rotating Cube */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        <div className="relative w-64 h-64 [perspective:1000px]">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {skills.slice(0, 6).map((skill, i) => (
              <div
                key={skill}
                className={`absolute inset-0 flex justify-center items-center text-lg font-bold rounded-xl shadow-xl ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                }`}
                style={{
                  transform: `rotateY(${i * 60}deg) translateZ(120px)`,
                }}
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        <p className="mt-16 text-base opacity-80">
          Also familiar with:{" "}
          <span className="font-semibold">
            {skills.slice(6).join(", ")}.
          </span>
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-28 px-4 ${
          darkMode ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
        } transition`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
            Have a project, idea, or collaboration in mind? Let’s connect and
            build something meaningful together. I’d love to hear from you!
          </p>

          <motion.form
            action="https://formspree.io/f/maygeddq"
            method="POST"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 max-w-md mx-auto bg-white text-black p-8 rounded-2xl shadow-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition-all font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 text-center ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } transition`}
      >
        <p className="opacity-70">© 2025 Rohit Rana. All rights reserved.</p>
      </footer>
    </div>
  );
};
