import snarkdown from 'snarkdown'

const Article = ({content, title}) => {
  const articleHTML = snarkdown(content || '__content__')
  return (
    <div>
      <h1>{title || '__TITLE__'}</h1>
      <div dangerouslySetInnerHTML={{__html: articleHTML}} />
      <style jsx>{`
        h1 {
          text-align: center;
          margin: 1em 0;
        }
      `}</style>
    </div>
  )
}

export default Article
