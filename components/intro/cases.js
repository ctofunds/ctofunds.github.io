import SectionTitle from './section-title.js'

export default ({ cases }) => {
  return (
    <section id='cases'>
      <div className='content-wrapper'>
        <SectionTitle>赋能项目</SectionTitle>
        <p className='intro'>
          HiCTO作为创业者的共享技术合伙人，提供全方位可落地的技术支持。目前已成功赋能三十余个
          互联网创业项目，包括拼多多、兔博士、Hitales、辅料易、名堂、比心、名医主刀、鱼大大、
          Nonda、Carblock等优秀企业，其中60%的项目赋能期间成功获得下一轮融资。
        </p>
        <div className='cards'>
          { cases.map(c => <CaseCard key={c.icon} {...c} />) }
        </div>
      </div>
      <style jsx>{`
        #cases {
          padding-top: 60px;
          margin-top: -90px;
        }
        .intro {
          font-size: 16px;
          max-width: 660px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          top: -2rem;
          color: #666;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: center;
        }
        .content-wrapper {
          padding-bottom: 5rem;
          border-top: 1px solid #DDD;
        }
      `}</style>
    </section>
  )
}


const CaseCard = ({ icon, name, color = '#333', content }) => {
  return (
    <div className='case-card'>
      <img className='icon' src={icon} alt={name} />
      <h5 className='name'>{name}</h5>
      <div className='content' style={{background: color}}>
        <h6>{name}</h6>
        <p>{content}</p>
      </div>
      <style jsx>{`
        .case-card {
          text-align: center;
          width: 240px;
          min-height: 260px;
          margin: 1px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .icon {
          border-radius: 50%;
          height: 100px;
          margin: 1rem;
        }
        .name {
          margin: 0.2em 0;
          font-size: 18px;
          letter-spacing: 1px;
        }
        .title {
          color: #999;
        }
        .content {
          text-align: center;
          color: #666;
          white-space: pre-wrap;
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 1rem 2rem;
          border-radius: 10px;
          background-color: #555;
          color: white;
          overflow: scroll;
        }
        .content p {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.4em;
          text-align: justify;
        }
        .content h6 {
          font-size: 16px;
          letter-spacing: 1px;
          margin: 1em 0;
        }
        .case-card:hover .content {
          display: block;
        }
      `}</style>
    </div>
  )
}
