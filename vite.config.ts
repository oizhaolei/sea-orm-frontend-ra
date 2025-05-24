import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8085,
  },
  plugins: [react()],
  build: {
    outDir: "../rust-axum-sqlx-redis-ws-template/assets",
    emptyOutDir: true,
  },
});
