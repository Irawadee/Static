import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // make vite output the built - project to build folder
  build: {
    outDir: "build", // Specify the output directory here
  },
});
