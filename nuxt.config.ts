// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/supabase", "@nuxt/image"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: '/confirm',
      exclude: ["/links"]
    }
  }
});
