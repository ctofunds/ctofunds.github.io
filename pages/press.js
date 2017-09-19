import axios from 'axios'
import snarkdown from 'snarkdown'
import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'

const Press = ({content, title}) => {
  const articleHTML = snarkdown(content || '__content__')
  return (
    <PageWrapper>
      <Header />
      <div className='content-wrapper'>
        <h1>{title || '__TITLE__'}</h1>
        <div dangerouslySetInnerHTML={{__html: articleHTML}} />
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
  const { content, data } = query
  const title = data && data.title

  return { content, title }
}

export default Press
