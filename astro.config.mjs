// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://naasr-nextgen.github.io/",
  base: "/2026",
  output: "static",
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
