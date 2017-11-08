export default () => {
  return (
    <section id='our-team'>
      <div className='content-wrapper'>
        <div className='section-title'>关于我们</div>
        <div className='team-partners'>
          <div className='partner-card'>
            <img className='partner-icon'
              src='static/avatars/icon-gsh.jpg' alt='龚世海' />
            <p className='partner-title'>创始人 / CEO</p>
            <p className='partner-name'>龚世海</p>
            <p className='partner-intro'>
              上海交通大学硕士，中欧EMBA<br />
              前大众点评网CTO<br />
              十年来帮助大众点评建立完整技术体系，从几人扩展到六百人精悍技术研发团队
            </p>
          </div>
        </div>
        <div className='team-partners'>
          <div className='partner-card'>
            <img className='partner-icon'
              src='static/avatars/icon-pxl.jpg' alt='潘晓良' />
            <p className='partner-title'>合伙人</p>
            <p className='partner-name'>潘晓良</p>
            <p className='partner-intro'>
              前百姓网CTO，联合创始人<br />
              十年从零开始打造百姓网“小而美”的技术团队<br />
              在产品运营，公司文化，人事制度等方面有着丰富的经验
            </p>
          </div>
        </div>
        <div className='team-partners'>
          <div className='partner-card'>
            <img className='partner-icon'
              src='static/avatars/icon-hx.jpg' alt='何萱' />
            <p className='partner-title'>投后合伙人</p>
            <p className='partner-name'>何萱</p>
            <p className='partner-intro'>
              前大众点评网人力资源高级经理<br />
              前1号店人力资源业务合作伙伴<br />
              全球第二大人力资源公司 Randstad 人力资源解决方案顾问<br />
              在创业企业的选、用、育、留各环节经验丰富
            </p>
          </div>
        </div>
        <div className='team-consults'>
          <div className='team-consults-title'>CTO 顾问团</div>
          <div className='consult-card'>
            <p className='partner-title'>CTO 顾问</p>
            <p className='consult-name'>叶亚明</p>
            <p className='consult-intro'>
              携程网CTO<br />
              前eBay高级技术总监<br />
              2014中国十大最有影响力CTO
            </p>
          </div>
          <div className='consult-card'>
            <p className='partner-title'>CTO 顾问</p>
            <p className='consult-name'>韩军</p>
            <p className='consult-intro'>
              前1号店CTO<br />
              前51job网CTO<br />
              2014中国十大最有影响力CTO
            </p>
          </div>
          <div className='consult-card'>
            <p className='partner-title'>CTO 顾问</p>
            <p className='consult-name'>罗剑</p>
            <p className='consult-intro'>
              前赶集网 CTO<br />
              2014中国十大最有影响力CTO
            </p>
          </div>
          <div className='consult-card'>
            <p className='partner-title'>CTO 顾问</p>
            <p className='consult-name'>陈烨</p>
            <p className='consult-intro'>
              美团大众点评高级副总裁&amp;首席数据官<br />
              前Microsoft主任科学家&amp;高级研发总监<br />
              UC Berkeley客座教授<br />
              2届KDD, 1届SIGIR最佳论文奖
            </p>
          </div>
        </div>
        <div className='team-pros'>
          公司同时汇聚一批来自 BAT 等互联网公司资深技术专家，致力于解决企业技术问题。
        </div>
      </div>
      <style jsx>{`
        #our-team {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .team-partners {
          margin: 3rem 0 0 220px;
        }

        .partner-card {
          position: relative;
          padding-left: 120px;
        }

        .partner-icon {
          position: absolute;
          top: -3px;
          left: 0;
          width: 80px;
          height: 80px;
          border-radius: 40px;
        }

        .partner-title {
          color: #AAA;
          line-height: 1em;
        }

        .partner-name {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 0;
        }

        .team-consults {
          margin: 8rem 0;
          display: flex;
          justify-content: space-around;
        }

        .team-consults-title {
          display: none;
        }

        .consult-card {
          text-align: center;
        }

        .consult-icon {
          width: 60px;
          height: 60px;
          display: none;
        }

        .consult-name {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .team-pros {
          margin: 8rem 0;
          font-size: 1.5rem;
          text-align: center;
          line-height: 1.8em;
        }

        @media (max-width: 800px) {
          .team-partners { margin: 4rem 2rem }
          .partner-card { padding-left: 7.5rem }
          .team-consults { display: block }

          .team-consults-title {
            display: block;
            border-bottom: 1px dashed #CCC;
            margin: 3rem;
            font-size: 1.3rem;
            font-weight: lighter;
            line-height: 4em;
            text-align: center;
          }

          .team-consults .partner-title {
            display: none;
          }

          .consult-card {
            margin: 5rem 0;
          }

          .team-pros {
            padding: 0 2rem;
          }
        }
      `}</style>
    </section>
  )
}
