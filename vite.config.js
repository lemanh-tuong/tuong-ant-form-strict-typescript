/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },

  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react(), tsconfigPaths()],
  resolve: {
    preserveSymlinks: true,
  },
});
