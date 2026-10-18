import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, "azure-demo"),
  plugins: [react()],
  resolve: {
    alias: { "@": projectRoot },
  },
  css: {
    postcss: { plugins: [tailwindcss()] },
  },
  base: "/",
  build: {
    outDir: resolve(projectRoot, "dist-azure"),
    emptyOutDir: true,
  },
});
