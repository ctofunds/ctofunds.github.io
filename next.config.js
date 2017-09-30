const path = require('path')
const news = require('./tools/news-gen.js')

module.exports = {
  exportPathMap: function () {
    const map = {
      '/': { page: '/' },
      '/press': { page: '/press' }
    }

    return news.reduce((mapping, current) => {
      const name = path.parse(current.file).name
      mapping['/press/aritcle/' + name] = {
        page: '/press/article',
        query: current
      }
      return mapping
    }, map)
  }
}
