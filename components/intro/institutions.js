import SectionTitle from './section-title.js'

export default ({ vcs }) => (
  <div id='funds' className='vcs'>
    <div className='content-wrapper'>
      <SectionTitle>合作机构</SectionTitle>
      <div className='logos'>
        { vcs.map(vc => <img key={vc.icon} src={vc.icon} />) }
      </div>
    </div>
    <style jsx>{`
      #funds {
        padding-top: 3rem;
        margin-top: -3rem;
      }
      .content-wrapper {
        border-top: 1px solid #DDD;
        text-align: center;
      }
      img {
        height: 140px;
        width: 220px;
        margin: 1rem;
      }

      @media (max-width: 600px) {
        img {
          width: 157px;
          height: 100px;
        }
      }
    `}</style>
  </div>
)
