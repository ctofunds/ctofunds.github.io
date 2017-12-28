import Head from 'next/head'

export default ({ children, className, ...restProps }) => {
  return (
    <div className={'body-wrapper ' + className} {...restProps}>
      <Head>
        <title>HiCTO - 创业者的合伙人 | 技术风投</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes'
        />
        <link rel='stylesheet' href='/static/index.css' media='screen' />
        <meta name='baidu-site-verification' content='ugaSQwguyE' />
      </Head>
      {children}
    </div>
  )
}
