import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@/": path.join(__dirname, "./src/"),
    },
  },
});
