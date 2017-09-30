const path = require('path')
const news = require('./libs/news-list.js')

module.exports = {
  exportPathMap: function () {
    const map = {
      '/': { page: '/' },
      '/press': { page: '/press' }
    }

    return news.reduce((mapping, current) => {
      const name = path.parse(current.file).name
      mapping['/press/' + name] = { page: '/press', query: current }
      return mapping
    }, map)
  }
}
