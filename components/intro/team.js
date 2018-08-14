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
    <section id='reviews'>
      <div className='content-wrapper'>
        <SectionTitle>核心团队</SectionTitle>
        <div className='partners'>
          { partners.map(p => <PartnerCard {...p} />) }
        </div>
        <p className='pros'>
          此外，HiCTO还有一批全职技术专家，他们曾在腾讯、阿里、百度、滴滴、EMC、SAP
          等知名公司担任研发总监或高端架构师。这些技术专家擅长于前端、后端、算法、数据、
          客户端、区块链等各个技术领域，他们主要负责赋能项目的落地实施过程把关。
        </p>
      </div>
      <style jsx>{`
        .partners {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        p {
          margin: 3rem auto;
          max-width: 640px;
          padding: 2rem;
        }
      `}</style>
    </section>
  )
}
