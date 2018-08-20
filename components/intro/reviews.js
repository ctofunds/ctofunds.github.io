import SectionTitle from './section-title.js'

const ReviewCard = ({ icon, name, title, content }) => {
  return (
    <div className='review-card'>
      <img className='icon' src={icon} alt={name} />
      <div className='content'>
        <p>“{content}”</p>
        <span>—— {title} {name}</span>
      </div>
      <style jsx>{`
        .review-card {
          display: inline-block;
          text-align: center;
          padding-top: 320px;
        }
        .icon {
          border-radius: 50%;
          height: 95px;
          margin: 0 2rem;
        }
        .review-card:hover .content {
          z-index: 10;
        }
        .content {
          z-index: 1;
          background-color: #FFF;
          position: absolute;
          top: -20px;
          left: 50%;
          width: 640px;
          height: 320px;
          margin-left: -320px;
          text-align: justify;
          color: #666;
          text-align: center;
          font: 22px/40px sans-serif;
          font-weight: 300;
        }
        .content span {
          color: #999;
        }
        .review-card:hover .content {
          display: block
        }

        @media (max-width: 800px) {
          .review-card {
            display: block;
            padding: 0;
            width: auto;
            overflow: hidden;
          }
          .content {
            position: relative;
            top: 0;
            width: auto;
            height: auto;
            left: 0;
            margin: 0;
            padding: 1em;
            text-align: justify;
          }
          .content span {
            display: block;
            text-align: right;
          }
          .icon {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default ({ reviews }) => {
  return (
    <section id='reviews'>
      <div className='content-wrapper'>
        <SectionTitle>赋能感受</SectionTitle>
        <div className='reviews'>
          { reviews.map(review => <ReviewCard key={review.icon} {...review} />) }
        </div>
      </div>
      <style jsx>{`
        .reviews {
          position: relative;
          text-align: center;
        }
        .content-wrapper {
          border-top: 1px solid #DDD;
          padding-bottom: 8rem;
        }
      `}</style>
    </section>
  )
}
