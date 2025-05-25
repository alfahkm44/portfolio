import styles from './ProjectFilter.module.css';

const ProjectFilter = ({ currentFilter, setFilter }) => {
  const categories = [
    { id: 'all', name: 'All Expeditions' },
    { id: 'WILDLIFE TRACKER', name: 'WILDLIFE TRACKER' },
    { id: 'EXPLORER', name: 'EXPLORER' },
    { id: 'ADVENTURE', name: 'ADVENTURE' },
    { id: 'NATURE', name: 'NATURE' },
    { id: 'DOCUMENTARY', name: 'DOCUMENTARY' }
  ];

  return (
    <div className={styles.filterContainer}>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setFilter(category.id)}
          className={`${styles.filterButton} ${currentFilter === category.id ? styles.active : ''}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;