import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mayanksolan.github.io/portfolio/",
  base: "/portfolio",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
