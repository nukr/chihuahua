import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Absolute base: pages are emitted into nested dirs (e.g. /service/enterprise-loan/),
  // so asset URLs must resolve from the site root, not relative to the page.
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, '../loan-html'),
    // outDir is outside the project root, so Vite won't clear it unless asked.
    // Clean it each build to avoid accumulating stale hashed assets/pages.
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  ssgOptions: {
    // Emit each route as <route>/index.html for clean URLs.
    dirStyle: 'nested',
  },
})
