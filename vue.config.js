module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  css: {
    loaderOptions :  {
      sass: {
        sassOptions: {
          includePaths: [
            './node_modules'
          ]  
        },
        prependData: `@import @/assets/sass/prepends.scss`
      }
    }
  },
  productionSourceMap: false
}