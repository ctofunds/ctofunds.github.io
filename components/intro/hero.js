export default () => {
  return (
    <section id='our-service'>
      <img src='/static/mbg-light.jpg' />
      <div className='content-wrapper'>
        <div className='hero'>
          <h2>创业者的技术合伙人</h2>
          <span>为创业者提供<br />可落地的全方位技术咨询服务</span>
        </div>
        <div className='services-list'>
          <dl className='service-item'>
            <dd>
              <ul>
                <li>CTO顾问的一对一诊脉服务（组织架构、研发流程、系统架构及当前系统瓶颈分析等）</li>
                <li>商业模型和执行策略、技术规划、系统架构、研发团队建设等内容</li>
                <li>技术专家每周的贴身跟进服务</li>
                <li>核心技术骨干的技术面试评估</li>
                <li>绩效体系、薪酬福利体系的搭建</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <style jsx>{`
        img {
          position: absolute;
          height: 1px;
          width: 1px;
          top: -1000px;
          z-index: 0;
        }
      `}</style>
    </section>
  )
}
