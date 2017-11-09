const startups = require('../../libs/startups.json')

export default ({showIcon}) => {
  return (
    <section id='our-clients'>
      <div className='content-wrapper'>
        <div className='section-title'>他们已经在使用 HiCTO 的服务</div>
        <div className='clients'>
          { startups.map(st => {
            return <Startup key={st[0]} meta={st} showIcon={showIcon} />
          }) }
        </div>
      </div>
      <style jsx>{`
        #our-clients {
          padding: 1px 0;
          text-align: center;
        }

        .clients {
          padding-bottom: 8rem;
          text-align: center;
        }

        @media (max-width: 500px) {
          .clients {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}

const Startup = ({meta, showIcon}) => {
  const [name, icon, desc, intro, funds] = meta
  return (
    <div className='client-card'>
      {
        showIcon && <img src={'static/clients/' + icon} alt='HiCTO Client' />
      }
      <p>
        <em>{name} <i className='status'>{funds && `(${funds})`}</i></em>
        {desc} <br />
        {intro}
      </p>
      <style jsx>{`
        .client-card {
          width: 350px;
          display: inline-block;
          margin: 2rem 4rem;
          text-align: left;
          vertical-align: top;
        }

        .client-card img {
          width: 60px;
          float: left;
          margin: 1.2em 0;
          border-radius: 10px;
        }

        .client-card em {
          display: block;
          font-weight: bold;
          font-style: normal;
          margin-bottom: 0.2em;
        }

        .client-card .status {
          color: #AAA;
          font-weight: normal;
          font-style: normal;
          margin-left: 0.3rem;
        }

        .client-card p {
          margin-left: 80px;
          line-height: 24px;
        }

        @media (max-width: 500px) {
          .client-card {
            width: auto;
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
