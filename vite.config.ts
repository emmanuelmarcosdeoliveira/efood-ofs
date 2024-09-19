import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),
  ],
});
