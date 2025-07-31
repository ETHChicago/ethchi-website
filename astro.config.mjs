// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Since you have custom global styles
    }),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
