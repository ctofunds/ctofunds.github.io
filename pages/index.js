import Head from 'next/head'
import Header from '../components/header.js'
import IntroHero from '../components/intro-hero.js'
import IntroTeam from '../components/intro-team.js'
import IntroClientStartups from '../components/intro-client-startups.js'
import IntroClientDD from '../components/intro-client-dd.js'

export default () => {
  return (
    <div className='body-wrapper'>
      <Head>
        <title>HiCTO</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=yes' />
        <link rel='stylesheet' href='static/index.css' media='screen' />
      </Head>

      <Header />

      <IntroHero />

      <IntroTeam />

      <IntroClientStartups />

      <IntroClientDD />

      <section id='contact-us'>
        <div className='content-wrapper'>
          <p>联系我们</p>
          <a href='mailto:bd@ctofunds.com'>bd@ctofunds.com</a>
        </div>
      </section>

      <footer>
        <div className='content-wrapper'>
          © 2017 HiCTO
          <div className='footer-right'>
            <a href='http://www.lagou.com/gongsi/95931.html'>加入 HiCTO</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .body-wrapper {
          height: 100%
        }
      `}</style>
    </div>
  )
}
