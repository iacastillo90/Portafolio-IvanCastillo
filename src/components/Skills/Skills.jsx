import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Monitor, Database, Cloud, Wrench } from 'lucide-react';
import { skills, techStack } from '../../data/skills';
import styles from './Skills.module.css';

const ICONS = {
  backend: Server,
  frontend: Monitor,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SkillBar({ name, level, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillBar}>
        <motion.div
          className={`${styles.skillFill} ${styles[color]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ categoryKey, category }) {
  const Icon = ICONS[categoryKey] || Wrench;

  return (
    <motion.div className={styles.categoryCard} variants={fadeUp}>
      <div className={styles.categoryHeader}>
        <div className={`${styles.categoryIcon} ${styles[category.color]}`}>
          <Icon size={20} />
        </div>
        <span className={styles.categoryLabel}>{category.label}</span>
      </div>
      <div className={styles.skillsList}>
        {category.items.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tecnologías
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stack &{' '}
          <span className="gradient-text">habilidades</span>
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desde el servidor hasta la interfaz — con profundidad real en cada capa,
          probada en sistemas de producción.
        </motion.p>

        <motion.div
          ref={ref}
          className={styles.categoriesGrid}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {Object.entries(skills).map(([key, category]) => (
            <CategoryCard key={key} categoryKey={key} category={category} />
          ))}
        </motion.div>

        {/* Tech cloud */}
        <motion.div
          className={styles.techCloud}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className={styles.techCloudTitle}>— también trabajo con —</p>
          <div className={styles.techTags}>
            {techStack.map((tech) => (
              <span key={tech.name} className={styles.techTag}>
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
