import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Card.module.css';

const Card = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div 
        className={styles.cardImageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.cardImage}
          loading="lazy"
        />
        <motion.div
          className={styles.cardOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.cardContent}
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardCategory}>{project.category}</p>
            <Link 
              to={`/projects/${project.id}`} 
              className={styles.cardLink}
              onClick={(e) => e.stopPropagation()}
            >
              Explore Expedition
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;