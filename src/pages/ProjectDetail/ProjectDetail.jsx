import { useParams } from 'react-router-dom';
import { projects } from '../../data';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className={styles.notFound}>Project not found</div>;
  }

  return (
    <div className={styles.projectDetail}>
      <div className="container">
        <div className={styles.projectHeader}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <div className={styles.projectMeta}>
            <span className={styles.projectCategory}>{project.category}</span>
            <span className={styles.projectYear}>{project.year}</span>
            {project.client && (
              <span className={styles.projectClient}>Client: {project.client}</span>
            )}
          </div>
        </div>
        
        <div className={styles.projectContent}>
          <div className={styles.projectImageContainer}>
            <img 
              src={project.image} 
              alt={project.title} 
              className={styles.projectImage}
            />
          </div>
          
          <div className={styles.projectInfo}>
            <div className={styles.projectDescription}>
              <h2 className={styles.sectionTitle}>Expedition Overview</h2>
              <p>{project.description}</p>
            </div>
            
            <div className={styles.projectDetails}>
              <div className={styles.detailItem}>
                <h3 className={styles.detailTitle}>The Challenge</h3>
                <p>{project.details.problem}</p>
              </div>
              
              <div className={styles.detailItem}>
                <h3 className={styles.detailTitle}>The Solution</h3>
                <p>{project.details.solution}</p>
              </div>
              
              <div className={styles.detailItem}>
                <h3 className={styles.detailTitle}>The Impact</h3>
                <p>{project.details.impact}</p>
              </div>
            </div>
            
            <div className={styles.technologies}>
              <h3 className={styles.technologiesTitle}>Technologies Used</h3>
              <div className={styles.techList}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectLink}
              >
                View Live Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;