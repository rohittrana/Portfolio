// src/components/Skills.tsx
import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "JavaScript", "Java", "TailwindCSS",
  "Bootstrap", "MUI", "HTML", "CSS", "Python",
  "SQL", "PostgreSQL", "MongoDB", "Prisma"
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="px-6 py-4 bg-gray-800/60 rounded-2xl shadow-md text-center border border-gray-700 hover:border-white/30 transition"
          >
            <p className="text-lg font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
