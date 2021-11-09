import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh()
  ],
  base: '/vite-react-resume-poc/',
  build: {
    chunkSizeWarningLimit: 700
  },
  server: {
    fs: {
      allow: [
        '/vite-react-resume-poc/',
        '..'
      ]
    }
  }
})
