import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import FounderSection from '../components/sections/FounderSection';
import WhySection from '../components/sections/WhySection';
import StatsSection from '../components/sections/StatsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'hoMediCare - Home Care Services across Tamil Nadu';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <StatsSection />
      <FounderSection />
      <AboutSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;