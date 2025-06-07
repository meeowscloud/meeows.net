import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app/",
  css: ["~/styles/globals.css"],
  sourcemap: true,
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon"],

  fonts: {
    families: [{ name: "Public Sans", provider: "google" }],
  },

  vite: { plugins: [tailwindcss()] },
  compatibilityDate: "2025-05-15",
});
