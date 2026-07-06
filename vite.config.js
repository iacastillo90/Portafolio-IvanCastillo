import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: nombre del repo en GitHub Pages → iacastillo90.github.io/Portafolio-IvanCastillo/
export default defineConfig({
  plugins: [react()],
  base: '/Portafolio-IvanCastillo/',
})
