(function () {
  var clientsEl = document.querySelector('.clients')
  var headerEl = document.querySelector('header')

  function insertClientsHTML (clientsEl) {
    var clients = [
      ['工头帮', 'gtb.png', '家装辅料B2B', '天使：500强企业天正电气董事局主席高天乐；A轮：硅谷银行', 'A轮'],
      ['兔博士', 'tbs.png', '房地产大数据', '天使：李开复；A轮：深创投/分享投资，A+轮：光速', 'A+轮'],
      ['ibaby', 'ibaby.png', '母婴医疗教育+电商', 'A+轮：同享创投，2016年度市场潜力手机应用（APP）奖', 'A+轮'],
      ['易库易', 'yky.png', '电子元器件行业MRO', '软银中国PE阶段投资', '上市'],
      ['鱼大大', 'ydd.png', '水产养殖及生鲜B2B', '天使：开创资本；A轮：寒武创投', 'A轮'],
      ['Good Talk', 'goodtalk.png', '高端游学', '天使：Jim Rogers（全球三大投资人之一）投资', '天使轮'],
      ['二手汇', 'esh.png', '二手工程机械电商。覆盖全国，年交易额最大的二手工程机械拍卖交易平台。', '天使轮', '天使轮'],
      ['楼小二', 'lxe.png', '高端写字楼本地服务电商', '天使：谢世煌（阿里十八罗汉），A轮初橙资本', 'A轮'],
      ['HiTales', 'hitales.png', '感知病理的精准医疗大数据平台', 'A轮－GGV Capital，天使轮－Lilly Asia Ventures', 'A+轮'],
      ['方糖小镇', 'ftxz.png', '共享办公', 'A轮：鼎晖投资/歌斐资产/华住酒店集团', 'A轮'],
      ['小灶教育', 'xiaozao.png', '面向新一代大学生的互联网招聘和职业发展教育平台', '天使轮，投资人：胡泽民（91助手和MFUND创始人）', '天使轮'],
      ['优拜单车', 'ybdc.png', '共享单车', '天使：中路/初心/点亮/火橙资本；A轮：一村/黑洞/中路/点亮/火橙资本；A+轮：黑洞资本', 'A+轮'],
      ['名医主刀', 'myzd.png', '移动医疗', '天使: 徐小平（真格基金）/华旦天使投资/快创营/初心资本 500万,A轮 复星医药领投 真格、高榕跟投6000万,B轮 约印创投 汉富控股1.5亿人民币 ', 'B轮'],
      ['校妆网', 'xiaozhuang.jpg', '化妆品 B2C', '国内首家专门针对高校大学生的大型化妆品B2C量贩式购物网站', '年收入4-5个亿'],
      ['智造360', 'zhizao.png', ' 工厂自动化零件采购平台', '国内最大的工业自动化设备零配件B2B交易平台,汇集国内外众多自动化设备用标准件品牌与机械加工工厂,为采购商提供公平、透明的一站式采购服务。', '未融资'],
      ['鱼泡泡', 'yupaopao.png', '国内首款技能分享型社交产品', 'B 轮，代言人 AngelaBaby', 'B轮']
    ]
    var raw = ''
    clients.forEach(function (item) {
      raw = raw + '<div class="client-card">' +
        '<img src="assets/clients/' + item[1] + '" alt="HiCTO Client" />' +
        '<p><em>' + item[0] + ' <i class="status">(' + item[4] + ')</i></em>' +
        item[2] + '<br/>' + item[3] + '</p>' +
      '</div>'
    })
    clientsEl.innerHTML = raw
  }

  function onFirstScroll () {
    clientsEl && insertClientsHTML(clientsEl)
    window.removeEventListener('scroll', onFirstScroll)
  }
  window.addEventListener('scroll', onFirstScroll)

  function onEveryScroll () {
    var opacity = window.scrollY / 400 + 0.6
    opacity = opacity > 1 ? 1 : opacity
    headerEl.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')'
    // console.log(window.scrollY)
  }
  window.addEventListener('scroll', onEveryScroll)
})()
