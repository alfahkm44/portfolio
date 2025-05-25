import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Header.module.css';
// Path yang benar untuk struktur di atas:
import logoImage from '../../assets/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoTextGroup}>
            <span className={styles.logoText}>alfahkm</span>
            <span className={styles.logoAccent}>portfolio</span>
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