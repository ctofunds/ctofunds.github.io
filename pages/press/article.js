import axios from 'axios'
import snarkdown from 'snarkdown'
import PageWrapper from '../../components/page-wrapper.js'
import PressFooter from '../../components/press-footer.js'
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
        <span>{format(date, 'YYYY.MM.DD')} <i>HiCTO PRESS RELEASE</i></span>
        <h1>{title || '__TITLE__'}</h1>
        <div
          className='content'
          dangerouslySetInnerHTML={{ __html: articleHTML }} />
        <PressFooter />
      </div>
      <Footer />
      <style jsx>{`
        .article {
          margin: 125px auto;
          padding: 1rem;
          max-width: 750px;
        }
        span {
          display: block;
          text-align: left;
          border-bottom: 1px solid #CCC;
          color: #999;
          font-style: italic;
          padding: 0 2px;
          margin-bottom: 6rem;
        }
        i {
          float: right;
        }
        h1 {
          text-align: center;
          font-size: 2em;
          margin: 1.5em 1rem;
          line-height: 1.4em;
        }
      `}</style>
      <style global jsx>{`
        .article {
          font-size: 1.2rem;
          line-height: 2em;
          text-align: justify;
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
