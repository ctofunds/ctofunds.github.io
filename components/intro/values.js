import SectionTitle from './section-title.js'

export default () => (
  <section id='values'>
    <div className='content-wrapper'>
      <SectionTitle style={{ textAlign: 'left' }}>
        为创业者赋能技术<br />加速创业梦想
      </SectionTitle>
      <div className='value'>降低技术风险<br />提高研发效率</div>
      <div className='value'>培养骨干团队<br />成就业务成长</div>
    </div>
    <style jsx>{`
      #values {
        padding-top: 76px;
        margin-top: -76px;
      }
      .content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 1.5em;
      }
      .value {
        font-size: 40px;
        font-weight: 100;
        line-height: 1.4em;
        margin-left: 6rem;
      }

      @media (max-width: 1000px) {
        .content-wrapper {
          flex-direction: column;
          padding-bottom: 6rem;
        }
        .value {
          margin-left: 0;
        }
      }
    `}</style>
  </section>
)
