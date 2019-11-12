const path = require('path');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // process.env.npm_package_name || 
    title: 'Beer',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // https://www.cnblogs.com/bgwhite/p/9403285.html
  // https://zh.nuxtjs.org/api/configuration-router#base
  router: {
    // 相对路径打包
    base: process.env.NODE_ENV==='production'&&process.env.BASE?process.env.BASE:'/'
  },
  generate:{
    dir:'docs'
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'reset-css/reset.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global',
    '~/plugins/axios',
    '~/plugins/global-components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    // 使用bootstrap-vue
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  //https://axios.nuxtjs.org/setup
  axios: {
    // proxyHeaders: false
    retry: {retries: 3},
    proxy: process.env.NODE_ENV==='production'?false:true,
    baseURL:process.env.NODE_ENV==='production'&&process.env.BASE?'http://47.244.111.211:3303':''
  },
  proxy: {
    '/api': 'http://47.244.111.211:3303'
  },
  styleResources: {
    // your settings here
    sass: [],
    scss: ['./assets/style/_global.scss'],
    less: [],
    stylus: []
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@pages'] = path.resolve(__dirname, 'pages');
      config.resolve.alias['@assets'] = path.resolve(__dirname, 'assets');
      config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
      config.resolve.alias['@images'] = path.resolve(__dirname, 'assets', 'images');
    }
  },
  serverMiddleware: [
    // {path:'/api/auth', handler:'~/api/auth'}
  ]
}
