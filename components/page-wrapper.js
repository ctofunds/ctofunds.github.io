import Head from 'next/head'
import { siteTitle } from '../libs/constants.js'

export default ({ children, className, ...restProps }) => {
  return (
    <div className={'body-wrapper ' + className} {...restProps}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes' />
        <meta
          name='google-site-verification'
          content='pQ9vVY-1bOLgaRtNkiUXhlX49bsWIsLU8y8EIOqslg4' />
        <link rel='stylesheet' href='/static/index.css' media='screen' />
        <meta name='baidu-site-verification' content='ugaSQwguyE' />
      </Head>
      {children}
    </div>
  )
}
