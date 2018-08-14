export default () => {
  return (
    <section id='our-service'>
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
            <b>29<sup>个</sup></b>
            <span>附能项目</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        #our-service {
          min-height: 100vh;
          padding-top: 90px;
          box-sizing: border-box;
          background: url(/static/bg@2x.jpg) no-repeat center;
          background-size: cover;
          color: #FFF;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100%;
        }

        .slogan {
          min-height: 40vh;
          flex: 1;
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
          margin: 1rem;
        }

        .achievements {
          flex: 2;
          display: flex;
          flex-direction: row;
          align-items: start;
          justify-content: center;
        }

        .ach {
          margin: 5rem;
          text-align: center;
        }

        .ach b {
          font-size: 56px;
          line-height: 32px;
        }

        .ach sup {
          font-size: 14px;
          font-weight: 100;
          vertical-align: top;
          line-height: 12px;
          display: inline-block;
          width: 1px;
        }

        .ach span {
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 300;
        }

        @media (max-width: 900px) {
          .slogan h2 { font-size: 32px }
          .slogan p { font-size: 16px }
          .achievements { flex-direction: column }
        }
      `}</style>
    </section>
  )
}
