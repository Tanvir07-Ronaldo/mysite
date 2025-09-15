import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: "Global Experience",
    description: "From Bangladesh to South Korea, my journey blends cultural diversity with technical expertise. I've experienced different educational systems and work cultures."
  },
  {
    icon: GraduationCap,
    title: "AI Academic",
    description: "Pursuing Bachelor's in Artificial Intelligence at Woosong University with excellence in both academics and research projects."
  },
  {
    icon: Briefcase,
    title: "Tech Professional",
    description: "Experience spans across sports technology, data engineering, and software development with proven track record in delivering results."
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#191919] via-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Mohammad Tanvir — a multi-passionate software engineer, inspiring innovator, and strategic thinker operating at the crossroads of artificial intelligence, sports technology, and data science.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From Bangladesh to South Korea, my journey blends technical ambition with global perspective. I've traveled across different cultures, each enriching my professional outlook. As a student at Woosong University specializing in AI, I help organizations grow through data-driven solutions, automation, and innovative AI projects. I also played a key role in building sports analytics platforms — contributing to the sports technology ecosystem.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              In addition, I serve as a dedicated sports enthusiast and coach, bringing the same passion for excellence to athletics as I do to technology. My experience managing handball and basketball teams has taught me leadership, strategic planning, and team coordination.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a dedicated technology enthusiast and innovator, I bring the same energy and commitment to solving complex problems through AI and machine learning as I do to sports and team leadership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#1C1C1C] bg-opacity-60 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 1, 79, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#FF014F] rounded-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}