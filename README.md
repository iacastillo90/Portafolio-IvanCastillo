# Portafolio Profesional — Iván Andrés Castillo Iligaray

> "El código que funciona es bueno. El código que perdura es arte."

Portafolio personal construido de principio a fin con React + Vite, diseñado para posicionarme activamente en el mercado laboral chileno y latinoamericano como Desarrollador Full Stack Jr-SSr.

---

## 🚀 Stack

| Categoría | Tecnología |
|-----------|-----------|
| Framework | React 19 + Vite 8 |
| Animaciones | Framer Motion 12 |
| Iconos | lucide-react |
| Estilos | CSS Modules + CSS Custom Properties |
| Tipografía | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Routing | React Router DOM 7 |
| Deploy | Vercel / GitHub Pages |

---

## 🎨 Decisiones de diseño

- **Paleta "Noche Digital"**: Fondo `#0a0e1a` (azul noche), acento cian `#00d4ff` (tecnología, conexión, fluidez), violeta `#818cf8` como complemento. La paleta transmite profesionalismo tech sin caer en el negro genérico.
- **Space Grotesk** como fuente de titulares: moderna, técnica y con personalidad. Inter para cuerpo de texto por su legibilidad perfecta.
- **Minimalismo dark-mode**: mucho espacio en blanco (negro), jerarquía visual clara, sin ruido visual.
- **Framer Motion** para todas las animaciones de entrada por scroll (fade+slide con easing personalizado). Animaciones de hover en CSS para performance.
- **CSS Modules** por componente + variables CSS globales: control granular sin sacrificar consistencia.

---

## 📁 Estructura de carpetas

```
src/
  components/
    Navbar/         # Navbar sticky con scrollspy y menú mobile
    Hero/           # Sección principal con animación de entrada
    About/          # Sobre mí con avatar animado
    Experience/     # Experiencia laboral + formación + certificaciones
    Skills/         # Barras de progreso animadas por categoría
    ProjectCard/    # Card individual de proyecto
    ProjectsGrid/   # Grid de todos los proyectos
    Contact/        # Sección de contacto con links reales
    Footer/         # Footer con navegación y copyright
  data/
    projects.js     # 12 proyectos con repos y demos reales
    experience.js   # Experiencia, educación y certificaciones
    skills.js       # Skills por categoría con niveles
  styles/
    variables.css   # Tokens de diseño (colores, fuentes, spacing)
    global.css      # Reset, base styles, utilidades globales
  hooks/
    useScrollspy.js # Hook de detección de sección activa
  App.jsx
  main.jsx
```

---

## ⚡ Correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/iacastillo90/Portafolio-IvanCastillo.git
cd Portafolio-IvanCastillo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## 🏗️ Build de producción

```bash
npm run build
npm run preview  # para previsualizar el build
```

---

## 📬 Contacto

- 📧 [iacastillo.ili2@gmail.com](mailto:iacastillo.ili2@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/iván-castillo-iligaray-03b25b243/)
- 🐙 [GitHub](https://github.com/iacastillo90)

---

*Construido con dedicación en Santiago, Chile — 2025*
