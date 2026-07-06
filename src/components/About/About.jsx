import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Globe, Code2, ArrowRight } from 'lucide-react';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre-mi" className={`${styles.about} section`}>
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Avatar */}
          <motion.div className={styles.avatarSide} variants={fadeUp}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarBorder} />
              <div className={styles.avatarInner}>
                <span className={styles.avatarInitials}>IC</span>
              </div>
            </div>
          </motion.div>

          {/* Contenido textual */}
          <motion.div className={styles.content} variants={stagger}>
            <motion.span className="section-label" variants={fadeUp}>
              Sobre mí
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Un desarrollador que construye<br />
              <span className="gradient-text">con propósito</span>
            </motion.h2>

            <motion.p className={styles.text} variants={fadeUp}>
              Soy <strong>Iván Andrés Castillo Iligaray</strong>, Desarrollador Full Stack
              con base en <span className={styles.highlight}>Santiago, Chile</span>.
              Mi primer año profesional en <strong>Morris & Opazo</strong> (empresa
              AWS Partner) me puso a construir sistemas críticos de carga eléctrica —
              desde el protocolo OCPP 1.6 hasta infraestructura cloud sobre VPC, EC2 y Route 53.
            </motion.p>

            <motion.p className={styles.text} variants={fadeUp}>
              Me muevo cómodo entre el <strong>backend</strong> (Java/Spring Boot con
              Spring Security y JWT) y el <strong>frontend</strong> (React, Vue.js,
              TypeScript). Creo en el aprendizaje continuo: más de{' '}
              <span className={styles.highlight}>1300+ horas de formación</span> acreditada,
              4 certificaciones internacionales y la convicción de que el código limpio
              es una forma de respeto hacia quien trabaja contigo.
            </motion.p>

            <motion.div className={styles.infoGrid} variants={fadeUp}>
              <div className={styles.infoItem}>
                <MapPin size={18} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Ubicación</span>
                  <span className={styles.infoValue}>Santiago, Chile</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Briefcase size={18} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Experiencia</span>
                  <span className={styles.infoValue}>1+ año profesional</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Code2 size={18} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Especialidad</span>
                  <span className={styles.infoValue}>Full Stack</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Globe size={18} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Idiomas</span>
                  <span className={styles.infoValue}>Español / Inglés A2</span>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.ctaRow} variants={fadeUp}>
              <button
                id="about-cta-contacto"
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Trabajemos juntos
                <ArrowRight size={18} />
              </button>
              <a
                id="about-cta-github"
                href="https://github.com/iacastillo90"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
