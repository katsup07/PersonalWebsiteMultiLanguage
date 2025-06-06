require('dotenv').config(); // Load .env file variables

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Explore and Discover',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'preconnect', href: "https://fonts.googleapis.com"},
      {rel: 'preconnect', href: "https://fonts.gstatic.com"},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/static/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
   
  env: {
      apiKey: process.env.API_KEY,
      adminUsername: process.env.ADMIN_USERNAME,
    },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // transition: {
  //   name: 'fade', //CSS can be found in --> static/assets/css/global.css 
  //   mode: 'out-in'
  // }
   // Define page transition settings
   pageTransition: {
    name: 'fade',  // This name should match the CSS class for the transition
    mode: 'out-in', // Use "out-in" to first transition out the current page, then transition in the new one
  }
}
