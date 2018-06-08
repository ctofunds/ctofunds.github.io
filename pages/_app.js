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
      </Container>
    )
  }
}
