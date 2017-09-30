/**
 * Write `news.json` to `libs/news.json`
 */

const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('gray-matter')

const dir = path.resolve(__dirname, '../static/news')
const tar = path.resolve(__dirname, '../libs/news.json')

const list = globby
  .sync(dir + '/**/*.md')
  .map(file => {
    const news = matter(fs.readFileSync(file, 'utf8'))
    news.file = path.relative(dir, file)
    return news
  })

fs.writeFileSync(tar, JSON.stringify(list, null, 2))

module.exports = list
