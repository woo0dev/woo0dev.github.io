(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1e7E":function(t,e,r){},"7LdT":function(t,e,r){},"9ft3":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){var e=t.id,r=t.html,n=t.excerpt,a=t.frontmatter,o=t.fields.slug,i=a.emoji,c=a.categories,s=a.title,u=a.author,l=a.date;this.id=e,this.excerpt=n,this.emoji=i,this.html=r,this.slug=o,this.title=s,this.author=u,this.date=l,this.categories=c.split("")}},D28a:function(t,e,r){},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};d[a]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(N([])));v&&v!==e&&r.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=y.constructor=p,p.constructor=f,f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},xCRD:function(t,e,r){"use strict";r.r(e);r("ls82");function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}var a=r("o0o1"),o=r.n(a),i=r("q1tI"),c=r.n(i),s=r("N8DM"),u=r("I/Ru"),l=r("vrFN"),h=r("Wbzz"),f=(r("D28a"),function(t){var e=t.post,r=t.viewCount;return c.a.createElement("header",{className:"post-header-wrapper"},c.a.createElement("div",{className:"post-header"},e.emoji&&c.a.createElement("div",{className:"emoji"},e.emoji),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"categories"},e.categories.map((function(t){return c.a.createElement(h.Link,{className:"category",key:t,to:"/posts/"+t},t)})))),c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("div",{className:"info"},"posted by ",c.a.createElement("strong",null,e.author)," · ",e.date,r&&" · "+r+" views")))}),p=(r("1e7E"),function(t){var e=t.prevPost,r=t.nextPost;return c.a.createElement("div",{className:"post-cards-adjacent-wrapper"},c.a.createElement("div",{className:"post-cards-adjacent"},c.a.createElement("div",{className:"post-card-adjacent-wrapper"},r&&c.a.createElement(h.Link,{className:"post-card prev",key:r.id,to:r.slug},c.a.createElement("div",{className:"direction"},"이전 글"),c.a.createElement("div",{className:"title"},r.title))),c.a.createElement("div",{className:"post-card-adjacent-wrapper"},e&&c.a.createElement(h.Link,{className:"post-card next",key:e.id,to:e.slug},c.a.createElement("div",{className:"direction"},"다음 글"),c.a.createElement("div",{className:"title"},e.title)))))}),d=r("9ft3"),m=(r("7LdT"),function(t){var e=t.html;return c.a.createElement("div",{className:"post-content-wrapper"},c.a.createElement("div",{className:"post-content"},c.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e}})))}),v=function(t){var e=t.repo,r=t.theme,n=c.a.createRef();return Object(i.useEffect)((function(){if(n.current&&0===n.current.childNodes.length){var t=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:e,branch:"master",theme:"light"===r?"github-light":"photon-dark",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),n.current.appendChild(t)}}),[e,n,r]),c.a.createElement("div",{className:"utterances",ref:n})};e.default=function(t){var e,r,a=t.data,h=Object(i.useState)(null),y=h[0],g=h[1],w=new d.a(a.cur),E=a.prev&&new d.a(a.prev),x=a.next&&new d.a(a.next),L=null===(e=a.site)||void 0===e?void 0:e.siteMetadata,b=L.siteUrl,N=L.comments,j=null==N||null===(r=N.utterances)||void 0===r?void 0:r.repo;return Object(i.useEffect)((function(){if(b){var t=b.replace(/(^\w+:|^)\/\//,""),e=w.slug.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+t+"/"+e).then(function(){var t,e=(t=o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:r=t.sent,g(r.value);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}())}}),[b,w.slug]),c.a.createElement(s.ThemeToggler,null,(function(t){var e=t.theme;return c.a.createElement(u.a,null,c.a.createElement(l.a,{title:null==w?void 0:w.title,description:null==w?void 0:w.excerpt}),c.a.createElement(f,{post:w,viewCount:y}),c.a.createElement(m,{html:w.html}),c.a.createElement(p,{prevPost:E,nextPost:x}),j&&c.a.createElement(v,{repo:j,theme:e}))}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-53e8bb46b4be2dc5d5c2.js.map