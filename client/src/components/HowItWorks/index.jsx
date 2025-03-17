import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import NamingContestsSection from './NamingContestsSection';
import FAQSection from './FAQSection';
import SearchSection from './SearchSection';
import styles from './HowItWorks.module.sass';

const HowItWorks = () => {
  return (
    <div className={styles.pageContainer}>
      <HeroSection />
      <ServicesSection />
      <NamingContestsSection />
      <FAQSection />
      <SearchSection />
    </div>
  );
};

export default HowItWorks;
