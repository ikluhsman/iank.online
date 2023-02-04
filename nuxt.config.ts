// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "iank.online",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "iank.online", name: "Ian K Online Status", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://iank.online",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Unbounded",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=DM%20Sans",
        },
      ],
    },
  },
  build: {
    transpile: ["gsap"],
  },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxtjs/color-mode", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  colorMode: {
    preference: "light",
    classPrefix: "",
  },
});
