import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-12"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h2>

        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          Hi, I'm <span className="font-semibold text-white">Rohit Rana</span> — 
          a passionate <span className="text-indigo-400">Full-Stack Web Developer</span> 
          who loves building fast, scalable, and user-friendly applications using 
          modern JavaScript technologies.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          I specialize in the <span className="font-semibold">MERN stack</span> — 
          MongoDB, Express, React, and Node.js — and have a strong grasp of 
          <span className="text-indigo-400"> TypeScript, Tailwind CSS,</span> and 
          <span className="text-indigo-400"> cloud deployment (AWS)</span>.  
          I’m also exploring <span className="text-indigo-400">Blockchain</span> development 
          using Ethereum and MetaMask integration.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Currently, I’m focusing on mastering 
          <span className="text-indigo-400"> React and System Design</span> — aiming to 
          build applications that are not just functional but beautifully 
          architected and performance-driven.  
          Outside coding, I enjoy exploring new tech trends, creating UI ideas, 
          and continuously improving my craft.
        </p>
      </div>
    </section>
  );
};

export default About;
