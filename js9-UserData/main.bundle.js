(()=>{"use strict";var e={821:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(81),o=r.n(n),a=r(645),i=r.n(a),s=r(667),c=r.n(s),d=new URL(r(614),r.b),l=new URL(r(117),r.b),u=new URL(r(53),r.b),p=new URL(r(116),r.b),h=i()(o()),g=c()(d),m=c()(l),f=c()(u),b=c()(p);h.push([e.id,".theme-light {\r\n  --color-border: #7b6b72;\r\n  --color-secondary: url("+g+");\r\n  --font-color: #29233c;\r\n  --bg-data: #9bcbf3;\r\n  --bg-cat:#e5c8b6;\r\n  --bg-title: #6aaedd;\r\n}\r\n\r\n.theme-dark {\r\n  --color-border: #9e9fa3;\r\n  --color-secondary: url("+m+');\r\n  --font-color: #d1d1d1;\r\n  --bg-data: #73747a;\r\n  --bg-cat:#1f1f1f;\r\n  --bg-title: #313131;\r\n}\r\n\r\nbody {\r\n  background: var(--color-secondary);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  margin: 0;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: var(--font-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  height: 100vh;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.switch-theme {\r\n  margin: 1vmin auto;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #8f9094;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: "";\r\n  height: 40px;\r\n  width: 40px;\r\n  left: 0px;\r\n  bottom: 4px;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  transition: 0.4s;\r\n  box-shadow: 0 0px 15px #2020203d;\r\n  background: #d7d8d2 url('+f+");\r\n  background-size: 70%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\ninput:checked+.slider {\r\n  background-color: #e1eef1;\r\n}\r\n\r\ninput:focus+.slider {\r\n  box-shadow: 0 0 1px #e1eef1;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n  transform: translateX(24px);\r\n  background: #85d0cf url("+b+");\r\n  background-size: 70%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.name:focus {\r\n  border: var(--color-border);\r\n}\r\n\r\n#root,\r\n.content {\r\n  width: 600px;\r\n  margin: 20px auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n.categories,\r\n.titles {\r\n  width: 250px;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n\r\nspan {\r\n  font-weight: 900;\r\n}\r\n\r\n.categories {\r\n  border: 3px solid #868686;\r\n  background-color: var(--bg-cat);\r\n  color: var(--font-color);\r\n}\r\n\r\n.titles {\r\n  border: 3px solid #868686;\r\n  background-color: var(--bg-title);\r\n  color: var(--font-color);\r\n}\r\n\r\n.content {\r\n  flex-direction: column;\r\n  border: 3px solid #4b585f;\r\n  background-color: var(--bg-data);\r\n  font-size: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.content h3 {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.loading {\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 50px;\r\n  background-color: aliceblue;\r\n  top: 45%;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  font-size: 20px;\r\n  text-align: center;\r\n  color: #361c96;\r\n  text-transform: uppercase;\r\n  opacity: 0.8;\r\n}\r\n\r\n.loading.none {\r\n  display: none;\r\n}",""]);const v=h},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),d=0;d<a.length;d++){var l=r(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},117:(e,t,r)=>{e.exports=r.p+"b2bbfb4b45705fd3587d.jpg"},614:(e,t,r)=>{e.exports=r.p+"6428fe60329bea6a3a5a.jpg"},116:(e,t,r)=>{e.exports=r.p+"b9c2418f3c73ba53f3c6.png"},53:(e,t,r)=>{e.exports=r.p+"e380ed6f9e5deb3a6682.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),s=r(565),c=r.n(s),d=r(216),l=r.n(d),u=r(589),p=r.n(u),h=r(821),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const m=document.getElementById("slider"),f=(document.getElementById("greeting"),document.querySelector(".greet-container"),document.getElementById("name")),b=document.getElementById("root"),v=document.querySelector(".loading"),y="enterName",x=["night","morning","afternoon","evening"],T="https://api.publicapis.org/";class w{dataCategory;dataTitles;currData;currCategory;currTitle;constructor(){}async start(){this.currCategory="Animals",this.currTitle="AdoptAPet",await this.loadCategories(),await this.loadTitles()}async loadCategories(){const e=await this.getAsyncData(`${T}categories`);this.dataCategory=e,this.renderSelectCategories()}async loadTitles(){const e=await this.getAsyncData(`${T}entries?category=${this.currCategory}`);this.dataTitles=e,this.currTitle=this.dataTitles.entries[0].API,this.renderSelectTitles()}async loadData(){const e=await this.getAsyncData(`${T}entries?title=${this.currTitle}`);this.currData=e,this.renderData()}renderSelectCategories(){const e=document.createElement("div");e.classList.add("categories-container");const t=document.createElement("select");t.classList.add("categories"),this.dataCategory.categories.forEach((e=>{const r=document.createElement("option");r.innerHTML=e,t.appendChild(r)})),e.appendChild(t),b.insertAdjacentHTML("afterbegin",e.outerHTML),this.addListenersCategory()}renderSelectTitles(){document.querySelector(".titles-container")&&document.querySelector(".titles-container").remove();const e=document.createElement("div");e.classList.add("titles-container");const t=document.createElement("select");t.classList.add("titles"),this.dataTitles.entries.forEach((e=>{const r=document.createElement("option");r.innerHTML=e.API,t.appendChild(r)})),e.appendChild(t),b.insertAdjacentHTML("beforeend",e.outerHTML),this.addListenersTitle(),this.loadData()}renderData(){document.querySelector(".content")&&document.querySelector(".content").remove();const{API:e,Category:t,Description:r,Link:n}=this.currData.entries[0],o=`\n    <div class="content">\n      <h3>${e}</h3>\n      <p>Category: ${t}</p>\n      <p>${r}</p>\n      <a href="${n}" target="blank">${e} Link </a>\n    </div>\n    `;b.insertAdjacentHTML("afterend",o),v.classList.add("none")}async getAsyncData(e){return fetch(e).then((e=>{if(!e.ok)throw new Error(`HTTP error: ${e.status}`);return e})).then((e=>e.json())).catch((e=>{v.textContent=`Please repeat your select or reload page.\n ${e} data`,v.classList.remove("none")}))}addListenersCategory(){document.querySelector(".categories").addEventListener("change",(e=>{this.addLoadContainer();const t=e.target;this.currCategory=t.value,this.loadTitles()}))}addListenersTitle(){document.querySelector(".titles").addEventListener("change",(e=>{this.addLoadContainer();const t=e.target;this.currTitle=t.value,this.loadData()}))}addLoadContainer(){v.textContent="...loading",v.classList.remove("none")}}window.addEventListener("DOMContentLoaded",(()=>{(new w).start()})),(new class{start(){this.startUse(),this.addListenerTheme()}setTheme(e){localStorage.setItem("theme",e),document.documentElement.className=e}addListenerTheme(){m.addEventListener("change",(()=>{"theme-dark"===localStorage.getItem("theme")?this.setTheme("theme-light"):this.setTheme("theme-dark")}))}startUse(){"theme-dark"===localStorage.getItem("theme")?(this.setTheme("theme-dark"),m.checked=!1):(this.setTheme("theme-light"),m.checked=!0)}}).start(),(new class{start(){this.getName(),this.addListeners(),this.getHourText()}getName(){null===localStorage.getItem("name")?f.textContent=y:f.textContent=localStorage.getItem("name")}delName(){f.textContent="",null===localStorage.getItem("name")&&localStorage.setItem("name",y)}setName(e){const t=e.target,r=localStorage.getItem("name");"keypress"===e.type?13!==e.which&&13!==e.keyCode||(!t.innerText&&(f.textContent=y),localStorage.setItem("name",t.innerText),f.blur()):(!t.innerText&&(f.textContent=r),localStorage.setItem("name",t.innerText))}addListeners(){f.addEventListener("keypress",this.setName),f.addEventListener("blur",this.setName),f.addEventListener("click",this.delName)}getHourText(){const e=(new Date).getHours();let t;t=e<6?x[0]:e<12?x[1]:e<18?x[2]:x[3],greeting.textContent=`Good ${t}, `}}).start()})()})();