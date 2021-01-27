export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'crud-film-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href:'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [ '@/assets/scss/custom.scss' ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader',],
      }  
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://cloudinary.nuxtjs.org
    '@nuxtjs/cloudinary',
  ],

  bootstrapVue: {
    bootstrapCSS: false, 
    bootstrapVueCSS: false
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.API_KEY, 
    apiSecret: process.env.API_SECRET, 
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
