import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This creates a local alias for the Google API
      '/api-gemini': {
        target: 'https://generativelanguage.googleapis.com',
        changeOrigin: true,
        secure: true,
        // This removes '/api-gemini' from the URL before sending it to Google
        rewrite: (path) => path.replace(/^\/api-gemini/, ''),
      },
    },
  },
})