import React from 'react'
import ReactGA from 'react-ga'

// function initGA () {
//   window.dataLayer = window.dataLayer || []
//   function gtag () {
//     window.dataLayer.push(arguments)
//   }
//   gtag('js', new Date())
//
//   gtag('config', 'UA-111657353-1')
// }

function initBT () {
  window._hmt = window._hmt || []
}

function initGrowingIO () {
  window._vds = window._vds || []
  window._vds.push(['setAccountId', '8ea566982832d0c8'])
}

export default class extends React.Component {
  componentDidMount () {
    ReactGA.initialize('UA-111657353-1')
    // initGA()
    initBT()
    initGrowingIO()
  }
  render () {
    return (
      <footer>
        <div className='content-wrapper'>
          © 2017 HiCTO
          <div className='footer-right' />
        </div>
        <style jsx>{`
          footer {
            text-align: center;
          }
        `}</style>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async
          src='https://www.googletagmanager.com/gtag/js?id=UA-111657353-1' />
        <script async
          src='https://hm.baidu.com/hm.js?63148d26d2c8b6f82ac697c9d24b2cd4' />
        <script async
          src='https://assets.growingio.com/vds.js' />
      </footer>
    )
  }
}
