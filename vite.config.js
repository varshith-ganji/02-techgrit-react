import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/02-techgrit-react/", // Ensure relative paths for assets
  build: {
    outDir: "docs", // Change the build output directory to 'docs'
  },
});
