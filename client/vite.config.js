import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // Ensure modern syntax support
    },
  },
  build: {
    target: "es2020", // Force a lower transpilation target if necessary
  },
});
