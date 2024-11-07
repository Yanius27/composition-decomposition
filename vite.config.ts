import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'composition-decomposition',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
