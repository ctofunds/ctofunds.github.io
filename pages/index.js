import React from 'react'
import PageWrapper from '../components/page-wrapper.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import IntroHero from '../components/intro/hero.js'

import Values from '../components/intro/values.js'
import Team from '../components/intro/team.js'
import Cases from '../components/intro/cases.js'
import Reviews from '../components/intro/reviews.js'
import Institutions from '../components/intro/institutions.js'

import partners from '../libs/data-partners.js'
import cases from '../libs/data-cases.js'
import reviews from '../libs/data-reviews.js'
import institutions from '../libs/data-vcs.js'

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
        <Values />
        <Team partners={partners} />
        <Cases cases={cases} />
        <Reviews reviews={reviews} />
        <Institutions vcs={institutions} />

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
