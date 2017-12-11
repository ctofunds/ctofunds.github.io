import React from 'react'

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
            <svg viewBox='0 0 204 204' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path d='M203.6 163.4c0 22.2-18 40.3-40.3 40.3H40.6c-22.2 0-40.3-18-40.3-40.3V40.7C.3 18.5 18.3.4 40.6.4h122.7c22.2 0 40.3 18 40.3 40.3v122.7z' fill='#6BCAEB' />
                <path d='M119.2 119.1c.4-1.5-.1-2.7-.4-3.9-8.7-37.2 11.7-76.9 46.9-91.5 5.6-2.3 11.1-.8 14 3.8 2.8 4.5 1.9 10.1-2.1 13.5-.9.7-2 1.3-3.1 1.8-31.2 13.1-45.3 48.8-31.5 79.7 3.2 7.2 2.4 13.4-2.6 18.2-4.5 4.4-10.7 5.2-17.7 2.1-31.3-13.7-66.7.5-79.9 31.9-2.4 5.7-8.4 8.3-13.8 6-5.4-2.3-8-8.2-5.6-13.8C34.1 142 52.5 126 78.6 119.1c12.6-3.3 25.2-3.1 37.9-.4 1 .2 1.8.2 2.7.4z' fill='#FFF' />
              </g>
            </svg>
            HiCTO
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
