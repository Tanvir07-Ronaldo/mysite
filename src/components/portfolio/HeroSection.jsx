import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = ["Software Engineer", "AI Developer", "Sports Statistician", "Data Engineer"];

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/tanvir_7_/" },
  { icon: Github, url: "https://github.com/Tanvir07-Ronaldo" },
  { icon: Facebook, url: "https://www.facebook.com/tanvir.tanvir.3304" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="min-h-screen flex items-center bg-[#191919]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-widest">Welcome to my world</span>
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              Hi, I'm <span className="text-[#FF014F]">Mohammad Tanvir</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              a <span className="text-white">{`${roles[index].substring(0, subIndex)}`}</span>
              <span className="animate-ping">|</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg">
              As a detail-oriented student specializing in Artificial Intelligence, I have honed my skills in data analysis, automation, and AI projects. My passion for sports and teamwork complements my professional expertise.
            </p>
            <div className="mt-8">
              <h3 className="uppercase text-sm tracking-wider mb-4">Find me on</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#2E2E34] shadow-md rounded-md flex items-center justify-center text-gray-300 hover:bg-[#FF014F] hover:text-white transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem]">
              <div className="absolute inset-0 bg-[#1C1C1C] rounded-lg shadow-2xl transform -rotate-6"></div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/126570818_485405276_2664477777079952_3643877828183315880_n.jpg"
                alt="Mohammad Tanvir"
                className="relative w-full h-full object-cover rounded-lg object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}