import { GitBranch, ExternalLink, Code2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={styles.card}
      variants={cardVariants}
      id={`project-card-${project.id}`}
    >
      {/* Número decorativo de fondo */}
      <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>

      <div className={styles.content}>
        {/* Featured badge */}
        {project.featured && (
          <span className={styles.featuredBadge}>
            <Star size={10} />
            Destacado
          </span>
        )}

        {/* Header: icono + nombre */}
        <div className={styles.cardHeader}>
          <div className={styles.cardName}>{project.name}</div>
          <div className={styles.cardIcon}>
            <Code2 size={20} />
          </div>
        </div>

        {/* Descripción */}
        <p className={styles.cardDescription}>{project.description}</p>

        {/* Tags */}
        <div className={styles.tagRow}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className={styles.cardActions}>
          <a
            id={`project-repo-${project.id}`}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.repo}`}
            aria-label={`Ver repositorio de ${project.name}`}
          >
            <GitBranch size={15} />
            Código
          </a>
          <a
            id={`project-demo-${project.id}`}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.demo}`}
            aria-label={`Ver demo de ${project.name}`}
          >
            <ExternalLink size={15} />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
