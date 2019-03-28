/**
 * Fetch 'news/xxx.md' & Write to `libs/news.json`
 */

const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('../libs/hyper-matter.js')

const sourceDir = path.resolve(__dirname, '../static/news')
const targetFile = path.resolve(__dirname, '../libs/news.json')

const list = globby
  .sync(sourceDir + '/**/*.md')
  .map(file => {
    const filename = path.parse(file).name
    const attributes = matter(fs.readFileSync(file, 'utf8'))
    const staticDir = path.resolve(__dirname, '..')

    return {
      id: filename,
      ...attributes,
      file: path.relative(staticDir, file)
    }
  })
  .sort((a, b) => (b.id - a.id))

fs.writeFileSync(targetFile, JSON.stringify(list, null, 2))

module.exports = list
