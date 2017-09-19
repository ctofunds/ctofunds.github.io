const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('gray-matter')

module.exports = {
  exportPathMap: function () {
    const map = {
      '/': { page: '/' }
    }

    return globby
      .sync('./static/news/**/*.md')
      .reduce((mapping, next) => {
        const news = matter(fs.readFileSync(next, 'utf8'))
        const name = path.parse(next).name
        mapping['/press/' + name] = { page: '/press', query: news }
        return mapping
      }, map)
  }
}
