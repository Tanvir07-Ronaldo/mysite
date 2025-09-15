import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const allProjects = [
  { title: "Diabetes Detection by ML", category: "AI/ML", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" },
  { title: "Ethical Dilemma in Self-Driving Cars", category: "AI/ML", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop" },
  { title: "Uniconnect - Student Support Platform", category: "Web", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" },
  { title: "AI for Junggong Market Optimization", category: "AI/ML", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { title: "C-mart E-commerce Database", category: "Web", image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=600&h=400&fit=crop" },
  { title: "Object Detection for the Blind (Arduino & IoT)", category: "IoT", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
  { title: "Railways Operation Analysis", category: "Data", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
];

const categories = ["All", "AI/ML", "Web", "IoT", "Data"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-[#191919]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise in various domains of technology.
          </p>
        </motion.div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === cat ? 'bg-[#FF014F] text-white' : 'bg-[#2E2E34] text-gray-300 hover:bg-[#FF014F] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${filter}-${index}`}
              className="bg-[#101010] rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <a href="#" className="w-12 h-12 bg-[#FF014F] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#FF014F] uppercase">{project.category}</p>
                <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-[#FF014F] transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}