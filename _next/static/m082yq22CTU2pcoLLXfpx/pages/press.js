(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){var r=n(101);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:c,formattingTokensRegExp:r(c)}}},101:function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},102:function(e){e.exports=[{id:"005",title:"HiCTO携手兔博士做最好的查房价，打造最全房产数据库",date:"2017-07-27",file:"/Users/Amio/git/ctofunds.github.io/static/news/005.md"},{id:"004",title:"HiCTO与名医主刀签订合作协议，加速产品升级",date:"2016-11-23",file:"/Users/Amio/git/ctofunds.github.io/static/news/004.md"},{id:"003",title:"HiCTO私董会：给创业技术团队一次深度“诊脉”",date:"2016-10-21",file:"/Users/Amio/git/ctofunds.github.io/static/news/003.md"},{id:"002",title:"让技术团队至少少走半年弯路 | HiCTO私董会",date:"2016-08-30",file:"/Users/Amio/git/ctofunds.github.io/static/news/002.md"},{id:"001",title:"前大众点评CTO龚世海再创业：技术研发是被低估的武器",date:"2016-09-26",file:"/Users/Amio/git/ctofunds.github.io/static/news/001.md"}]},139:function(e,t,n){e.exports=n(276)},27:function(e,t,n){var r=n(95);e.exports=function(e){return r(e,{weekStartsOn:1})}},274:function(e,t,n){__NEXT_REGISTER_PAGE("/press",function(){return e.exports=n(275),{page:e.exports.default}})},275:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),u=n.n(a),i=n(139),s=n.n(i),c=n(34),f=n(35),l=n(36),d=n(49),p=n.n(d),h=n(102);t.default=function(){return u.a.createElement(c.a,null,u.a.createElement(f.a,null),u.a.createElement("div",{className:"jsx-210620033 wrapper"},u.a.createElement("h1",{className:"jsx-210620033"},"媒体新闻"),h.map(function(e){return u.a.createElement("li",{key:e.id,className:"jsx-210620033"},u.a.createElement("span",{className:"jsx-210620033"},p()(e.date,"YYYY.MM.DD")),u.a.createElement(s.a,{href:"/press/article?id="+e.id,as:"/press/article/"+e.id},u.a.createElement("a",{className:"jsx-210620033"},e.title)))})),u.a.createElement(l.a,null),u.a.createElement(o.a,{styleId:"210620033",css:[".wrapper.jsx-210620033{box-sizing:border-box;padding:78px 1rem;max-width:600px;margin:0 auto;min-height:calc(100vh - 85px);}","h1.jsx-210620033{text-align:center;margin:3em 1rem;}","li.jsx-210620033{font-size:1.2rem;list-style:none;padding:1rem 0;}","li.jsx-210620033 span.jsx-210620033{padding-right:1rem;font-family:Menlo,Consolas,monospace;font-weight:300;color:#CCC;}","@media (max-width:500px){li.jsx-210620033 span.jsx-210620033{display:block;}}"]}))}},276:function(e,t,n){"use strict";var r=n(22),o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(277)),u=o(n(58)),i=o(n(9)),s=o(n(10)),c=o(n(19)),f=o(n(20)),l=o(n(21)),d=o(n(61)),p=o(n(16)),h=n(127),m=r(n(0)),g=(o(n(33)),r(n(57))),v=n(26);var x=function(e){function t(){var e,n,r,o,a,s;(0,i.default)(this,t);for(var l=arguments.length,m=new Array(l),x=0;x<l;x++)m[x]=arguments[x];return n=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(m))),(0,p.default)((0,d.default)((0,d.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,u.default)(e)?(0,h.format)(e):e,as:t&&"object"===(0,u.default)(t)?(0,h.format)(t):t}},o=null,a=null,s=null,function(e,t){if(e===o&&t===a)return s;var n=r(e,t);return o=e,a=t,s=n,n})),(0,p.default)((0,d.default)((0,d.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),u=a.href,i=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(u)){var s=window.location.pathname;u=(0,h.resolve)(s,u),i=i?(0,h.resolve)(s,i):u,e.preventDefault();var c=n.props.scroll;null==c&&(c=i.indexOf("#")<0);var f=n.props.replace?"replace":"push";g.default[f](u,i,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,l.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);g.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var a=m.Children.only(t),u={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||r),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=(0,g._rewriteUrlForNextExport)(u.href)),m.default.cloneElement(a,u)}}]),t}(m.Component);t.default=x},277:function(e,t,n){e.exports=n(278)},278:function(e,t,n){var r=n(2),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},47:function(e,t){e.exports=function(e){return e instanceof Date}},48:function(e,t,n){var r=n(7),o=n(27);e.exports=function(e){var t=r(e),n=t.getFullYear(),a=new Date(0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);var u=o(a),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=o(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}},49:function(e,t,n){var r=n(90),o=n(94),a=n(48),u=n(7),i=n(97),s=n(98);var c={M:function(e){return e.getMonth()+1},MM:function(e){return l(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return l(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return l(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return l(o(e),2)},YY:function(e){return l(e.getFullYear(),4).substr(2)},YYYY:function(e){return l(e.getFullYear(),4)},GG:function(e){return String(a(e)).substr(2)},GGGG:function(e){return a(e)},H:function(e){return e.getHours()},HH:function(e){return l(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return l(c.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return l(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return l(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return l(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return l(e.getMilliseconds(),3)},Z:function(e){return f(e.getTimezoneOffset(),":")},ZZ:function(e){return f(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function f(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+l(Math.floor(r/60),2)+t+l(o,2)}function l(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=s.format.formatters,f=s.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(f=o.format.formattingTokensRegExp));var l=u(e);return i(l)?function(e,t,n){var r,o,a,u=e.match(n),i=u.length;for(r=0;r<i;r++)o=t[u[r]]||c[u[r]],u[r]=o||((a=u[r]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",n=0;n<i;n++)u[n]instanceof Function?t+=u[n](e,c):t+=u[n];return t}}(r,a,f)(l):"Invalid Date"}},7:function(e,t,n){var r=n(47),o=36e5,a=6e4,u=2,i=/[T ]/,s=/:/,c=/^(\d{2})$/,f=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,d=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],p=/^-(\d{2})$/,h=/^-?(\d{3})$/,m=/^-?(\d{2})-?(\d{2})$/,g=/^-?W(\d{2})$/,v=/^-?W(\d{2})-?(\d{1})$/,x=/^(\d{2}([.,]\d*)?)$/,D=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,M=/([Z+-].*)$/,T=/^(Z)$/,w=/^([+-])(\d{2})$/,S=/^([+-])(\d{2}):?(\d{2})$/;function Y(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(r(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?u:Number(n);var b=function(e){var t,n={},r=e.split(i);if(s.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=M.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),E=function(e,t){var n,r=f[t],o=d[t];if(n=l.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=c.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}(b.date,n),H=E.year,C=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=p.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=h.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=m.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=g.exec(e))return a=parseInt(n[1],10)-1,Y(t,a);if(n=v.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return Y(t,a,s)}return null}(E.restDateString,H);if(C){var F,O=C.getTime(),k=0;return b.time&&(k=function(e){var t,n,r;if(t=x.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*o;if(t=D.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*o+r*a;if(t=y.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var u=parseFloat(t[3].replace(",","."));return n%24*o+r*a+1e3*u}return null}(b.time)),b.timezone?(A=b.timezone,F=(I=T.exec(A))?0:(I=w.exec(A))?(N=60*parseInt(I[2],10),"+"===I[1]?-N:N):(I=S.exec(A))?(N=60*parseInt(I[2],10)+parseInt(I[3],10),"+"===I[1]?-N:N):0):(F=new Date(O+k).getTimezoneOffset(),F=new Date(O+k+F*a).getTimezoneOffset()),new Date(O+k+F*a)}var A,I,N;return new Date(e)}},90:function(e,t,n){var r=n(7),o=n(91),a=n(92);e.exports=function(e){var t=r(e);return a(t,o(t))+1}},91:function(e,t,n){var r=n(7);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},92:function(e,t,n){var r=n(93),o=6e4,a=864e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},93:function(e,t,n){var r=n(7);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},94:function(e,t,n){var r=n(7),o=n(27),a=n(96),u=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-a(t).getTime();return Math.round(n/u)+1}},95:function(e,t,n){var r=n(7);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}},96:function(e,t,n){var r=n(48),o=n(27);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},97:function(e,t,n){var r=n(47);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},98:function(e,t,n){var r=n(99),o=n(100);e.exports={distanceInWords:r(),format:o()}},99:function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}}},[[274,1,0]]]);