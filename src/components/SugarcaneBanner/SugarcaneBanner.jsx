import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import styles from './SugarcaneBanner.module.css';

// Import your images
import SugarcanePoster from '../../assets/images/sugarcane-poster.jpg';
import HarvestPoster from '../../assets/images/harvest-poster.jpg';
import FireSoilPoster from '../../assets/images/fire-soil-poster.jpg';
import RusticPoster from '../../assets/images/rustic-poster.jpg';
import EmbersPoster from '../../assets/images/embers-poster.jpg';

const SugarcaneBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef(null);

  const posters = [
    { 
      id: 0, 
      title: "THE HARVEST", 
      image: HarvestPoster,
      alt: "The Harvest documentary poster"
    },
    { 
      id: 1, 
      title: "SUGARCANE", 
      image: SugarcanePoster,
      alt: "Sugarcane documentary poster" 
    },
    { 
      id: 2, 
      title: "FIRE & SOIL", 
      image: FireSoilPoster,
      alt: "Fire and Soil documentary poster"
    },
    { 
      id: 3, 
      title: "RUSTIC", 
      image: RusticPoster,
      alt: "Rustic documentary poster" 
    },
    { 
      id: 4, 
      title: "EMBERS", 
      image: EmbersPoster,
      alt: "Embers documentary poster" 
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper} ref={carouselRef}>
        <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
  <ArrowIcon direction="left" />
</button>

        <div className={styles.carouselTrack}>
          <AnimatePresence initial={false}>
            {posters.map((poster, index) => {
              const position = index - currentIndex;
              const isCenter = position === 0;
              
              return (
                <motion.div
  key={poster.id}
  className={`${styles.poster} ${isCenter ? styles.centerPoster : ''}`}
  style={{
  zIndex: 10 - Math.abs(position),
}}

  initial={{
    x: position * 180,
    scale: 1 - Math.abs(position) * 0.2,
    opacity: 1 - Math.abs(position) * 0.5,
    rotateY: position === 0 ? 0 : position < 0 ? 25 : -25,
    filter: position === 0 ? 'none' : 'blur(2px)',
  }}
  animate={{
    x: position * 180,
    scale: isCenter ? 1 : 0.8,
    opacity: isCenter ? 1 : 0.6,
    rotateY: position === 0 ? 0 : position < 0 ? 25 : -25,
    filter: position === 0 ? 'none' : 'blur(2px)',
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
>

                  <img 
                    src={poster.image} 
                    alt={poster.alt}
                    className={styles.posterImage}
                  />
                  <div className={styles.posterContent}>
                    <h3 className={styles.posterTitle}>{poster.title}</h3>
                    
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={styles.posterCenterContent}
                      >
                        <motion.button
                          className={styles.watchButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          WATCH NOW
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
  <ArrowIcon direction="right" />
</button>
      </div>
    </div>
  );
};

const ArrowIcon = ({ direction = 'right' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transform: direction === 'left' ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s ease',
    }}
  >
    <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


export default SugarcaneBanner;