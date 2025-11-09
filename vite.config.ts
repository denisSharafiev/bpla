import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bpla/', // ОБЯЗАТЕЛЬНО для GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  },
  server: {
    port: 3000,
    host: true
  }
})