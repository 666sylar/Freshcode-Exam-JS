import React from 'react';
import styles from './ServicesSection.module.sass';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <header className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Our Services</span>
          <h2>3 Ways To Use Atom</h2>
          <p>Atom offers 3 ways to get you a perfect name for your business.</p>
        </header>
        <ul className={styles.servicesRow}>
          <li className={styles.serviceCard}>
            <figure className={styles.cardIcon}>
              <img
                src='/staticImages/launch-a-contest.svg'
                alt='Launch a Contest'
              />
            </figure>
            <h3>Launch a Contest</h3>
            <p>
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </p>
            <a href='/login' className={styles.actionButton}>
              <span>Launch a Contest</span>
              <span className={styles.arrowRight}></span>
            </a>
          </li>
          <li className={styles.serviceCard}>
            <figure className={styles.cardIcon}>
              <img
                src='/staticImages/explore-names-for-sale.svg'
                alt='Explore Names For Sale'
              />
            </figure>
            <h3>Explore Names For Sale</h3>
            <p>
              Our branding team has curated thousands of pre-made names that you
              can purchase instantly. All names include a matching URL and a
              complimentary Logo Design.
            </p>
            <a href='/login' className={styles.actionButton}>
              <span>Explore Names For Sale</span>
              <span className={styles.arrowRight}></span>
            </a>
          </li>
          <li className={styles.serviceCard}>
            <figure className={styles.cardIcon}>
              <img
                src='/staticImages/managed-contests.svg'
                alt='Managed Contests'
              />
            </figure>
            <h3>Agency-level Managed Contests</h3>
            <p>
              Our Managed contests combine the power of crowdsourcing with the
              rich experience of our branding consultants. Get a complete
              agency-level experience at a fraction of Agency costs.
            </p>
            <a href='/login' className={styles.actionButton}>
              <span>Learn More</span>
              <span className={styles.arrowRight}></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
