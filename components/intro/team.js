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
        <div className='reviews'>
          { partners.map(p => <PartnerCard {...p} />) }
        </div>
      </div>
      <style jsx>{`
        .reviews {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
