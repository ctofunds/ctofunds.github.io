import React from 'react'

export default class Header extends React.Component {
  constructor () {
    super()
    this.onWindowScroll = this.onWindowScroll.bind(this)
  }
  onWindowScroll () {
    let opacity = window.scrollY / 500
    opacity = opacity > 0.9 ? 0.9 : opacity
    this.headerEl.style.backgroundColor = 'rgba(0,30,50,' + opacity + ')'
  }
  componentDidMount () {
    this.onWindowScroll()
    window.addEventListener('scroll', this.onWindowScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.onWindowScroll)
  }
  render () {
    return (
      <header ref={elem => (this.headerEl = elem)}>
        <div className='content-wrapper'>
          <div className='logo'>
            <img src="/static/logo@2x.png" />
          </div>
          <div className='nav'>
            <a href='/#our-team'>关于我们</a>
            <a href='/#our-clients'>已服务企业</a>
            <a href='/#fund-clients'>已服务基金</a>
            <a href='/press'>媒体新闻</a>
            <a href='/#contact-us'>联系我们</a>
          </div>
        </div>
        <style jsx>{`
          header {
            font-size: 1.2rem;
            line-height: 90px;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 999;
          }

          .logo {
            display: inline-block;
            font-weight: bold;
          }

          .logo img {
            position: relative;
            top: 3px;
            height: 20px;
            margin-right: 0.3rem;
          }

          .nav {
            float: right;
            font-weight: 200;
          }

          .nav a {
            font-size: 1rem;
            margin-left: 2.5rem;
          }
        `}</style>
      </header>
    )
  }
}
