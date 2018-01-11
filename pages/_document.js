import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <style>{`
            body { margin: 0 }
          `}</style>
          <script>{`
          `}
          </script>
        </Head>
        <body className='custom_class'>
          {this.props.customValue}
          <Main />
          <NextScript />

          <script async
            src='https://www.googletagmanager.com/gtag/js?id=UA-111657353-1' />
          <script async
            src='https://hm.baidu.com/hm.js?63148d26d2c8b6f82ac697c9d24b2cd4' />
          <script async
            src='https://assets.growingio.com/vds.js' />
          <script>{`
            // Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'UA-111657353-1')

            // Baidu Tongji
            window._hmt = window._hmt || []

            // GrowingIO
            window._vds = window._vds || []
            window._vds.push(['setAccountId', '8ea566982832d0c8'])
          `}</script>
        </body>
      </html>
    )
  }
}
