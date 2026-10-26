import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite'

export default defineConfig({
  // Set by the Pages workflow; '/' for local work and for a user site.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), imagetools()],
})
