// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: "static",
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    googleFonts: {
        families: {
            "Sour Gummy": true,
        },
    },
});
