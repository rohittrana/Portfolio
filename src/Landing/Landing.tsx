import { useState, useEffect } from "react";
import Skills from "../Skills";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const hellos = [
    { text: "Hello" }, { text: "Hola" }, { text: "Bonjour" },
    { text: "Hallo" }, { text: "Ciao" }, { text: "こんにちは" },
    { text: "안녕하세요" }, { text: "你好" }, { text: "Привет" },
    { text: "مرحبا" }, { text: "नमस्ते" }, { text: "Olá" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hellos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hellos.length]);

  // Generate random particles for background animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="bg-black">
      {/* Google Fonts Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Audiowide&display=swap');
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md border-b border-gray-700">
        <h1
          className="text-white text-2xl md:text-3xl tracking-widest font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
          style={{ fontFamily: '"Audiowide", cursive' }}
        >
          ROHIT RANA
        </h1>
        <ul className="flex space-x-8 text-gray-300 font-medium tracking-wide text-lg">
          <li>
            <a href="#home" className="hover:text-white transition-all duration-300 hover:scale-105">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-all duration-300 hover:scale-105">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition-all duration-300 hover:scale-105">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Landing Section */}
      <div
        id="home"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
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

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce" />

        {/* Matrix-like falling dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-cyan-400 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: '100px',
              }}
              animate={{
                y: ['-100px', 'calc(100vh + 100px)'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Animated Hello with Enhanced Styling */}
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
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
              }}
            >
              {hellos[currentIndex].text}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-xl md:text-2xl text-gray-300 font-light tracking-wider z-10"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          Welcome to my digital universe
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for grid animation */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Landing;