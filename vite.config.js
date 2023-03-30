/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    sourcemap: true,
  },
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin(), visualizer()],
  resolve: {
    preserveSymlinks: true,
  },
});
