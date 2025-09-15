import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Beyond Borders', id: 'borders' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = 'home';
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1C1C] shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold text-white cursor-pointer flex items-center"
          onClick={() => scrollToSection('home')}
        >
          MR.<span className="text-[#FF014F] text-3xl">7</span>
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium uppercase transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#FF014F]' : 'text-gray-300 hover:text-[#FF014F]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </motion.header>
  );
}