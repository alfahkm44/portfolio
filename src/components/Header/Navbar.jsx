import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects" className={styles.navLink} onClick={toggleMenu}>Projects</Link>
        </li>
        {/* Tambahkan link Sugarcane di sini */}
        <li className={styles.navItem}>
          <Link to="/sugarcane" className={styles.navLink} onClick={toggleMenu}>Sugarcane</Link>
        </li>
        <li className={styles.navItem}>
          <a href="#skills" className={styles.navLink} onClick={toggleMenu}>Skills</a>
        </li>
        <li className={styles.navItem}>
          <a href="#testimonials" className={styles.navLink} onClick={toggleMenu}>Testimonials</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink} onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;