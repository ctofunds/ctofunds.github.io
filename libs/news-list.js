// Meant to be used on Server Side ONLY

const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('gray-matter')

const dir = path.resolve(__dirname, '../static/news')

const list = globby
  .sync(dir + '/**/*.md')
  .map(file => {
    const news = matter(fs.readFileSync(file, 'utf8'))
    news.file = path.relative(dir, file)
    return news
  })

module.exports = list
