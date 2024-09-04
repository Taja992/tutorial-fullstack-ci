/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5088",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          markdown: ["react-markdown", "react-syntax-highlighter"],
        },
      },
    },
  },
  test: {
    name: "Unit tests",
    dir: "src/",
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test.setup.ts"],
  },
});