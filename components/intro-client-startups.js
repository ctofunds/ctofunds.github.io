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
        <em>{name} <i class='status'>({funds})</i></em>
        {desc} <br />
        {intro}
      </p>
    </div>
  )
}
