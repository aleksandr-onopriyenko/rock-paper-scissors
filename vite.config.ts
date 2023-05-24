import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rock-paper-scissors/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@style": path.resolve(__dirname, "./src/assets/style"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: "src/assets", dest: "dist/assets" }],
        }),
      ],
    },
  },
});
