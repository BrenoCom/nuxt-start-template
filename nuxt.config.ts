// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module"],

  $development: {
    devtools: {
      enabled: true,
    },
  },

  $production: {
    devtools: {
      enabled: false,
    },
  },

  compatibilityDate: "2024-08-05",
});
