module.exports = {
    devServer: {
      proxy: {
        '^/server': {
          target: 'http://localhost:3000',
          changeOrigin: true
        },
      }
    }
  }