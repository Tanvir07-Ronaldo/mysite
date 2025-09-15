import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSports() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Basketball - Right Side */}
      <motion.div
        className="fixed right-4 z-30 pointer-events-none"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02 + scrollY * 0.3,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 15 }}
        style={{ top: '25%' }}
      >
        <motion.div
          className="relative w-12 h-12"
          animate={{ rotate: scrollY * 0.2 }}
          whileHover={{ scale: 1.3 }}
        >
          {/* Basketball Shadow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-30 rounded-full blur-sm"></div>
          
          {/* Basketball Main Body */}
          <div 
            className="relative w-12 h-12 rounded-full shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b1a 50%, #d4380d 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.4), 0 2px 8px rgba(255, 107, 26, 0.5)',
            }}
          >
            {/* Basketball lines */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black opacity-80 rounded-full"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-black opacity-80"></div>
            {/* Curved lines */}
            <div className="absolute inset-0.5 border border-black opacity-60 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Soccer Ball - Left Side */}
      <motion.div
        className="fixed left-4 z-30 pointer-events-none"
        animate={{
          x: -mousePosition.x * 0.02,
          y: mousePosition.y * 0.02 + scrollY * 0.2,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 15 }}
        style={{ top: '45%' }}
      >
        <motion.div
          className="relative w-12 h-12"
          animate={{ rotate: -scrollY * 0.2 }}
          whileHover={{ scale: 1.3 }}
        >
          {/* Soccer Ball Shadow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-black opacity-30 rounded-full blur-sm"></div>
          
          {/* Soccer Ball Main Body */}
          <div 
            className="relative w-12 h-12 rounded-full bg-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #d0d0d0 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Soccer ball pentagon pattern */}
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 bg-black" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-black" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-black" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-black" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}