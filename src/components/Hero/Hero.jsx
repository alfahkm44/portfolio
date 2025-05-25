import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.css';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`${styles.hero} ${inView ? styles.visible : ''}`}
      id="home"
    >
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          EXPLORE <span className={styles.highlight}>MY</span> CREATIVE WORLD
        </h1>
        <p className={styles.subtitle}>
          Documenting digital journeys through code and design
        </p>
        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
          <a href="#contact" className={styles.ctaSecondary}>Contact Me</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
      <div className={styles.parallaxBackground}></div>
    </section>
  );
};

export default Hero;