import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.jsx', // O 'src/index.js' si no usas TypeScript
      name: 'ina-health-design',
    },
    rollupOptions: {
      // Asegúrate de que los paquetes no se incluyan en el bundle final
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
