import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default {
  server: {
    host: '0.0.0.0',   // Listen on all network interfaces
    port: 5173,        // Optional: You can change the port if needed
    strictPort: true,  // Fail if the port is already in use
  },
};
