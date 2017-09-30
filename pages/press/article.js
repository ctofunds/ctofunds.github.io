// import axios from 'axios'
import snarkdown from 'snarkdown'
import PageWrapper from '../../components/page-wrapper.js'
import Header from '../../components/header.js'

const Article = ({title, content}) => {
  const articleHTML = snarkdown(content || '__content__')
  return (
    <PageWrapper>
      <Header />
      <div className='article'>
        <h1>{title || '__TITLE__'}</h1>
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

Article.getInitialProps = async ({ query }) => {
  const article = { title: 'eiyo', content: 'heiyo', id: query.id }
  return article
}

export default Article
