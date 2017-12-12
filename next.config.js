const fs = require('fs')
const path = require('path')
const news = require('./libs/news.json')

module.exports = {
  exportPathMap: function () {
    const map = {
      '/': { page: '/' },
      '/press': { page: '/press' }
    }

    return news.reduce((maps, n) => {
      const name = path.parse(n.file).name
      const content = fs.readFileSync(n.file, 'utf8')

      maps['/press/article/' + name] = {
        page: '/press/article',
        query: {
          ...n,
          content
        }
      }
      return maps
    }, map)
  }
}
