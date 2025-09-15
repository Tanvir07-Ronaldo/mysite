import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Facebook } from 'lucide-react';

const greetings = [
  { text: "আসসালামু আলাইকুম", language: "Bengali", translation: "Peace be upon you" },
  { text: "নমস্কার", language: "Bengali", translation: "Greetings" },
  { text: "नमस्ते", language: "Hindi", translation: "Greetings" },
  { text: "안녕하세요", language: "Korean", translation: "Hello" },
  { text: "Hello", language: "English", translation: "Hello" },
  { text: "Hola", language: "Spanish", translation: "Hello" },
  { text: "Bonjour", language: "French", translation: "Good day" },
  { text: "こんにちは", language: "Japanese", translation: "Hello" },
];

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/tanvir.tanvir.3304", color: "text-blue-500" },
  { icon: Instagram, url: "https://www.instagram.com/tanvir_7_/", color: "text-pink-500" },
  { icon: Github, url: "https://github.com/Tanvir07-Ronaldo", color: "text-gray-300" },
];

export default function WelcomeGreeting({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowWelcome(true);
      }, 800);
    }
  }, [currentIndex]);

  const handleComplete = () => {
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/8ac2e0e1c_98e039c4f8d69a57f2b693bcb7e3edaa.jpg')`
        }}
      >
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF014F] rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!showWelcome ? (
            currentIndex < greetings.length && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -50 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-center"
              >
                <motion.div
                  className="mb-6"
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(255, 1, 79, 0.6)",
                      "0 0 60px rgba(255, 1, 79, 1)",
                      "0 0 30px rgba(255, 1, 79, 0.6)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-[#FF014F] mb-4 drop-shadow-2xl">
                    {greetings[currentIndex]?.text}
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-black bg-opacity-80 backdrop-blur-lg rounded-2xl px-6 py-4 border border-[#FF014F]/40 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-lg md:text-xl text-red-300 font-bold mb-1">
                    {greetings[currentIndex]?.language}
                  </p>
                  <p className="text-sm text-gray-300">
                    "{greetings[currentIndex]?.translation}"
                  </p>
                </motion.div>
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="text-center"
              onAnimationComplete={handleComplete}
            >
              <motion.div
                className="mb-8"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 20px rgba(255, 1, 79, 0.8))",
                    "drop-shadow(0 0 40px rgba(255, 1, 79, 1))",
                    "drop-shadow(0 0 20px rgba(255, 1, 79, 0.8))"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Welcome to the
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Den of
                </h1>
              </motion.div>
              
              <motion.div
                className="flex items-center justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              >
                <motion.span 
                  className="text-4xl md:text-6xl font-bold text-[#FF014F] mr-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 20px rgba(255, 1, 79, 0.8)",
                      "0 0 40px rgba(255, 1, 79, 1)",
                      "0 0 20px rgba(255, 1, 79, 0.8)"
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Mr.
                </motion.span>
                <motion.div
                  className="relative"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <span className="text-6xl md:text-8xl font-bold text-[#FF014F] drop-shadow-2xl">
                    7
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="bg-black bg-opacity-80 backdrop-blur-xl rounded-2xl px-8 py-6 border-2 border-[#FF014F]/60 mb-8 inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.p 
                  className="text-xl md:text-2xl text-red-300 font-bold mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255, 1, 79, 0.7)",
                      "0 0 20px rgba(255, 1, 79, 0.9)",
                      "0 0 10px rgba(255, 1, 79, 0.7)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Mohammad Tanvir
                </motion.p>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                  AI Engineer • Sports Enthusiast • Digital Innovator
                </p>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-[#2E2E34] rounded-full flex items-center justify-center ${social.color} hover:bg-[#FF014F] hover:text-white transition-all duration-300 transform hover:scale-110`}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}