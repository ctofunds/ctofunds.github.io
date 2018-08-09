import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <footer>
        <div className='content-wrapper'>
          <div className='left'>
            <img className='logo' src='/static/logo@2x.png' />
          </div>
          <div className='center'>
            上海上马石网络科技有限公司<br />
            上海市长宁区长宁路 1027 号兆丰广场 35 楼<br />
            <br />
            © 2015 – 2018, HiCTO
          </div>
          <div className='right'>
            <a href='mailto:contact@ctofunds.com'>contact@ctofunds.com</a>
          </div>
        </div>
        <style jsx>{`
          footer {
            padding: 3em 0;
            line-height: 34px;
            font-size: 16px;
          }
          .content-wrapper {
            display: grid;
            grid-template-columns: 200px 1fr 1fr;
          }
          .logo {
            height: 30px;
          }
          .center {
            color: #112;
          }
          .right {
            text-align: right
          }
          .right b {
            color: #222;
          }
          .right a {
            font-size: 24px;
            font-weight: 600;
            color: #69cbee;
            text-decoration: none !important;
          }
        `}</style>
      </footer>
    )
  }
}
