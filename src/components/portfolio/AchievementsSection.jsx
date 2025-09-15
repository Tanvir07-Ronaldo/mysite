import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, GraduationCap, Zap, Globe, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const milestonePhotos = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/c04d9b893_f590c356-4feb-47d1-b1d4-e82c4e8e9bfe.jpg",
    title: "Lifetime Achievements",
    description: "Few of them amongst 100+ medals, trophies and certificates",
    category: "sports",
    year: "Collection"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/5a3fb9110_received_2047469408729487.jpg",
    title: "Silver Medal Achievement",
    description: "9th Bangladesh Games - Rugby Champion",
    category: "sports",
    year: "2021"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/b3f625f21_Messenger_creation_431207485740866.jpg",
    title: "International Competition",
    description: "Competing against Scotland - Wolzburg Cup, Germany",
    category: "sports",
    year: "2016"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/d8530082c_received_240300611145797.jpeg",
    title: "Newspaper Feature",
    description: "Featured as a goal scorer in a national English newspaper.",
    category: "media",
    year: "Media"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/d18debe78_testimonialvisit.jpg",
    title: "Industry Partnership",
    description: "Testimonial visit - Federation of Korea Industry, Seoul",
    category: "professional",
    year: "2023"
  },
   {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/b320e7ccc_Messenger_creation_8592169350614361.jpg",
    title: "Action in Germany",
    description: "In-game action during the tournament in Germany.",
    category: "sports",
    year: "2016"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/a3b19f4e5_received_1382142825773574.jpg",
    title: "AI Company Visit",
    description: "Bangladeshi Student Representative - Acote Group",
    category: "professional",
    year: "2023"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/4a81f3c55_IMG-20210405-WA0031.jpg",
    title: "Medal Recognition",
    description: "Receiving flowers and recognition for Silver Medal",
    category: "sports",
    year: "2021"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/1231d1d58_1755761655890.jpg",
    title: "Internship Achievement",
    description: "With CEO of MRT - My Robot Time International",
    category: "professional",
    year: "2023"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/311e2d6ba_received_805227933700727.jpeg",
    title: "Man of the Match",
    description: "Awarded Man of the Match in a cricket tournament.",
    category: "sports",
    year: "Award"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/bdb7fb87f_received_209565330884684.jpeg",
    title: "Media Feature",
    description: "Featured in media representing a renowned basketball club.",
    category: "media",
    year: "Media"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/b3072e62f_FB_IMG_16182335919797284.jpg",
    title: "TV Interview",
    description: "Interviewed by Somoy TV for basketball achievements.",
    category: "media",
    year: "Interview"
  }
];

const academicAchievements = [
  { year: "2008-2012", award: "General Proficiency Awards", institution: "St. Gregory's High School", details: "1st (2008, 2009, 2010), 2nd (2011), 3rd (2012)", icon: Trophy },
  { year: "2009-2014", award: "Perfect Attendance", institution: "St. Gregory's High School", details: "100% attendance for 6 consecutive years", icon: Star },
  { year: "2016", award: "Talentpool Scholarship", institution: "St. Gregory's High School", details: "Secured 12th rank citywide among all participants", icon: Award },
  { year: "2018", award: "English Course Excellence", institution: "Mentors", details: "Achieved 86% marks in advanced English course", icon: GraduationCap },
  { year: "2018", award: "Academic Testimonial", institution: "Udvash", details: "Recognition for outstanding academic performance", icon: Medal },
];

const sportsAchievements = [
  { year: "2013-2015", award: "Basketball Championships", institution: "St. Gregory's High School", details: "Multiple Inter-Class Basketball Tournament victories", icon: Trophy },
  { year: "2016", award: "National Basketball Champion", institution: "National Schools Committee", details: "Dhaka Mohanagar, Mymansingh & Upa Anchol Champion", icon: Medal },
  { year: "2014-2015", award: "Football Championships", institution: "St. Gregory's High School", details: "Champion (2015), Runner-up (2014)", icon: Trophy },
  { year: "2021", award: "Bangladesh Games Silver", institution: "Dhaka Division", details: "Silver Medal in Rugby competition", icon: Medal },
  { year: "2013", award: "Partille Cup Handball", institution: "International Tournament", details: "Diploma for international handball participation", icon: Award },
  { year: "2015-2019", award: "Track & Field Excellence", institution: "Various Schools", details: "Long Jump (2nd place), 100m Race (3rd place)", icon: Star },
  { year: "2016", award: "Cultural Champion", institution: "St. Gregory's High School", details: "Group Acting Competition Winner", icon: Zap },
];

export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState("milestones");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
          <h2 className="text-4xl font-bold mb-4 text-white">My Achievements</h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A remarkable total of 100+ awards across academic excellence, sports achievements, and professional milestones, showcasing dedication, versatility, and commitment to excellence.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12 bg-[#1C1C1C] rounded-lg p-1">
            <TabsTrigger 
              value="milestones" 
              className="data-[state=active]:bg-[#FF014F] data-[state=active]:text-white transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              Milestones
            </TabsTrigger>
            <TabsTrigger 
              value="academic" 
              className="data-[state=active]:bg-[#FF014F] data-[state=active]:text-white transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Academic
            </TabsTrigger>
            <TabsTrigger 
              value="sports" 
              className="data-[state=active]:bg-[#FF014F] data-[state=active]:text-white transition-all duration-300"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Sports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="milestones">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">Career Milestones & Professional Achievements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {milestonePhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-[#252525] border border-gray-700"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">{photo.description}</p>
                        <span className="inline-block px-3 py-1 bg-[#FF014F] text-white text-xs rounded-full">
                          {photo.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-2">{photo.title}</h3>
                      <p className="text-gray-400 text-sm">{photo.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="academic">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1C1C1C] to-[#252525] p-6 rounded-xl border border-gray-700 hover:border-[#FF014F]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#FF014F] to-[#FF4081] rounded-lg mr-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#FF014F] font-semibold">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.award}</h3>
                  <p className="text-gray-300 text-sm mb-3">{achievement.institution}</p>
                  <p className="text-gray-400 text-sm">{achievement.details}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1C1C1C] to-[#252525] p-6 rounded-xl border border-gray-700 hover:border-[#FF014F]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#FF014F] to-[#FF4081] rounded-lg mr-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#FF014F] font-semibold">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.award}</h3>
                  <p className="text-gray-300 text-sm mb-3">{achievement.institution}</p>
                  <p className="text-gray-400 text-sm">{achievement.details}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Total Awards", value: "100+", icon: Trophy },
            { label: "Academic Excellence", value: "13+", icon: GraduationCap },
            { label: "Sports Victories", value: "80+", icon: Medal },
            { label: "Countries Visited", value: "5", icon: Globe }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-[#1C1C1C]/60 to-[#252525]/60 backdrop-blur-sm border border-gray-700/30 rounded-xl"
            >
              <stat.icon className="w-8 h-8 text-[#FF014F] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="max-w-4xl max-h-[80vh] p-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white text-xl font-semibold">{selectedPhoto.title}</p>
              <p className="text-gray-300 text-lg">{selectedPhoto.description}</p>
              <span className="inline-block mt-2 px-4 py-2 bg-[#FF014F] text-white rounded-full">
                {selectedPhoto.year}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}