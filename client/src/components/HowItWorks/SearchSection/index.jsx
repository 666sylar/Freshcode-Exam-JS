import React from 'react';
import styles from './SearchSection.module.sass';

const SearchSection = () => (
  <section className={styles.searchSection}>
    <div className={styles.searchContainer}>
      <div className={styles.gradientWrapper}>
        <div className={styles.innerForm}>
          <div className={styles.searchIcon} />
          <input
            name='search_field'
            type='text'
            placeholder='Search Over 200,000+ Premium Names'
          />
          <button aria-label='Search Domain'>
            <span />
          </button>
        </div>
      </div>

      <div className={styles.tagList}>
        <a href='https://www.google.com/search?q=Tech'>Tech</a>
        <a href='https://www.google.com/search?q=Clothing'>Clothing</a>
        <a href='https://www.google.com/search?q=Finance'>Finance</a>
        <a href='https://www.google.com/search?q=Real+Estate'>Real Estate</a>
        <a href='https://www.google.com/search?q=Crypto'>Crypto</a>
        <a href='https://www.google.com/search?q=Short'>Short</a>
        <a href='https://www.google.com/search?q=One+Word'>One Word</a>
      </div>
    </div>
  </section>
);

export default SearchSection;
