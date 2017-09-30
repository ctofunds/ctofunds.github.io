// import axios from 'axios'
import PageWrapper from '../../components/page-wrapper.js'
import Header from '../../components/header.js'

const Press = ({ list }) => {
  return (
    <PageWrapper>
      <Header />
      <div className='wrapper'>
        {list.map(article => {
          return (
            <dl key={article.title}>
              <dt>{article.title}</dt>
              <dd>{article.content}</dd>
            </dl>
          )
        })}
      </div>
      <style jsx>{`
        .wrapper {
          padding: 85px 0;
        }
      `}</style>
    </PageWrapper>
  )
}

Press.getInitialProps = async ({ req }) => {
  const list = [{ title: 'eiyo', content: 'heiyo' }]
  return { list }
}

export default Press
