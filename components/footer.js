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
  window._hmt = window._hmt || [];
  (function () {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?63148d26d2c8b6f82ac697c9d24b2cd4'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

export default class extends React.Component {
  componentDidMount () {
    ReactGA.initialize('UA-111657353-1')
    // initGA()
    initBT()
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
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-111657353-1'
        />
      </footer>
    )
  }
}
