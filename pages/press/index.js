import Link from 'next/link'
import PageWrapper from '../../components/page-wrapper.js'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import format from 'date-fns/format'

const newsList = require('../../libs/news.json')

const PressIndex = () => {
  return (
    <PageWrapper>
      <Header />
      <div className='wrapper'>
        <h1>媒体新闻</h1>
        {newsList.map(news => {
          return (
            <li key={news.id}>
              <span>{format(news.date, 'YYYY.MM.DD')}</span>
              <Link
                href={'/press/article?id=' + news.id}
                as={'/press/article/003'}>
                <a>{news.title}</a>
              </Link>
            </li>
          )
        })}
      </div>
      <Footer />
      <style jsx>{`
        .wrapper {
          box-sizing: border-box;
          padding: 78px 1rem;
          max-width: 600px;
          margin: 0 auto;
          min-height: calc(100vh - 85px);
        }
        h1 {
          text-align: center;
          margin: 3em 1rem;
        }
        li {
          font-size: 1.2rem;
          list-style: none;
          padding: 1rem 0;
        }
        li span {
          padding-right: 1rem;
          font-family: Menlo, Consolas, monospace;
          font-weight: 300;
          color: #CCC;
        }

        @media (max-width: 500px) {
          li span {
            display: block;
          }
        }
      `}</style>
    </PageWrapper>
  )
}

export default PressIndex
