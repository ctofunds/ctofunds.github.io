import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'

const Press = ({content}) => {
  return (
    <PageWrapper>
      <Header />
      <div>{content}</div>
      <style jsx>{`
        div {
          padding: 85px 0;
        }
      `}</style>
    </PageWrapper>
  )
}

Press.getInitialProps = async ({query}) => {
  return { content: query.content || '# news' }
}

export default Press
