(function () {
  var clientsEl = document.querySelector('.clients')

  function insertClientsHTML(clientsEl) {
    var clients = [
      ["方糖小镇","ftxz.png"],
      ["小马运动","xmyd.png"],
      ["鲁班养车","lbyc.png"],
      ["工头帮","gtb.png"],
      ["小艾爱跑","xaap.png"],
      ["兔博士","tbs.png"],
      ["ibaby","ibaby.png"],
      ["易库易","yky.png"],
      ["鱼大大","ydd.png"],
      ["Good Talk","goodtalk.png"],
      ["二手汇","esh.png"],
      ["楼小二","lxe.png"]
    ]
    var raw = ''
    clients.forEach(function (item) {
      raw += '<div class="client-card">\
        <img src="assets/clients/' + item[1] + '" alt="HiCTO Client" />\
        <p>' + item[0] + '</p>\
      </div>'
    })
    clientsEl.innerHTML = raw
  }

  function onFirstScroll () {
    clientsEl && insertClientsHTML(clientsEl)
    window.removeEventListener('scroll', onFirstScroll)
  }
  window.addEventListener('scroll', onFirstScroll)
})()
