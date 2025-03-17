import React from 'react';
import styles from './NamingContestsSection.module.sass';

const steps = [
  {
    step: 'Step 1',
    text:
      'Fill out your Naming Brief and begin receiving name ideas in minutes',
  },
  {
    step: 'Step 2',
    text:
      'Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.',
  },
  {
    step: 'Step 3',
    text:
      'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.',
  },
  {
    step: 'Step 4',
    text: 'Pick a Winner. The winner gets paid for their submission.',
  },
];

const NamingContestsSection = () => {
  return (
    <section className={styles.namingSection} id='namingContests'>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src='/staticImages/naming-contests-icon.svg'
            alt='Naming Contests Icon'
            className={styles.icon}
          />
          <h3>How Do Naming Contests Work?</h3>
        </div>
        <div className={styles.stepsRow}>
          {steps.map((item, index) => (
            <div className={styles.stepCard} key={index}>
              <span className={styles.stepLabel}>{item.step}</span>
              <p className={styles.stepText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NamingContestsSection;
