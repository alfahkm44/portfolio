import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // pastikan komponen Navbar tersedia
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoBox}></div>
          <div className={styles.logoTextGroup}>
            <span className={styles.logoText}>ALFA</span>
            <span className={styles.logoAccent}>HKM</span>
            <span className={styles.logoText}>PORTFOLIO</span>
          </div>
        </Link>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
