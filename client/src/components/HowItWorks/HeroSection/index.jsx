import React from 'react';
import styles from './HeroSection.module.sass';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroRow}>
        <div className={styles.heroText}>
          <h4>World's #1 Naming Platform</h4>
          <h1>How Does Atom Work?</h1>
          <p>
            Atom helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
        </div>
        <div className={styles.heroMedia}>
          <div className={styles.heroVideoBox}>
            <iframe
              src='https://iframe.mediadelivery.net/embed/239474/327efcdd-b1a2-4891-b274-974787ae8362?autoplay=false&amp;loop=false&amp;muted=false&amp;preload=true&amp;responsive=true'
              allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
              allowFullScreen
              title='How It Works Video'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
