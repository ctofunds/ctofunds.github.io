const startups = require('../libs/startups.json')

export default () => {
  return (
    <section id='our-clients'>
      <div className='content-wrapper'>
        <div className='section-title'>他们已经在使用 HiCTO 的服务</div>
        <div className='clients'>
          { startups.map(st => <Startup meta={st} />) }
        </div>
      </div>
    </section>
  )
}

const Startup = ({meta}) => {
  const [name, icon, desc, intro, funds] = meta
  return (
    <div className='client-card'>
      <img src={'static/clients/' + icon} alt='HiCTO Client' />
      <p>
        <em>{name} <i class='status'>{funds && `(${funds})`}</i></em>
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
          /*float: right;*/
          margin-left: 0.3rem;
        }

        .client-card p {
          margin-left: 80px;
          line-height: 24px;
        }
      `}</style>
    </div>
  )
}
