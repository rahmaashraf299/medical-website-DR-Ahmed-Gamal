import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const originalName = assetInfo.name || 'asset';
          const lastDot = originalName.lastIndexOf('.');
          const ext = lastDot !== -1 ? originalName.slice(lastDot) : '';
          const baseName = lastDot !== -1 ? originalName.slice(0, lastDot) : originalName;
          const cleanBase = baseName.replace(/[^\w-]/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
          const prefix = cleanBase.length >= 3 ? cleanBase.slice(0, 20) : 'asset';
          return `assets/${prefix}-[hash]${ext}`;
        }
      }
    }
  }
})

