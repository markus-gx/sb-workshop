// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [],
            link: [],
        },
    },
    modules: [
        ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY }],
        '@nuxtjs/tailwindcss'
    ],
    components: [
        'components/atoms',
        'components/molecules',
        'components/organisms',
    ],
})
