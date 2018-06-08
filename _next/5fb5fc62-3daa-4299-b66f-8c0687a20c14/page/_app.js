module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([3],{232:function(e,t,r){e.exports=r(233)},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"default",function(){return m});var n=r(25);var a=r.n(n);var o=r(1);var u=r.n(o);var i=r(234);var c=r.n(i);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e,t){try{var r=o[e](t);var u=r.value}catch(e){a(e);return}r.done?n(u):Promise.resolve(u).then(i,c)}function i(e){u("next",e)}function c(e){u("throw",e)}i()})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function v(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=function(e){y(t,e);function t(){p(this,t);return v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"componentDidMount",value:function e(){window.dataLayer=window.dataLayer||[];function t(){window.dataLayer.push(arguments)}t("js",new Date);t("config","UA-111657353-1");window._hmt=window._hmt||[];window._vds=window._vds||[];window._vds.push(["setAccountId","8ea566982832d0c8"]);"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js")})}},{key:"render",value:function e(){var t=this.props,r=t.Component,n=t.pageProps;return u.a.createElement(i["Container"],null,u.a.createElement(r,n),u.a.createElement("script",{async:true,src:"https://www.googletagmanager.com/gtag/js?id=UA-111657353-1"}),u.a.createElement("script",{async:true,src:"https://hm.baidu.com/hm.js?63148d26d2c8b6f82ac697c9d24b2cd4"}),u.a.createElement("script",{async:true,src:"https://assets.growingio.com/vds.js"}))}}],[{key:"getInitialProps",value:function(){var e=l(a.a.mark(function e(t){var r,n,o,u;return a.a.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:r=t.Component,n=t.router,o=t.ctx;u={};if(!r.getInitialProps){a.next=6;break}a.next=5;return r.getInitialProps(o);case 5:u=a.sent;case 6:return a.abrupt("return",{pageProps:u});case 7:case"end":return a.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(c.a)},234:function(e,t,r){e.exports=r(235)},235:function(e,t,r){"use strict";var n=r(23);var a=r(6);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=P;t.Container=t.default=void 0;var o=a(r(25));var u=a(r(49));var i=a(r(236));var c=a(r(44));var s=a(r(28));var l=a(r(10));var p=a(r(11));var f=a(r(29));var d=a(r(30));var v=n(r(1));var h=a(r(39));var y=a(r(134));var m=r(21);var b=r(51);var w=function(e){(0,d.default)(t,e);function t(){(0,l.default)(this,t);return(0,f.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}(0,p.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,b.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,a=t.pageProps;var o=P(r);return v.default.createElement(g,null,v.default.createElement(n,(0,i.default)({},a,{url:o})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(o.default.mark(function e(t){var r,n,a,u;return o.default.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:r=t.Component,n=t.router,a=t.ctx;o.next=3;return(0,m.loadGetInitialProps)(r,a);case 3:u=o.sent;return o.abrupt("return",{pageProps:u});case 5:case"end":return o.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(v.Component);t.default=w;Object.defineProperty(w,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(w,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any,headManager:h.default.object,router:h.default.object}});var g=function(e){(0,d.default)(t,e);function t(){(0,l.default)(this,t);return(0,f.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}(0,p.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,y.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return v.default.createElement(v.default.Fragment,null,t)}}]);return t}(v.Component);t.Container=g;Object.defineProperty(g,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any}});var _=(0,m.execOnce)(function(){false});function P(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){_();return n},get pathname(){_();return t},get asPath(){_();return r},back:function t(){_();e.back()},push:function t(r,n){_();return e.push(r,n)},pushTo:function t(r,n){_();var a=n?r:null;var o=n||r;return e.push(a,o)},replace:function t(r,n){_();return e.replace(r,n)},replaceTo:function t(r,n){_();var a=n?r:null;var o=n||r;return e.replace(a,o)}}}},236:function(e,t,r){var n=r(77);function a(){e.exports=a=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}e.exports=a}},[232]);return{page:e.default}});