/**
 * Fetch 'news/xxx.md' & Write to `libs/news.json`
 */

const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('front-matter')

const sourceDir = path.resolve(__dirname, '../static/news')
const targetFile = path.resolve(__dirname, '../libs/news.json')

const list = globby
  .sync(sourceDir + '/**/*.md')
  .map(file => {
    const { attributes } = matter(fs.readFileSync(file, 'utf8'))
    const id = path.parse(file).name
    return {
      id,
      ...attributes
    }
  })

fs.writeFileSync(targetFile, JSON.stringify(list, null, 2))

module.exports = list
