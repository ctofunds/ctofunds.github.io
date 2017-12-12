const fs = require('fs')
const path = require('path')
const news = require('./libs/news.json')
const matter = require('front-matter')

module.exports = {
  exportPathMap: function () {
    const map = {
      '/': { page: '/' },
      '/press': { page: '/press' }
    }

    return news.reduce((mapping, current) => {
      const name = path.parse(current.file).name
      const { body } = matter(fs.readFileSync(current.file, 'utf8'))

      mapping['/press/article/' + name] = {
        page: '/press/article',
        query: {
          ...current,
          content: body
        }
      }
      return mapping
    }, map)
  }
}
