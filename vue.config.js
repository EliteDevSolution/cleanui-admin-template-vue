module.exports = {
  publicPath: './',
  // configureWebpack: {
  //   optimization: {
  //     splitChunks: {
  //       minSize: 1 * 100 * 1024,
  //       maxSize: 1 * 1000 * 1024,
  //     }
  //   }
  // },
  pwa: {
    iconPaths: {
      favicon32: './favicon.png',
      favicon16: './favicon.png',
      appleTouchIcon: './favicon.png',
      maskIcon: './favicon.png',
      msTileImage: './favicon.png',
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
