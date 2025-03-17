import React, { useState } from 'react';
import styles from './FAQSection.module.sass';
import faqsData from '../faqs.json';

const FAQItem = ({ faq, uniqueId, isActive, toggleFAQ }) => (
  <div
    className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
    onClick={() => toggleFAQ(uniqueId)}
  >
    <div className={styles.question}>
      <span>{faq.question}</span>
    </div>
    {isActive && (
      <div className={styles.answerWrapper}>
        <p className={styles.answer}>{faq.answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState({});
  const [activeCategory, setActiveCategory] = useState('faqs');

  const toggleFAQ = id =>
    setActiveFAQ(prev => {
      const state = { ...prev };
      state[id] ? delete state[id] : (state[id] = true);
      return state;
    });

  const renderFAQItems = (faqList, categoryName) =>
    faqList.map((faq, index) => {
      const id = `${categoryName}-${index}`;
      return (
        <FAQItem
          key={id}
          faq={faq}
          uniqueId={id}
          isActive={!!activeFAQ[id]}
          toggleFAQ={toggleFAQ}
        />
      );
    });

  const { faqs, marketPlaceFaqs, manageFaqs, creativeFaqs } = faqsData;

  const handleTabClick = category => {
    setActiveCategory(category);
    setTimeout(() => {
      document
        .getElementById(category)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.faqTabs}>
          <button
            className={activeCategory === 'faqs' ? styles.activeTab : ''}
            onClick={() => handleTabClick('faqs')}
          >
            Launching A Contest
          </button>
          <button
            className={activeCategory === 'marketplace' ? styles.activeTab : ''}
            onClick={() => handleTabClick('marketplace')}
          >
            Buying From Marketplace
          </button>
          <button
            className={activeCategory === 'managed' ? styles.activeTab : ''}
            onClick={() => handleTabClick('managed')}
          >
            Managed Contests
          </button>
          <button
            className={activeCategory === 'creatives' ? styles.activeTab : ''}
            onClick={() => handleTabClick('creatives')}
          >
            For Creatives
          </button>
        </div>

        <div className={styles.categories}>
          <div id='faqs' className={styles.categorySection}>
            <h4>Launching A Contest</h4>
            {renderFAQItems(faqs, 'faqs')}
          </div>
          <div id='marketplace' className={styles.categorySection}>
            <h4>Buying From Marketplace</h4>
            {renderFAQItems(marketPlaceFaqs, 'marketplace')}
          </div>
          <div id='managed' className={styles.categorySection}>
            <h4>Managed Contests</h4>
            {renderFAQItems(manageFaqs, 'managed')}
          </div>
          <div id='creatives' className={styles.categorySection}>
            <h4>For Creatives</h4>
            {renderFAQItems(creativeFaqs, 'creatives')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
