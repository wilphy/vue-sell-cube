const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          error: 0,
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          error: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          error: 0,
          data: ratings
        })
      })
    }
  }
}
