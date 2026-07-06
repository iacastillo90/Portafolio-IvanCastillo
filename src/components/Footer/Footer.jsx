import { GitBranch, Link2, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const NAV_ITEMS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Experiencia', id: 'experiencia' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contacto', id: 'contacto' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Top row: branding + links + social */}
          <div className={styles.topRow}>
            {/* Branding */}
            <div className={styles.brand}>
              <div className={styles.logoRow}>
                <div className={styles.logoMark}>IC</div>
                <span className={styles.brandName}>Iván Castillo</span>
              </div>
              <p className={styles.brandTagline}>
                "El código que funciona es bueno.<br />
                El código que perdura es arte."
              </p>
            </div>

            {/* Quick links */}
            <div className={styles.quickLinks}>
              <p className={styles.quickLinksTitle}>Navegación</p>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  id={`footer-nav-${item.id}`}
                  className={styles.quickLink}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social */}
            <div className={styles.socialLinks}>
              <p className={styles.socialTitle}>Redes</p>
              <div className={styles.socialRow}>
                <a
                  id="footer-github"
                  href="https://github.com/iacastillo90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="GitHub de Iván Castillo"
                >
                  <GitBranch size={18} />
                </a>
                <a
                  id="footer-linkedin"
                  href="https://www.linkedin.com/in/iv%C3%A1n-castillo-iligaray-03b25b243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="LinkedIn de Iván Castillo"
                >
                  <Link2 size={18} />
                </a>
                <a
                  id="footer-email"
                  href="mailto:iacastillo.ili2@gmail.com"
                  className={styles.socialIcon}
                  aria-label="Email de Iván Castillo"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className={styles.bottomRow}>
            <p className={styles.copyright}>
              © {currentYear} Iván Andrés Castillo Iligaray. Todos los derechos reservados.
            </p>
            <p className={styles.madeWith}>
              construido con <span>React</span> + <span>Framer Motion</span> + <span>{'❤'}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
