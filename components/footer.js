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
            上海市长宁区长宁路 1027 号兆丰广场 35 楼<br />
            上海上马石网络科技有限公司<br />
            <br />
            © 2015 – 2018, HiCTO
          </div>
          <div className='right'>
            <b>联系我们</b>
            <a href='mailto:contact@ctofunds.com'>contact@ctofunds.com</a>
          </div>
        </div>
        <style jsx>{`
          footer {
            padding: 42px 2rem;
            line-height: 30px;
            font-size: 15px;
            background-color: #04304C;
            color: #DDD;
          }
          .content-wrapper {
            display: grid;
            grid-template-columns: 200px 1fr 1fr;
          }
          .logo {
            height: 25px;
            margin: 10px 2px 0;
          }
          .right {
            text-align: right
          }
          .right b {
            display: block;
            font-weight: normal;
          }
          .right a {
            font-size: 22px;
            font-weight: 200;
            letter-spacing: 1px;
            text-decoration: none !important;
          }

          @media (max-width: 900px) {
            .content-wrapper {
              display: flex;
              flex-direction: column;
            }
            .center {
              margin: 2rem 0;
            }
            .right {
              margin-top: 2rem;
              text-align: left;
            }
          }
        `}</style>
      </footer>
    )
  }
}
