import { useState } from 'react';
import Card from '../../components/Card/Card';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import { projects } from '../../data';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>MY EXPEDITIONS</h1>
        <ProjectFilter currentFilter={filter} setFilter={setFilter} />
        
        <div className={styles.projectsGrid}>
          {filteredProjects.slice(0, visibleProjects).map(project => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <button onClick={loadMoreProjects} className={styles.loadMore}>
            LOAD MORE EXPEDITIONS
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;