// src/components/Landing.tsx
import { useState, useEffect, useMemo } from "react";
import Skills from "../Skills";
import Projects from "../Projects"; 
import { motion, AnimatePresence } from "framer-motion";
import Contact  from '../Contact'
interface HelloItem {
  text: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Landing: React.FC = () => {
  const hellos: HelloItem[] = [
    { text: "Hello" }, { text: "Hola" }, { text: "Bonjour" },
    { text: "Hallo" }, { text: "Ciao" }, { text: "こんにちは" },
    { text: "안녕하세요" }, { text: "你好" }, { text: "Привет" },
    { text: "नमस्ते" }, { text: "Olá" }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hellos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hellos.length]);

  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  const matrixDots = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md border-b border-gray-700">
        <h1
          className="text-2xl md:text-3xl tracking-widest font-black text-cyan-400 animate-pulse"
          style={{ fontFamily: '"Audiowide", cursive' }}
        >
          ROHIT RANA
        </h1>
        <ul className="flex space-x-8 text-gray-300 font-medium tracking-wide text-lg">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-all duration-300"
              >
                {item}
              </a>
              {/* Hover underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Landing Section */}
      <div
        id="home"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(particle.id) * 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Matrix-like falling dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {matrixDots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute w-1 bg-gradient-to-b from-cyan-400 to-transparent"
              style={{
                left: `${dot.left}%`,
                height: "100px",
              }}
              animate={{
                y: ["-100px", "calc(100vh + 100px)"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Animated Hello */}
        <div className="relative h-20 z-10">
          <AnimatePresence mode="wait">
            <motion.h1
              key={hellos[currentIndex].text}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text tracking-widest drop-shadow-2xl"
              style={{
                fontFamily: '"Exo 2", sans-serif',
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              {hellos[currentIndex].text}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-xl md:text-2xl text-gray-300 font-light tracking-wider z-10 text-center max-w-3xl"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          Hi, I'm <span className="text-cyan-400 font-semibold">Rohit Rana</span> 👋 <br />
          Full Stack Developer (MERN Stack). <br />
          I build fast, clean, scalable websites and apps that solve real problems. <br /> <br />
          I hold <span className="text-purple-400">AWS Cloud Practitioner (CP)</span> and{" "}
          <span className="text-purple-400">AWS Solutions Architect Associate (SAA)</span> certifications. <br /> <br />
          Whether it’s <span className="text-purple-400">JavaScript</span>,{" "}
          <span className="text-purple-400">React</span>,{" "}
          <span className="text-purple-400">Node.js</span>, or{" "}
          <span className="text-purple-400">MongoDB</span> — I make ideas work (and look good while doing it).
        </motion.p>
      </div>

      {/* Projects Section */}
      <div className="pt-24">
        <Projects />
      </div>

      {/* Skills Section */}
      <div className="pt-24">
        <Skills />
      </div>
    <div className="pt-24">
      <Contact></Contact>
    </div>
    </div>
    
  );
};

export default Landing;
