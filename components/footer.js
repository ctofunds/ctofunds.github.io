import React from 'react'

export default class extends React.Component {
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
      </footer>
    )
  }
}
