import React from 'react'

export default class Header extends React.Component {
  constructor () {
    super()
    this.onWindowScroll = this.onWindowScroll.bind(this)
  }
  onWindowScroll () {
    let opacity = window.scrollY / 500
    opacity = opacity > 0.9 ? 0.9 : opacity
    this.headerEl.style.backgroundColor = 'rgba(0,30,60,' + opacity + ')'
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
            <a href='/#hero'>关于 HiCTO</a>
            <a href='/#team'>团队</a>
            <a href='/#cases'>案例</a>
            <a href='/#funds'>合作</a>
            <a href='mailto:contact@ctofunds.com'>联系我们</a>
          </div>
        </div>
        <style jsx>{`
          header {
            font-size: 1.2rem;
            line-height: 76px;
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
            top: 2px;
            height: 20px;
          }

          .nav {
            float: right;
            font-weight: 200;
          }

          .nav a {
            font-size: 1rem;
            margin-left: 2.5rem;
            opacity: 0.5;
          }
          .nav a:hover {
            opacity: 1;
          }

          @media (max-width: 900px) {
            header { position: absolute; text-align: center }
            .nav { display: none }
            .logo img { top: 4px }
          }
        `}</style>
      </header>
    )
  }
}
