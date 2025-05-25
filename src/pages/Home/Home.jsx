import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Tambahkan ini
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import { projects, testimonials, skills } from '../../data';
import styles from './Home.module.css';
import SugarcaneBanner from '../../components/SugarcaneBanner/SugarcaneBanner';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const skillsRef = useRef(null);
  const INTERSECTION_THRESHOLD = 0.1;

  useEffect(() => {
    const animateSkills = () => {
      const skillBars = skillsRef.current.querySelectorAll(`.${styles.skillBarFill}`);
      skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: INTERSECTION_THRESHOLD });

    const currentRef = skillsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      <SugarcaneBanner />
      
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Expeditions</h2>
          <div className={styles.projectsGrid}>
            {featuredProjects.map(project => (
              <Card key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.seeMore}>
            <Link to="/projects" className={styles.seeMoreLink}>View All Expeditions →</Link>
          </div>
        </div>
      </section>
      
      <section id="skills" className={`${styles.section} ${styles.skillsSection}`} ref={skillsRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Field Expertise</h2>
          <div className={styles.skillsContainer}>
            {skills.map((skill) => (
              <div key={skill.id} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillBarFill} 
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials dan Contact sections tetap sama */}
    </div>
  );
};

export default Home;