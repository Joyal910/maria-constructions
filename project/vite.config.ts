import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/maria-constructions/', // replace with your actual repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
