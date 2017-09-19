import axios from 'axios'
import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'
import ArticleList from '../components/article-list.js'
import Article from '../components/article.js'

const Press = ({content, title, id}) => {
  return (
    <PageWrapper>
      <Header />
      <div className='content-wrapper'>
        { !content && <ArticleList /> }
        { content && <Article title={title} content={content} /> }
      </div>
      <style jsx>{`
        .content-wrapper {
          padding: 85px 0;
        }
      `}</style>
    </PageWrapper>
  )
}

Press.getInitialProps = async ({query}) => {
  const { id, content, data } = query
  const title = data && data.title

  return { id, content, title }
}

export default Press
