// src/components/Skills.tsx
import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiBootstrap, SiMui, SiHtml5, SiCss3, SiPython,
  SiMysql, SiPostgresql, SiMongodb, SiPrisma
} from "react-icons/si";
import { DiJava } from "react-icons/di"; // ✅ Import Java logo from devicons

const skills = [
  { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "Java", icon: <DiJava className="text-red-500 text-3xl" /> }, // ✅ Fixed
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-3xl" /> },
  { name: "MUI", icon: <SiMui className="text-blue-400 text-3xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-3xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400 text-3xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-300 text-3xl" /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="flex flex-col items-center justify-center px-6 py-6 bg-gray-800/60 rounded-2xl shadow-md border border-gray-700 hover:border-white/30 transition"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
