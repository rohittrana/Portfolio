import { useState } from "react";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Navigation */}
      <nav className={`flex p-4 gap-6 justify-center items-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
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
          className="ml-6 px-3 py-1 rounded border"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Your Name</span>
          </h1>
          <p className="text-2xl mb-8 opacity-80">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg mb-12 opacity-70 max-w-2xl mx-auto">
            I build exceptional digital experiences that make people's lives easier. 
            Passionate about creating clean, efficient, and user-friendly applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#work" 
              className={`px-8 py-3 rounded ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white transition`}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={`px-8 py-3 rounded border ${darkMode ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"} transition`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="text-lg opacity-80 space-y-4">
            <p>
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building responsive, accessible, 
              and performant applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section id="skills-preview" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "TypeScript", "Node.js", "Python", "JavaScript", "CSS", "Git", "MongoDB"].map((skill) => (
              <div 
                key={skill}
                className={`p-6 rounded-lg text-center ${darkMode ? "bg-gray-800" : "bg-gray-100"} hover:scale-105 transition`}
              >
                <p className="text-xl font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${darkMode ? "bg-blue-900" : "bg-blue-500"} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded bg-white text-blue-600 hover:bg-gray-100 transition font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 text-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <p className="opacity-70">© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};