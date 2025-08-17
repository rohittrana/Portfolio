// src/components/Projects.tsx
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RimXUI",
    description:
      "A modern React component library with TailwindCSS, Framer Motion, and beautiful UI components.",
    github: "https://github.com/bhawanibytes/rimxui",
    live: "https://rimxui.vercel.app/",
    tags: ["React", "TailwindCSS", "Framer Motion", "UI Library"],
  },
  {
    title: "Second Brainly",
    description:
      "Save and organize important content like tweets and YouTube videos with titles and links.",
    github: "https://github.com/rohittrana/second-brainly",
    live: "",
    tags: ["MERN", "Productivity", "Bookmarking"],
  },
  {
    title: "LeetLab",
    description:
      "A LeetCode-style platform built using my own API and Judge0 for code execution. Create custom coding sheets, attempt problems, and submit solutions with real-time evaluation.",
    github: "https://github.com/rohittrana/LeetLab",
    live: "",
    tags: ["MERN", "API", "Judge0", "Coding Platform"],
  },
  {
    title: "Blockchain Voting System",
    description:
      "A decentralized voting platform powered by Ethereum smart contracts. Ganache is used for testing blockchain transactions, and MERN is used in the backend to manage users and results.",
    github: "https://github.com/rohittrana/blockchain-voting-system",
    live: "",
    tags: ["Blockchain", "Ethereum", "Ganache", "MERN", "Smart Contracts"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent leading-relaxed">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:border-purple-500 transition-colors"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Github size={20} /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <ExternalLink size={20} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
