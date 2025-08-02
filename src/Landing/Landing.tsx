import  { useState, useEffect } from 'react';

const Landing = () => {
  const hellos = [
    { text: "Hello" },
    { text: "Hola" },
    { text: "Bonjour" },
    { text: "Hallo" },
    { text: "Ciao" },
    { text: "こんにちは" },
    { text: "안녕하세요" },
    { text: "你好" },
    { text: "Привет" },
    { text: "مرحبا" },
    { text: "नमस्ते" },
    { text: "Olá" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % hellos.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [hellos.length]);

  const currentHello = hellos[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;700&family=Rajdhani:wght@300;400;700&display=swap" rel="stylesheet" />
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="text-center z-10 px-8 max-w-4xl mx-auto">
        {/* Welcome text */}
        <div className="mb-12">
          <h2 className="text-lg md:text-xl text-gray-300 mb-4 opacity-90">
            Welcome to my portfolio
          </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full"></div>
        </div>

        {/* Animated Hello Section */}
        <div className="mb-16">
          <div 
            className={`transition-all duration-300 transform ${
              isVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            {/* Hello text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-8 tracking-wider" style={{fontFamily: '"Orbitron", "Exo 2", "Rajdhani", monospace'}}>
              {currentHello.text}
            </h1>
            
            {/* Language label removed */}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            Code Craftsman | Digital Innovator | Problem Solver
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mt-4 font-mono">
            Transforming ideas into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white font-semibold"> digital experiences </span>
            that matter
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-black border-2 border-gray-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-105 active:scale-95 hover:border-white">
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-white via-gray-300 to-white bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Language indicators */}
        <div className="flex justify-center space-x-2">
          {hellos.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-pink-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;