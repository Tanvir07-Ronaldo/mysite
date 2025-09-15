import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science: Artificial Intelligence",
    school: "Woosong University",
    duration: "2022 - 2026",
    location: "Daejeon, South Korea",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/e6ff9f8ff_Woosong-University-logo.jpg",
    description: "Specializing in AI and Machine Learning with hands-on experience in deep learning, computer vision, and data science projects."
  },
  {
    degree: "Higher Secondary Certificate: Science",
    school: "Engineering University School And College",
    duration: "2018 - 2020",
    location: "Dhaka, Bangladesh",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/5e5fa098f_Engineering_University_School_and_College_logo.jpg",
    description: "Golden A+ with focus on Mathematics, Physics, and Computer Science fundamentals."
  },
  {
    degree: "Secondary School Certificate: Science",
    school: "St. Gregory's High School And College",
    duration: "2008 - 2018",
    location: "Dhaka, Bangladesh",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/551d758ad_St_Gregorys_High_School_logo.jpeg",
    description: "Golden A+ with strong foundation in scientific principles and analytical thinking."
  }
];

export default function EducationSection() {
  return (
    <section className="py-24 bg-[#101010]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Educational Background</h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey across different countries and institutions, building a strong foundation in technology and science.
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-4 gap-8 items-center bg-gradient-to-r from-[#191919] to-[#1C1C1C] rounded-2xl p-8 border border-gray-700 hover:border-[#FF014F]/30 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="lg:col-span-1 text-center">
                <motion.div 
                  className="w-28 h-28 mx-auto mb-4 bg-white rounded-full p-3 shadow-2xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div className="flex items-center justify-center text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.duration}
                </div>
                <div className="flex items-center justify-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {edu.location}
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-[#FF014F] font-semibold text-xl mb-4">{edu.school}</p>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-[#FF014F]/10 to-[#FF014F]/5 rounded-2xl p-8 border border-[#FF014F]/20"
        >
          <Award className="w-12 h-12 text-[#FF014F] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
          <p className="text-gray-300">
            Consistently achieving top grades across all educational institutions, with a focus on STEM subjects and practical application of theoretical knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}