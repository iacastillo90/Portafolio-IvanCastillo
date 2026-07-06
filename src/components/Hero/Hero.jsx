import { motion } from 'framer-motion';
import { GitBranch, Link2, ExternalLink } from 'lucide-react';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={styles.hero}>
      {/* Fondo */}
      <div className={styles.bg} />
      <div className={styles.grid} />

      {/* Orbs decorativos */}
      <div className={`${styles.orb} ${styles.orbCyan}`} />
      <div className={`${styles.orb} ${styles.orbViolet}`} />

      {/* Contenido principal */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge disponibilidad */}
        <motion.div className={styles.badge} variants={itemVariants}>
          <span className={styles.badgeDot} />
          Disponible para nuevas oportunidades
        </motion.div>

        {/* Nombre */}
        <motion.h1 className={styles.title} variants={itemVariants}>
          Hola, soy{' '}
          <span className={styles.titleAccent}>
            Iván Castillo
          </span>
        </motion.h1>

        {/* Subtítulo técnico */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Desarrollador Full Stack
          <span className={styles.subtitleSep}>//</span>
          Java & Spring Boot
          <span className={styles.subtitleSep}>//</span>
          Stack MERN
        </motion.p>

        {/* Descripción */}
        <motion.p className={styles.description} variants={itemVariants}>
          Construyo sistemas que escalan — desde backends críticos en Java hasta interfaces
          que enamoran. Un año en producción real en una empresa AWS Partner me enseñó que
          el código importa, pero la arquitectura es lo que perdura.
        </motion.p>

        {/* Botones CTA */}
        <motion.div className={styles.ctaGroup} variants={itemVariants}>
          <button
            id="hero-cta-proyectos"
            className="btn btn-primary"
            onClick={() => scrollToSection('proyectos')}
          >
            <ExternalLink size={18} />
            Ver proyectos
          </button>
          <a
            id="hero-cta-github"
            href="https://github.com/iacastillo90"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitBranch size={18} />
            GitHub
          </a>
          <a
            id="hero-cta-linkedin"
            href="https://www.linkedin.com/in/iv%C3%A1n-castillo-iligaray-03b25b243/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Link2 size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.stat}>
            <span className={styles.statValue}>1+</span>
            <span className={styles.statLabel}>año en producción</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>proyectos públicos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>certificaciones</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>80%</span>
            <span className={styles.statLabel}>mejora en eficiencia</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('sobre-mi')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Scroll hacia abajo"
      >
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </motion.button>
    </section>
  );
}

export default Hero;
