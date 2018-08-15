import Head from 'next/head'
import { siteTitle } from '../libs/constants.js'

/* eslint-disable max-len */
export default ({ children, className, ...restProps }) => {
  return (
    <div className={'body-wrapper ' + className} {...restProps}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes' />
        <meta
          name='keywords'
          content='CTO顾问,CTO外包,技术合伙人,技术天使,技术风投,技术咨询' />
        <meta
          name='description'
          content='HiCTO是一家技术天使机构，聚集了一批来自一线互联网公司的技术研发领导者，他们大多具有带领某家知名互联网公司从0到1，再到N的研发团队成长经历。HiCTO主要为互联网创业者及传统企业转型提供可落地的全方位技术咨询服务，一对一诊脉（组织架构、研发流程、系统架构及当前系统瓶颈分析等）技术规划、系统架构、研发；团队建设方案的持续演进，核心技术骨干的技术面试评估；技术专家各类技术方案评审及优化，及重要模块的工程样板，引导团队迅速突破关键瓶颈' />
        <meta
          name='google-site-verification'
          content='pQ9vVY-1bOLgaRtNkiUXhlX49bsWIsLU8y8EIOqslg4' />
        <meta name='baidu-site-verification' content='ugaSQwguyE' />
      </Head>
      {children}
    </div>
  )
}
