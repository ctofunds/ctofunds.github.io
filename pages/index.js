import React from 'react'
import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import IntroHero from '../components/intro/hero.js'
import IntroTeam from '../components/intro/team.js'
import IntroClientStartups from '../components/intro/client-startups.js'
import IntroClientDD from '../components/intro/client-dd.js'

import Reviews from '../components/intro/reviews.js'

import reviews from '../libs/data-reviews.js'

export default class extends React.Component {
  state = {}
  componentDidMount () {
    window.addEventListener('scroll', this.scrollHandler)
  }
  scrollHandler = () => {
    this.setState({
      showStartupIcon: true
    })
    window.removeEventListener('scroll', this.scrollHandler)
  }
  render () {
    return (
      <PageWrapper>
        <Header />

        <IntroHero />
        <IntroTeam />
        <IntroClientStartups showIcon={this.state.showStartupIcon} />
        <IntroClientDD />

        <Reviews reviews={reviews} />

        <Footer />

        <style jsx global>{`
          .body-wrapper {
            height: 100%
          }
        `}</style>
      </PageWrapper>
    )
  }
}
