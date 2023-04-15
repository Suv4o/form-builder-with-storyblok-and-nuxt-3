// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@storyblok/nuxt"],
    storyblok: {
        accessToken: process.env.STORYBLOK_API_TOKEN,
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
