!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r,a,i={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,d=[],u=n(0);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(v(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(v(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function f(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertAt.before,n);n.insertBefore(t,a)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var o=c++;n=l||(l=b(t)),r=k.bind(null,n,o,!1),a=k.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a];(s=i[o.id]).refs--,r.push(s)}e&&p(h(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,g=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function k(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset 'utf-8';\r\n\r\n.keyboradZy {\r\n  max-width: 785px;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  transform: -webkit-translate(-50%, 0);\r\n}\r\n\r\n.keyboradZy .ch,\r\n.keyboradZy .en {\r\n  padding: 2px 3px;\r\n  box-sizing: border-box;\r\n  background-color: #ddd;\r\n  border-radius: 3px;\r\n}\r\n\r\n.keyboradZy .ch>div,\r\n.keyboradZy .en>div,\r\n.keyboradInp {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span {\r\n  text-align: center;\r\n  flex: auto;\r\n  -webkit-flex: auto;\r\n  padding: 10px 5px;\r\n  margin: 5px 3px;\r\n  transition: .3s;\r\n  box-shadow: 1px 1px 1px 1px #666;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span,\r\n.keyboradInp span {\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.keyboradZy .ch>div>span:active,\r\n.keyboradZy .en>div>span:active {\r\n  background: #f6c;\r\n  box-shadow: 0 0 0 0 #fff;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n}\r\n .keyboradInp>span {\r\n  display: block;\r\n  width: 50px;\r\n  height: 60px;\r\n  text-align: center;\r\n  line-height: 60px;\r\n  margin: 0 2px;\r\n  border: 2px solid #cdc496;\r\n}\r\n\r\n.keyboradInp .keyborad_interval {\r\n  width: 20px;\r\n  box-shadow: none;\r\n  border: none;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n.keyboradInp>span.keyborad_especial>font {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAvCAMAAABXLiNqAAAAe1BMVEX////6+vr4+Pj8/PzNzc3KysrAwMD29vbr6+vm5ubS0tLY2Njx8fG8vLzv7+/U1NSlpaXf39+1tbXCwsKysrLa2tq5ubmurq6oqKjo6OjPz8/z8/OdnZ2QkJDh4eHHx8eqqqqhoaHc3NzExMSYmJiWlpbj4+OJiYmIiIg8n+V6AAABhklEQVQ4y+2Ux47dIBRA6b2Du/Nsv5b8/xfG2FlEWcx4k0WiORIS5QC69yLAF/8LnF/z+oAueeGi1/efe3CnDxOE+EMNh+/fDn504EP8Qsk8U7po8Clrfz2OK8zztURTCsEX/wD4t0eJYH2s5/Sf3qTgLsjF7/0kEdDvuhVTDzUhShFqquUYe7ElhpQFAGOSCYzxtu57hnl8smwLs6J6/GFlUSOpffn0/qVURyM+hgkJ9hAOVKBkouNeIcjxpKV8NyQCoOWggWjv2WuSDu/Wlbnv6DNsL41Ja1ukQmavQTyTsE2OkZTzPCfbwXjiWglNiLeg3UjIe1+I0t5Z09Du8MQjh0yJRtmAaaVki36A/l5XGjtkulB7pkk4KqGKiBlgEoS2UaWUGuJKHpir1qEze52gDaOuelPP8nwbW1E/LWXHQY9327TwCF4by3XiyDpgOo6KJhpDRtwmrShOtSjdzqoxBoXHv+4lq4tb6YIZ1KQQbzZVa3nAca3l0WAdAGQMBieIg7/CT+PrFzXpIJefAAAAAElFTkSuQmCC);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.keyboradInp .keyborad_active {\r\n  border: 2px solid #d1824d;\r\n}",""])},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){n(4),function(){class e{constructor(e=""){this.element=this.getEle(e)}append(e){this.forEle(function(t){t.appendChild(e)})}html(e){this.forEle(function(t){t.innerHTML=e})}forEle(e){let t=this.element,n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)e(n[t])}getEle(e){var t=document.querySelectorAll(e);return 1==t.length?t[0]:t}hasClass(e,t=""){return 0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}addClass(e,t){this.hasClass(e,t)||(e.className=""==e.className?t:e.className+" "+t)}removeClass(e,t){if(this.hasClass(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}}window.Keyboard=class extends e{constructor({boxName:e,entryInputNa:t,writeBoxName:n,chArray:r,enArray:a,line:i,pushCh:o,pushEn:s,inputLen:l}){super(e),this.boxName=e||"",this.entryInputNa=t||"",this.writeBoxName=n||"",this.chArray=r||["京","津","冀","鲁","晋","蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","豫","鄂","湘","粤","桂","渝","川","贵","云","藏","陕","甘","青","琼","新","宁","港","澳","台","警","军","学"],this.enArray=a||["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],this.line=i||5,this.pushCh=o||[],this.pushEn=s||[],this.saveValue=[],this.index=0,this.inputLen=l||9,this.inpRedundantLen=2,this.status=!0,this.version="1.0.0",this.detail={boxName:"放置键盘盒子的名称-String-必填项",entryInputNa:"放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",writeBoxName:"显示操作键盘值的盒子的名称,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",chArray:"有自己的默认值，显示中文车牌-Array-非必填项",enArray:"有自己的默认值，显示字母和数字-Array-非必填项",line:"键盘排列几行，默认显示5行-Int-非必填项",pushCh:"可以往原有的中文键盘中添加自己的中文-Array-非必填项",pushEn:"可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",inputLen:"现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项"}}init(){if(this.chArray=this.chArray.concat(this.pushCh,["中/EN","删除"]),this.enArray=this.enArray.concat(this.pushEn,["中/EN","删除"]),this.createKeyBorad(),this.writeBoxName&&this.entryInputNa&&(this.entryInputNa=""),!this.writeBoxName){if(!this.entryInputNa)throw new Error(this.entryInputNa);this.createInp()}}createKeyBorad(){if(!this.boxName)return console.error("搁置键盘盒子的名称字段必要的'boxName'"),!1;this.loopSpan(),this.keyboradEvent()}createInp(){let e=document.createElement("div"),t=document.createElement("div");t.className="keyboradInp",e.className="keyboradInpBox";let n=document.createDocumentFragment();for(let e=0;e<this.inputLen;e++){let t=document.createElement("span"),r=e;t.className="key_item",0==e&&(t.className="keyborad_active key_item"),e>2&&(r-=1),2==e?(t.className="keyborad_interval",t.innerText="·"):t.setAttribute("data-index",r),e==this.inputLen-1&&(t.innerHTML="<font></font>",t.className="keyborad_especial key_item"),n.appendChild(t)}t.appendChild(n),e.appendChild(t),document.querySelector(this.entryInputNa).appendChild(e),this.keyboradInpEvent()}keyboradEvent(){let e=this,t=document.querySelectorAll(".keyboradZy span"),n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(t){let n=this.innerText,r=document.querySelectorAll(e.entryInputNa+" span[data-index]");if(!r)throw new Error(r);if(e.hasClass(this,"keyborad_switch"))e.switchEnOrCh();else if(e.hasClass(this,"keyborad_del"))if(e.saveValue[e.index]="",e.writeBoxName){var a=document.querySelector(e.writeBoxName);e.index>0?e.index--:(e.status=!1,e.switchEnOrCh()),a.innerText?a.innerText=e.getVehicleValue():a.value=e.getVehicleValue()}else e.builtInDel(e,r);else e.saveValue[e.index]=n,e.writeBoxName?(a=document.querySelector(e.writeBoxName),e.index<e.inputLen-e.inpRedundantLen&&e.index++,e.index>=1&&(e.status=!0,e.switchEnOrCh()),a.innerText?a.innerText=e.getVehicleValue():a.value=e.getVehicleValue()):e.builtInEvalua(e,r,n);e.eventBubbling(t)},!1)}builtInEvalua(e,t,n){let r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial");if(t[e.index].innerHTML=n,t.forEach(t=>{e.removeClass(t,"keyborad_active")}),r&&6==e.index)return e.addClass(t[e.index],"keyborad_active"),!1;e.index<e.inputLen-e.inpRedundantLen&&e.index++,e.addClass(t[e.index],"keyborad_active"),e.index>=1&&(e.status=!0,e.switchEnOrCh())}builtInDel(e,t){t[e.index].innerHTML="",t.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.index>0?e.index--:(e.status=!1,e.switchEnOrCh()),e.addClass(t[e.index],"keyborad_active")}keyboradInpEvent(){let e=this,t=document.querySelectorAll(this.entryInputNa+" span[data-index]"),n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(t){let n=document.querySelectorAll(e.entryInputNa+" span[data-index]"),r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial"),a=this.getAttribute("data-index");"none"==document.querySelector(".keyboradZy").style.display&&e.keyboradShow(),r&&7==a&&(this.innerHTML="",e.removeClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial")),0==a&&(e.status=!1,e.switchEnOrCh()),n.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.addClass(n[a],"keyborad_active"),e.index=a,e.eventBubbling(t)},!1)}switchEnOrCh(){this.status=!this.status,this.status?(document.querySelector(".keyboradZy .ch").style.display="block",document.querySelector(".keyboradZy .en").style.display="none"):(document.querySelector(".keyboradZy .ch").style.display="none",document.querySelector(".keyboradZy .en").style.display="block")}keyboradShow(){document.querySelector(".keyboradZy").style.display="block"}keyboradHide(){document.querySelector(".keyboradZy").style.display="none"}loopSpan(){let e="",t="",n=this.chArray,r=this.enArray,a=Math.ceil(n.length/this.line),i=Math.ceil(r.length/this.line),o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div");s.style.display="none",o.className="ch",s.className="en",l.className="keyboradZy",n.forEach((t,r)=>{let i=`<span>${t}</span>`;if(r%a==0&&0!=r){let t=document.createElement("div");t.innerHTML=e,o.appendChild(t),e=""}if(r==n.length-2&&(i=`<span class="keyborad_switch">${t}</span>`),r==n.length-1&&(i=`<span class="keyborad_del">${t}</span>`),e+=i,r==n.length-1){let t=document.createElement("div");t.innerHTML=e,o.appendChild(t)}}),r.forEach((e,n)=>{let a=`<span>${e}</span>`;if(n%i==0&&0!=n){let e=document.createElement("div");e.innerHTML=t,s.appendChild(e),t=""}if(n==r.length-2&&(a=`<span class="keyborad_switch">${e}</span>`),n==r.length-1&&(a=`<span class="keyborad_del">${e}</span>`),t+=a,n==r.length-1){let e=document.createElement("div");e.innerHTML=t,s.appendChild(e)}}),l.appendChild(o),l.appendChild(s),this.append(l)}eventBubbling(e){let t=e||window.event;t.stopPropagation?t.stopPropagation():t.cancelBubbel=!0}showDoc(){console.table(this.detail)}getVehicleValue(){if(0==this.saveValue.length)return"";let e="";return this.saveValue.forEach(t=>{e+=t}),e}}}()}]);
