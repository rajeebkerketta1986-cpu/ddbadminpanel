import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'apps/admin',
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  build: {
    outDir: path.resolve('dist-admin'),
    emptyOutDir: true,
  },
});
