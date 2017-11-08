import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import IntroHero from '../components/intro/hero.js'
import IntroTeam from '../components/intro/team.js'
import IntroClientStartups from '../components/intro/client-startups.js'
import IntroClientDD from '../components/intro/client-dd.js'

export default () => {
  return (
    <PageWrapper>
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

      <Footer />

      <style jsx global>{`
        .body-wrapper {
          height: 100%
        }

        .section-title {
          font-size: 2rem;
          margin: 10rem 1.5rem 7rem 1.5rem;
          text-align: center;
        }

        @media (max-width: 500px) {
          .section-title {
            margin: 6rem 1rem;
          }
        }
      `}</style>
    </PageWrapper>
  )
}
