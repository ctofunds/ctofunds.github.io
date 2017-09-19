import Head from 'next/head'
import Header from '../components/header.js'

export default ({children}) => {
  return (
    <div className='body-wrapper'>
      <Head>
        <title>HiCTO</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=yes' />
        <link rel='stylesheet' href='/static/index.css' media='screen' />
      </Head>
      {children}
    </div>
  )
}
