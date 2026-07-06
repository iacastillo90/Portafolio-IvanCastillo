import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { experience, education, certifications } from '../../data/experience';
import styles from './Experience.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const job = experience[0];

  return (
    <section id="experiencia" className={`${styles.experience} section`}>
      <div className="container">
        <motion.span
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Trayectoria
        </motion.span>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Experiencia &{' '}
          <span className="gradient-text">Formación</span>
        </motion.h2>
        <motion.p
          className="section-description"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Un año construyendo sistemas reales en producción, respaldado por más de
          1300 horas de formación acreditada y 4 certificaciones internacionales.
        </motion.p>

        <motion.div
          ref={ref}
          className={styles.layout}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Columna izquierda: job card */}
          <motion.div variants={fadeUp}>
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-4)' }}>
                  <div className={styles.jobCompanyLogo}>M&O</div>
                  <div className={styles.jobMeta}>
                    <div className={styles.jobCompany}>{job.company}</div>
                    <span className={styles.jobBadge}>
                      <Award size={12} /> {job.badge}
                    </span>
                  </div>
                </div>
                <div className={styles.jobPeriod}>{job.period}</div>
              </div>

              <h3 className={styles.jobRole}>{job.role}</h3>
              <p className={styles.jobDescription}>{job.description}</p>

              <div className={styles.techRow}>
                {job.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Certificaciones */}
            <div style={{ marginTop: 'var(--spacing-6)' }}>
              <h3 className={styles.achievementsTitle}>
                <Award size={20} color="var(--color-accent)" />
                Certificaciones
              </h3>
              <div className={styles.achievementsList}>
                {certifications.map((cert) => (
                  <div key={cert.id} className={styles.achievement}>
                    <CheckCircle2 size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <span className={styles.achievementText} style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                        {cert.name}
                      </span>
                      <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: logros + educación */}
          <motion.div className={styles.rightColumn} variants={stagger}>
            {/* Logros */}
            <motion.div variants={fadeUp}>
              <h3 className={styles.achievementsTitle}>
                <Briefcase size={20} color="var(--color-primary)" />
                Logros clave en Morris & Opazo
              </h3>
              <div className={styles.achievementsList}>
                {job.achievements.map((item, i) => (
                  <div key={i} className={styles.achievement}>
                    <div className={styles.achievementDot} />
                    <p className={styles.achievementText}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Formación académica */}
            <motion.div className={styles.educationSection} variants={fadeUp}>
              <h3 className={styles.educationTitle}>
                <GraduationCap size={20} color="var(--color-accent)" />
                Formación académica
              </h3>
              <div className={styles.educationList}>
                {education.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.educationItem} ${item.highlight ? styles.current : ''}`}
                  >
                    <div className={styles.educationDot} />
                    <div className={styles.educationInfo}>
                      <div className={styles.educationInstitution}>{item.institution}</div>
                      <div className={styles.educationProgram}>{item.program}</div>
                    </div>
                    <div className={styles.educationMeta}>
                      <span className={styles.educationPeriod}>{item.period}</span>
                      {item.hours && (
                        <span className={styles.educationHours}>{item.hours}</span>
                      )}
                      {item.highlight && (
                        <span style={{
                          display: 'block',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-primary)',
                          fontFamily: 'var(--font-mono)',
                          marginTop: 2,
                        }}>
                          En curso ●
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
