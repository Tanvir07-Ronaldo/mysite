import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Plane, Users } from 'lucide-react';

const countries = [
  { name: "Sweden", flag: "🇸🇪", city: "Gothenburg" },
  { name: "Denmark", flag: "🇩🇰", city: "Copenhagen" },
  { name: "Switzerland", flag: "🇨🇭", city: "Zurich" },
  { name: "Netherlands", flag: "🇳🇱", city: "Amsterdam" },
  { name: "Germany", flag: "🇩🇪", city: "Various Cities" },
];

const photos = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/e855a7b3e_499152904_4042343732705799_8442402027390716543_n.jpg",
    caption: "Team Bangladesh at European Championship",
    country: "Multi-national Tournament"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/d5e8db9d2_104832828_2689377221335797_496786078956082943_n.jpg",
    caption: "Cultural Exchange with European Athletes",
    country: "Sweden"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/01822b2da_1720275895910.jpg",
    caption: "Representing Bangladesh in Europe",
    country: "Switzerland"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/bab7e7606_1720275900487.jpg",
    caption: "Proudly carrying the Bangladesh flag",
    country: "Denmark"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/252e5b774_495127758_2707794716081591_5500439699584317508_n.jpg",
    caption: "European adventure representing my homeland",
    country: "Germany"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c21e52ff5bcf90845d4dfb/b48f900f0_495014728_2707794726081590_244617892753693516_n.jpg",
    caption: "Building international connections through sports",
    country: "Netherlands"
  },
];

export default function BeyondBordersSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-[#101010] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF014F' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-[#FF014F] mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Beyond Borders</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF014F] to-[#FF4081] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A Global Perspective: Representing Bangladesh across 5 European nations, 
            building bridges through sports diplomacy and cultural exchange
          </p>
        </motion.div>

        {/* Country Flags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="text-center p-6 bg-gradient-to-br from-[#1C1C1C]/80 to-[#252525]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#FF014F]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-6xl mb-3">{country.flag}</div>
              <h3 className="text-xl font-bold text-white mb-1">{country.name}</h3>
              <p className="text-gray-400 text-sm flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-1" />
                {country.city}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Globe, label: "Countries Visited", value: "5", color: "text-blue-400" },
            { icon: Plane, label: "International Tours", value: "Multiple", color: "text-green-400" },
            { icon: Users, label: "Cultural Exchanges", value: "Countless", color: "text-purple-400" },
            { icon: MapPin, label: "Continents", value: "Europe", color: "text-[#FF014F]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-[#1C1C1C]/60 to-[#252525]/60 backdrop-blur-sm border border-gray-700/30 rounded-xl"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Memorable Moments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-[#252525]"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold mb-2">{photo.caption}</p>
                    <p className="text-[#FF014F] text-sm">{photo.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-[#FF014F]/10 to-[#FF4081]/10 rounded-2xl p-8 border border-[#FF014F]/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Global Ambassador</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Through sports, I've had the incredible opportunity to represent Bangladesh on the European stage, 
            fostering international relationships, cultural understanding, and showcasing the spirit of my homeland. 
            Each journey has been a step toward building bridges between nations and promoting unity through athletics.
          </p>
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
              alt={selectedPhoto.caption}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white text-xl font-semibold">{selectedPhoto.caption}</p>
              <p className="text-[#FF014F] text-lg">{selectedPhoto.country}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}