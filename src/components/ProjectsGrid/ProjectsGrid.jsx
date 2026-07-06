import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './ProjectsGrid.module.css';

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="proyectos" className={`${styles.projects} section`}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Código que{' '}
          <span className="gradient-text">cuenta historias</span>
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cada proyecto es un pedazo de camino recorrido — desde e-commerce de alto rendimiento
          hasta iniciativas de impacto social con IA. Todo público, todo real.
        </motion.p>

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
