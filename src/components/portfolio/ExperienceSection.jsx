import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  { 
    role: "Sports Statistician", 
    company: "Genius Sports Technology", 
    duration: "06/2022 - Present",
    location: "Remote",
    description: "Working with data collection and augmentation for mobile interface analysis."
  },
  { 
    role: "Software Engineer Intern", 
    company: "My Robot Time International", 
    duration: "09/2023 - 12/2023",
    location: "Daejeon, South Korea",
    description: "Contributed to the development of educational robotics software, focusing on backend services and API integration for interactive learning modules."
  },
  { 
    role: "Data Engineer Intern", 
    company: "Cognifyz Technologies", 
    duration: "Completed: 04/2025",
    location: "India (Remote)",
    description: "Completed Railway Operation Analysis Project."
  },
  { 
    role: "Handball and Basketball Coach", 
    company: "Trainer, Dhaka", 
    duration: "05/2019 - 05/2022",
    location: "Dhaka",
    description: "Managed team logistics, coordinated events, mentored assistant coaches, and spearheaded community outreach."
  },
];

export default function ExperienceSection() {
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
          <h2 className="text-3xl font-bold mb-4 text-white">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey across sports technology, data engineering, and coaching.
          </p>
        </motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-3 gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:col-span-1">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-[#FF014F] font-medium">{exp.company}</p>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <Calendar className="w-4 h-4 mr-2" /> {exp.duration}
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                </div>
              </div>
              <div className="md:col-span-2 md:border-l-2 border-[#FF014F] md:pl-8">
                 <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}