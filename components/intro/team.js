import SectionTitle from './section-title.js'

export default ({ partners }) => {
  return (
    <section id='team'>
      <div className='content-wrapper'>
        <SectionTitle>核心团队</SectionTitle>
        <div className='partners'>
          { partners.map(p => <PartnerCard key={p.icon} {...p} />) }
        </div>
        <p className='pros'>
          此外，HiCTO 还有一批全职技术专家，他们曾在腾讯、阿里、百度、滴滴、EMC、SAP
          等知名公司担任研发总监或高端架构师。这些技术专家擅长于前端、后端、算法、数据、
          客户端、区块链等各个技术领域，他们主要负责赋能项目的落地实施过程把关。
        </p>
      </div>
      <style jsx>{`
        #team {
          padding: 3rem 0;
          margin-top: -3rem;
        }
        .content-wrapper {
          border-top: 1px solid #DDD;
        }
        .partners {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
        }
        .pros {
          font-size: 20px;
          line-height: 1.7em;
          margin: 3rem auto;
          max-width: 640px;
          padding: 2rem;
        }

        @media (max-width: 1030px) {
          .partners {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

const PartnerCard = ({ icon, name, title, content }) => {
  return (
    <div className='partner-card'>
      <img className='icon' src={icon} alt={name} />
      <h5 className='name'>{name}</h5>
      <div className='title'>{title}</div>
      <p className='content'>{content}</p>
      <style jsx>{`
        .partner-card {
          display: inline-block;
          text-align: center;
          max-width: 300px;
          min-width: 280px;
          min-height: 420px;
          margin: 1.5rem;
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

        @media (min-width: 600px) {
          .partner-card:nth-child(1) {
            max-width: 370px;
            padding: 0px 100px 0 300px;
            position: relative;
            text-align: left;
            min-height: 260px;
          }
          .partner-card:nth-child(1) .icon {
            position: absolute;
            top: 0;
            left: 50px;
          }
          .partner-card:nth-child(1) .content {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}
