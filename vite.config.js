import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard build — this is what Vercel runs.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
