import React from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import EducationSection from '../components/portfolio/EducationSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import BeyondBordersSection from '../components/portfolio/BeyondBordersSection';
import AchievementsSection from '../components/portfolio/AchievementsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Header from '../components/portfolio/Header';
import WelcomeGreeting from '../components/portfolio/WelcomeGreeting';
import FloatingSports from '../components/portfolio/FloatingSports';

export default function Portfolio() {
  const [showGreeting, setShowGreeting] = React.useState(true);

  return (
    <>
      <AnimatePresence>
        {showGreeting && (
          <WelcomeGreeting onComplete={() => setShowGreeting(false)} />
        )}
      </AnimatePresence>
      
      {!showGreeting && (
        <div className="bg-[#101010] text-gray-300 font-sans">
          <Header />
          <FloatingSports />
          <main>
            <div id="home">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="education">
              <EducationSection />
            </div>
            <div id="experience">
              <ExperienceSection />
            </div>
            <div id="borders">
              <BeyondBordersSection />
            </div>
            <div id="achievements">
              <AchievementsSection />
            </div>
            <div id="projects">
              <ProjectsSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </main>
          <footer className="bg-[#1C1C1C] text-center py-6">
            <p className="text-gray-400">Created and designed by Mohammad Tanvir © 2025. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
}