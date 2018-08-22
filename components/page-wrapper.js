import Head from 'next/head'
import { siteTitle, siteKeywords, siteDesc } from '../libs/constants.js'

/* eslint-disable max-len */
export default ({ children, className, ...restProps }) => {
  return (
    <div className={'body-wrapper ' + className} {...restProps}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes' />
        <meta
          name='keywords'
          content={siteKeywords} />
        <meta
          name='description'
          content={siteDesc} />
        <meta
          name='google-site-verification'
          content='pQ9vVY-1bOLgaRtNkiUXhlX49bsWIsLU8y8EIOqslg4' />
        <meta name='baidu-site-verification' content='ugaSQwguyE' />
      </Head>
      {children}
    </div>
  )
}
