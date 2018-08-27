import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      showNextButton: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        showNextButton: true // window.navigator.userAgent.indexOf('Trident') === -1
      })
    }, 1000)
  }

  render () {
    const { showNextButton } = this.state
    return (
      <section id='hero'>
        <div className='content-wrapper'>
          <div className='slogan'>
            <h2>中国第一共享技术合伙人</h2>
            <p>成就未来独角兽的技术赋能平台</p>
          </div>
          <div className='achievements'>
            <div className='ach'>
              <b>29<sup>个</sup></b>
              <span>赋能项目</span>
            </div>
            <div className='ach'>
              <b>60<sup>%</sup></b>
              <span>项目赋能期间获下一轮融资</span>
            </div>
            <div className='ach'>
              <b>1900<sup>亿</sup></b>
              <span>赋能项目总估值</span>
            </div>
          </div>
          <div id="next" className={showNextButton ? 'next show' : 'next'}>
            <img src="/static/ui/arrow-down.svg" />
          </div>
        </div>
        <style jsx>{`
          #hero {
            min-height: 100vh;
            padding: 76px 0;
            box-sizing: border-box;
            background: url(/static/bg.jpg) no-repeat center;
            background-size: cover;
            color: #FFF;
            background-color: #246;
            position: relative;
          }

          .content-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 100%;
          }

          .slogan {
            min-height: 40vh;
            flex: 2;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }

          .slogan h2 {
            font-size: 60px;
            line-height: 1.2em;
            margin: 0 0.5em;
          }

          .slogan p {
            font-size: 32px;
            line-height: 1.6em;
            font-weight: 100;
            margin: 2rem;
          }

          .achievements {
            flex: 2;
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: center;
          }

          .ach {
            margin: 5rem 6rem;
            text-align: center;
          }

          .ach b {
            font-size: 56px;
            line-height: 40px;
          }

          .ach sup {
            font-size: 16px;
            font-weight: 100;
            vertical-align: top;
            line-height: 16px;
            display: inline-block;
            width: 1px;
          }

          .ach span {
            display: block;
            text-align: center;
            font-size: 16px;
            font-weight: 300;
            padding: 1em;
          }

          .next {
            height: 80px;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .next img {
            height: 50px;
            opacity: 0;
            margin-top: -30px;
            transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .next.show img {
            opacity: 1;
            margin-top: 0;
          }

          @media (max-width: 900px) {
            .slogan h2 { font-size: 42px }
            .slogan p { font-size: 16px }
            .achievements { flex-direction: column; align-items: center }
            .ach { margin: 3rem }
          }

          @media (max-width: 600px) {
            #hero { background-image: url(/static/bgm@2x.jpg) }
          }
        `}</style>
      </section>
    )
  }
}
