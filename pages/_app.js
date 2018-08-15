import App, {Container} from 'next/app'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  componentDidMount () {
    // Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'UA-111657353-1')

    // Baidu Tongji
    window._hmt = window._hmt || []

    // GrowingIO
    window._vds = window._vds || []
    window._vds.push(['setAccountId', '8ea566982832d0c8'])

    // Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Component {...pageProps} />
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-111657353-1' />
        <script async src='https://hm.baidu.com/hm.js?63148d26d2c8b6f82ac697c9d24b2cd4' />
        <script async src='https://assets.growingio.com/vds.js' />
        <style jsx global>{`
          html, body {
            height: 100%;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
            line-height: 1.8em;
            color: #222;
            background-color: #FFF;
            scroll-behavior: smooth;
          }

          a { text-decoration: none; color: #FFF; }

          .content-wrapper {
            max-width: 1100px;
            margin: 0 auto;
          }

          @media (min-width: 1600px) {
            html {
              font-size: 16px
            }

            .content-wrapper {
              width: 1200px;
            }
          }

          @media (max-width: 900px) {
            html { font-size: 13px }
            body { color: #333; }
            .content-wrapper { width: inherit; }
          }

          @media (max-width: 450px) {
            html, body {
              font-size: 12px;
            }
          }
        `}</style>
      </Container>
    )
  }
}
