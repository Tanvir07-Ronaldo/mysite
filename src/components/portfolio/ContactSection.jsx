import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Instagram, Facebook, Code, Cpu, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/tanvir.tanvir.3304" },
  { icon: Instagram, url: "https://www.instagram.com/tanvir_7_/" },
  { icon: Github, url: "https://github.com/Tanvir07-Ronaldo" },
];

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-[#101010] overflow-hidden">
      {/* Sports & Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Tech Circuit Pattern */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF014F' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Sports Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full border-4 border-[#FF014F] opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 transform rotate-45 border-4 border-cyan-500 opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></div>
        
        {/* Floating Tech Icons */}
        {[Code, Cpu, Database, Brain].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FF014F] opacity-20"
            style={{
              top: `${20 + i * 20}%`,
              right: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <h3 className="text-2xl font-semibold mb-6 text-[#FF014F]">Let's Discuss New Tech</h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            I'm always open to connecting with fellow professionals, collaborators, and innovators. 
            Whether you're looking to discuss data science, explore potential collaborations, or simply 
            expand your network, feel free to reach out. I look forward to connecting!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1 bg-gradient-to-br from-[#1C1C1C]/90 to-[#252525]/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border-2 border-[#FF014F]/20">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/126570818_485405276_2664477777079952_3643877828183315880_n.jpg" 
                className="w-full h-full object-cover object-top" 
                alt="Mohammad Tanvir"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Mohammad Tanvir</h3>
              <p className="text-[#FF014F] font-semibold mb-2">AI Engineer & Sports Tech Enthusiast</p>
              <p className="text-gray-400 mb-6">
                Bridging the gap between artificial intelligence and sports analytics. 
                Let's innovate together in the world of data science and technology.
              </p>
            </div>

            <div className="space-y-4 text-gray-300 mb-8">
              <motion.div 
                className="flex items-center p-3 bg-[#2E2E34]/50 rounded-lg hover:bg-[#FF014F]/10 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-5 h-5 mr-4 text-[#FF014F]" />
                <span>+82 010-4638-2868</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-3 bg-[#2E2E34]/50 rounded-lg hover:bg-[#FF014F]/10 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-5 h-5 mr-4 text-[#FF014F]" />
                <span>mtanvir9820@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center p-3 bg-[#2E2E34]/50 rounded-lg hover:bg-[#FF014F]/10 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-5 h-5 mr-4 text-[#FF014F]" />
                <span>Daejeon, South Korea</span>
              </motion.div>
            </div>

            <div>
              <h3 className="uppercase text-sm tracking-wider mb-4 text-white font-semibold">Connect & Collaborate</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a 
                    href={social.url} 
                    key={i} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#2E2E34] to-[#3E3E44] shadow-lg rounded-xl flex items-center justify-center text-gray-300 hover:bg-[#FF014F] hover:text-white transition-all duration-300 border border-gray-600/30 hover:border-[#FF014F]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 bg-gradient-to-br from-[#1C1C1C]/90 to-[#252525]/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">Start a Conversation</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-[#2E2E34]/70 border-gray-600/50 text-white placeholder:text-gray-500 focus:ring-[#FF014F] focus:border-[#FF014F] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <Input 
                    placeholder="+1 (555) 123-4567" 
                    className="bg-[#2E2E34]/70 border-gray-600/50 text-white placeholder:text-gray-500 focus:ring-[#FF014F] focus:border-[#FF014F] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-[#2E2E34]/70 border-gray-600/50 text-white placeholder:text-gray-500 focus:ring-[#FF014F] focus:border-[#FF014F] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <Input 
                  placeholder="AI Collaboration Opportunity" 
                  className="bg-[#2E2E34]/70 border-gray-600/50 text-white placeholder:text-gray-500 focus:ring-[#FF014F] focus:border-[#FF014F] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Message</label>
                <Textarea 
                  placeholder="Tell me about your project, collaboration idea, or just say hello!" 
                  rows={6} 
                  className="bg-[#2E2E34]/70 border-gray-600/50 text-white placeholder:text-gray-500 focus:ring-[#FF014F] focus:border-[#FF014F] transition-all"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#FF014F] to-[#FF4081] hover:from-[#e00142] hover:to-[#e6366f] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message & Start Collaborating
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}