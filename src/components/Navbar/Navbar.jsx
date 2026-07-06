import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollspy } from '../../hooks/useScrollspy';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Experiencia', id: 'experiencia' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contacto', id: 'contacto' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollspy(SECTION_IDS, 100);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú si se cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => scrollToSection('inicio')}
            aria-label="Ir al inicio"
          >
            <div className={styles.logoMark}>IC</div>
            <span className={styles.logoText}>Iván Castillo</span>
          </button>

          {/* Links desktop */}
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-${item.id}`}
                  className={`${styles.navLink} ${activeId === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className={styles.navActions}>
            <button
              className={styles.navCta}
              onClick={() => scrollToSection('contacto')}
              id="nav-cta-contacto"
            >
              Contactarme
            </button>
            <button
              id="nav-menu-toggle"
              className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu con AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                className={`${styles.mobileNavLink} ${activeId === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              className={styles.mobileCta}
              onClick={() => scrollToSection('contacto')}
            >
              Contactarme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
