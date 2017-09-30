import Head from 'next/head'

export default ({ children, className, ...restProps }) => {
  return (
    <div className={'body-wrapper ' + className} {...restProps}>
      <Head>
        <title>HiCTO</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes'
        />
        <link rel='stylesheet' href='/static/index.css' media='screen' />
      </Head>
      {children}
    </div>
  )
}
