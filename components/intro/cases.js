import SectionTitle from './section-title.js'

const PartnerCard = ({ icon, name, title, content }) => {
  return (
    <div className='review-card'>
      <img className='icon' src={icon} alt={name} />
      <h5 className='name'>{name}</h5>
      <div className='title'>{title}</div>
      <p className='content'>{content}</p>
      <style jsx>{`
        .review-card {
          display: inline-block;
          text-align: center;
          max-width: 300px;
          min-width: 280px;
          min-height: 500px;
          margin: 2rem;
        }
        .icon {
          border-radius: 50%;
          height: 210px;
          margin-bottom: 1rem;
        }
        .name {
          margin: 0.2em 0;
          font-size: 28px;
        }
        .title {
          color: #999;
        }
        .content {
          text-align: center;
          color: #666;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  )
}

export default ({ partners }) => {
  return (
    <section id='cases'>
      <div className='content-wrapper'>
        <SectionTitle>赋能项目</SectionTitle>
        <p className='intro'>
          HiCTO作为创业者的共享技术合伙人，提供全方位可落地的技术支持。目前已成功赋能三十余个
          互联网创业项目，包括拼多多、兔博士、Hitales、辅料易、名堂、比心、名医主刀、鱼大大、
          Nonda、Carblock等优秀企业，其中60%的项目赋能期间成功获得下一轮融资。
        </p>
      </div>
      <style jsx>{`
        .intro {
          font-size: 16px;
          margin: 3rem auto;
          max-width: 640px;
          padding: 2rem;
        }
      `}</style>
    </section>
  )
}
