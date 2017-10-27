import React from 'react';
import styles from './Header.scss';

/**
 * Component to display main page header
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>

      <div className={styles.avatar}></div>

      <a href="https://github.com/rodleviton/alinta-coding-challenge" title="Rod Leviton Github Repo" target="_blank" className={styles.github}></a>
    </header>
  );
};

export default Header;
