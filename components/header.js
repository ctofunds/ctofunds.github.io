import React from 'react'
import Logo from './logo.js'

export default class Header extends React.Component {
  constructor () {
    super()
    this.onWindowScroll = this.onWindowScroll.bind(this)
  }
  onWindowScroll () {
    let opacity = window.scrollY / 400 + 0.6
    opacity = opacity > 1 ? 1 : opacity
    this.headerEl.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')'
  }
  componentDidMount () {
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
            <Logo />HiCTO
            <span className='slogan'>技术加速梦想</span>
          </div>
          <div className='nav'>
            <a href='/#our-team'>关于我们</a>
            <a href='/#our-clients'>已服务企业</a>
            <a href='/#fund-clients'>已服务基金</a>
            <a href='/press'>媒体新闻</a>
            <a href='/#contact-us'>联系我们</a>
          </div>
        </div>
      </header>
    )
  }
}
