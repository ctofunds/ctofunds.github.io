import axios from 'axios'
import snarkdown from 'snarkdown'
import PageWrapper from '../../components/page-wrapper.js'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import format from 'date-fns/format'

const newsList = require('../../libs/news.json')

const Article = ({ date, title, content }) => {
  const articleHTML = snarkdown(content || '__content__')
  return (
    <PageWrapper>
      <Header />
      <div className='article'>
        <span>{format(date, 'YYYY.MM.DD')}</span>
        <h1>{title || '__TITLE__'}</h1>
        <div className='t' dangerouslySetInnerHTML={{ __html: articleHTML }} />
      </div>
      <Footer />
      <style jsx>{`
        .article {
          margin: 165px auto;
          max-width: 650px;
        }
        span {
          display: block;
          text-align: center;
        }
        h1 {
          text-align: center;
          margin: 1rem;
          line-height: 1.4em;
        }
        .t {
          margin: 3rem 1rem;
          font-size: 1.2rem;
          line-height: 2em;
        }
      `}</style>
    </PageWrapper>
  )
}

Article.getInitialProps = async ({ req, query }) => {
  const news = newsList.find(n => n.id === query.id) || {}
  const props = {
    id: query.id,
    date: query.date || news.date || '--',
    title: query.title || news.title || '404',
    content: query.content || news.content
  }

  if (!props.content) {
    const host = req ? 'http://localhost:3000' : ''
    const markdownSource = `${host}/static/news/${query.id}.md`
    props.content = await axios.get(markdownSource).then(res => res.data)
  }

  return props
}

export default Article
