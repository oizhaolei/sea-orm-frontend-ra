import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ra",
  server: {
    port: 8085,
  },
  plugins: [react()],
  build: {
    outDir: "../sea-orm-pro/assets/ra/",
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
  },
});
