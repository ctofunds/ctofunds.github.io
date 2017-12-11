/**
 * Fetch 'news/xxx.md' & Write to `libs/news.json`
 */

const fs = require('fs')
const path = require('path')
const globby = require('globby')
const matter = require('gray-matter')

const sourceDir = path.resolve(__dirname, '../static/news')
const targetFile = path.resolve(__dirname, '../libs/news.json')

const list = globby
  .sync(sourceDir + '/**/*.md')
  .map(file => {
    const { data } = matter.read(file, {excerpt: false})
    const id = path.parse(file).name
    return {
      id,
      ...data
    }
  })

fs.writeFileSync(targetFile, JSON.stringify(list, null, 2))

module.exports = list
