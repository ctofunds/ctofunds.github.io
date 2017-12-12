import axios from 'axios'
import snarkdown from 'snarkdown'
import PageWrapper from '../../components/page-wrapper.js'
import Header from '../../components/header.js'

const newsList = require('../../libs/news.json')

const Article = ({date, title, content}) => {
  const articleHTML = snarkdown(content || '__content__')
  return (
    <PageWrapper>
      <Header />
      <div className='article'>
        <h1>{title || '__TITLE__'}</h1>
        <span>{date}</span>
        <div dangerouslySetInnerHTML={{ __html: articleHTML }} />
      </div>
      <style jsx>{`
        .article {
          margin: 165px auto;
          max-width: 850px;
        }
        h1 {
          text-align: center;
          margin: 3em 0;
        }
      `}</style>
    </PageWrapper>
  )
}

Article.getInitialProps = async ({ req, query }) => {
  const meta = {
    id: query.id,
    date: query.date || '--',
    title: query.title || '404',
    content: query.content || ''
  }

  if (!req) {
    const { data } = await axios.get(`/static/news/${query.id}.md`)
    meta.content = data.split('---').slice(2).join('')

    const news = newsList.find(n => n.id === query.id) || {}
    meta.date = news.date
    meta.title = news.title

    return meta
  }

  return meta
}

export default Article
