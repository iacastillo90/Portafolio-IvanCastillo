import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link2, GitBranch, ArrowRight, ArrowUpRight } from 'lucide-react';
import styles from './Contact.module.css';

const CONTACTS = [
  {
    id: 'email',
    label: 'Correo electrónico',
    value: 'iacastillo.ili2@gmail.com',
    href: 'mailto:iacastillo.ili2@gmail.com',
    icon: Mail,
    iconClass: 'email',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Iván Castillo Iligaray',
    href: 'https://www.linkedin.com/in/iv%C3%A1n-castillo-iligaray-03b25b243/',
    icon: Link2,
    iconClass: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'iacastillo90',
    href: 'https://github.com/iacastillo90',
    icon: GitBranch,
    iconClass: 'github',
  },
];

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

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className={`${styles.contact} section`}>
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-label" variants={fadeUp}>
            Contacto
          </motion.span>

          <motion.h2 className={styles.headline} variants={fadeUp}>
            ¿Construimos algo
            <span className={`${styles.accent} gradient-text`}>juntos?</span>
          </motion.h2>

          <motion.p className={styles.subtext} variants={fadeUp}>
            Estoy abierto a oportunidades de empleo Full Stack, proyectos freelance
            y conversaciones técnicas interesantes. Si tienes un problema que resolver
            o un proyecto que construir, escríbeme.
          </motion.p>

          {/* Cards de contacto */}
          <motion.div className={styles.contactCards} variants={stagger}>
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.id}
                  id={`contact-${contact.id}`}
                  href={contact.href}
                  target={contact.id !== 'email' ? '_blank' : undefined}
                  rel={contact.id !== 'email' ? 'noopener noreferrer' : undefined}
                  className={styles.contactCard}
                  variants={fadeUp}
                  aria-label={`Contactar por ${contact.label}`}
                >
                  <div className={`${styles.contactIcon} ${styles[contact.iconClass]}`}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{contact.label}</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </div>
                  <ArrowRight size={18} className={styles.contactArrow} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA de email */}
          <motion.div variants={fadeUp}>
            <a
              id="contact-cta-email"
              href="mailto:iacastillo.ili2@gmail.com"
              className={styles.primaryCta}
            >
              Envíame un mensaje
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
