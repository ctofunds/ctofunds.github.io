import SectionTitle from './section-title.js'

const ReviewCard = ({ icon, name, title, content }) => {
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
          height: 400px;
          margin: 2rem;
        }
        .icon {
          border-radius: 50%;
          height: 95px;
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
          text-align: justify;
          color: #666;
        }
      `}</style>
    </div>
  )
}

export default ({ reviews }) => {
  return (
    <section id='reviews'>
      <div className='content-wrapper'>
        <SectionTitle>客户评价</SectionTitle>
        <div className='reviews'>
          { reviews.map(review => <ReviewCard {...review} />) }
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
