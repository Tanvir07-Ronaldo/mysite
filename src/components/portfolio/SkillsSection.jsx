import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, Database, Cloud, Code, Cpu, Zap,
  TrendingUp, Shield, Globe, Sparkles 
} from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Hugging Face", "Computer Vision", "NLP", "Deep Learning"]
  },
  {
    category: "Programming Languages",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "TypeScript", "SQL"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD"]
  },
  {
    category: "Big Data & Analytics",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: ["Apache Spark", "Kafka", "Hadoop", "Elasticsearch", "MongoDB", "PostgreSQL", "Redis", "Cassandra"]
  },
  {
    category: "MLOps & Infrastructure",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    skills: ["MLflow", "Kubeflow", "Apache Airflow", "Prometheus", "Grafana", "NVIDIA CUDA", "Ray", "Dask"]
  },
  {
    category: "Emerging Technologies",
    icon: Sparkles,
    color: "from-pink-500 to-violet-500",
    skills: ["LLMs", "Generative AI", "Edge Computing", "Quantum ML", "Blockchain", "AR/VR", "IoT", "5G Networks"]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power next-generation AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                />
                <motion.div
                  className={`absolute inset-[1px] bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skillGroup.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 bg-slate-700/50 border border-slate-600/30 rounded-lg text-sm text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "AI Models Built", value: "50+", icon: Brain },
            { label: "Lines of Code", value: "100K+", icon: Code },
            { label: "Cloud Deployments", value: "30+", icon: Cloud },
            { label: "Performance Optimization", value: "10x", icon: TrendingUp }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 rounded-xl"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}