import { useInView } from 'react-intersection-observer';
import styles from './Testimonials.module.css';

const Testimonials = ({ testimonials }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`${styles.testimonialsContainer} ${inView ? styles.visible : ''}`}
    >
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialText}>"{testimonial.content}"</p>
            <div className={styles.testimonialAuthor}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className={styles.testimonialAvatar}
              />
              <div>
                <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                <p className={styles.testimonialRole}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;