!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r,a,i={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,d=[],u=n(0);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(v(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(v(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function y(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertAt.before,n);n.insertBefore(t,a)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),y(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var o=c++;n=l||(l=b(t)),r=k.bind(null,n,o,!1),a=k.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),y(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return h(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a];(s=i[o.id]).refs--,r.push(s)}e&&h(p(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,g=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function k(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([a]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset 'utf-8';\r\n\r\n.keyboradZy {\r\n  max-width: 785px;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  transform: -webkit-translate(-50%, 0);\r\n}\r\n\r\n.keyboradZy .ch,\r\n.keyboradZy .en {\r\n  padding: 2px 3px;\r\n  box-sizing: border-box;\r\n  background-color: #ddd;\r\n  border-radius: 3px;\r\n}\r\n\r\n.keyboradZy .ch>div,\r\n.keyboradZy .en>div,\r\n.keyboradInp {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span {\r\n  text-align: center;\r\n  flex: auto;\r\n  -webkit-flex: auto;\r\n  padding: 10px 5px;\r\n  margin: 5px 3px;\r\n  transition: .3s;\r\n  box-shadow: 1px 1px 1px 1px #666;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span,\r\n.keyboradInp span {\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.keyboradZy .ch>div>span:active,\r\n.keyboradZy .en>div>span:active {\r\n  background-color: #ddc;\r\n  box-shadow: 0 0 0 0 #fff;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.keyboradZy .keyborad_del {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZ0lEQVRYR+2W200DMRRETzqACoAKgAoIHdABoQKgA+ggVAAdQAfQAUkH0AF0gEbaKxnHr2tttD/rz6w1czx3vNkFE6/FxP7MAHMCrQksgVfgYKTS/gCXwKYFYAU8A1vgbSQAaX4AqxpAaK4URD7GkrnWsgSwL3MZVwH2aV4FaDU/Ay6Ap8RMVNZb4DEzr2wCrebStb0vwE1gJPN34AQ4zvQmCXA1XDW1vbVwMr8GDCI0l8amNQHFKepvh7lphxDS0clL5jsdUEyfwC8ggZ6rZhASPy+c3KD/jUCx6YfTYZYS8yyLXfBacSdSWjsd6IWIZ34XdSJ3kGQJQwi9p21TTiRXuLiYTQnYJoM4sj+Lwix02odM4Qzi0HMNeyAEnCtt6Vn1VexJwlPY5C0ozVikGsf90O4eM1cH4s29t6MGWh1BKCCI9XC9asKe50p1XfsgCQXV+rE+yb5spB4Az+ma984AcwKTJ/AHQABhIXkmPiIAAAAASUVORK5CYII=);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  padding: 10px !important;\r\n}\r\n\r\n.keyboradZy div>span.enableBtn {\r\n  background-color: #ddd;\r\n  pointer-events: none;\r\n}\r\n\r\n.keyboradInp>span {\r\n  display: block;\r\n  width: 50px;\r\n  text-align: center;\r\n  height: 55px;\r\n  line-height: 55px;\r\n  margin: 0 2px;\r\n  border: 2px solid #cdc496;\r\n}\r\n\r\n.keyboradInp .keyborad_interval {\r\n  width: 5px;\r\n  box-shadow: none;\r\n  border: none;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.keyboradInp>span.keyborad_especial>font {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAvCAMAAABXLiNqAAAAe1BMVEX////6+vr4+Pj8/PzNzc3KysrAwMD29vbr6+vm5ubS0tLY2Njx8fG8vLzv7+/U1NSlpaXf39+1tbXCwsKysrLa2tq5ubmurq6oqKjo6OjPz8/z8/OdnZ2QkJDh4eHHx8eqqqqhoaHc3NzExMSYmJiWlpbj4+OJiYmIiIg8n+V6AAABhklEQVQ4y+2Ux47dIBRA6b2Du/Nsv5b8/xfG2FlEWcx4k0WiORIS5QC69yLAF/8LnF/z+oAueeGi1/efe3CnDxOE+EMNh+/fDn504EP8Qsk8U7po8Clrfz2OK8zztURTCsEX/wD4t0eJYH2s5/Sf3qTgLsjF7/0kEdDvuhVTDzUhShFqquUYe7ElhpQFAGOSCYzxtu57hnl8smwLs6J6/GFlUSOpffn0/qVURyM+hgkJ9hAOVKBkouNeIcjxpKV8NyQCoOWggWjv2WuSDu/Wlbnv6DNsL41Ja1ukQmavQTyTsE2OkZTzPCfbwXjiWglNiLeg3UjIe1+I0t5Z09Du8MQjh0yJRtmAaaVki36A/l5XGjtkulB7pkk4KqGKiBlgEoS2UaWUGuJKHpir1qEze52gDaOuelPP8nwbW1E/LWXHQY9327TwCF4by3XiyDpgOo6KJhpDRtwmrShOtSjdzqoxBoXHv+4lq4tb6YIZ1KQQbzZVa3nAca3l0WAdAGQMBieIg7/CT+PrFzXpIJefAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transform: scale(.8);\r\n  -webkit-transform: scale(.8);\r\n}\r\n\r\n.keyboradInp .keyborad_active {\r\n  border: 2px solid #d1824d;\r\n}",""])},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(e){var t,r;n(4),t="undefined"!=typeof window?window:this,r=function(){"use strict";class e{constructor(e=""){this.element=this.getEle(e)}append(e){this.forEle(function(t){t.appendChild(e)})}html(e){this.forEle(function(t){t.innerHTML=e})}forEle(e){let t=this.element,n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)e(n[t])}getEle(e){var t=document.querySelectorAll(e);return 1==t.length?t[0]:t}hasClass(e,t=""){return 0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}addClass(e,t){this.hasClass(e,t)||(e.className=""==e.className?t:e.className+" "+t)}removeClass(e,t){if(this.hasClass(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}}return class extends e{constructor({boxName:e,entryInputNa:t,writeBoxName:n,chArray:r,enArray:a,line:i,pushCh:o,pushEn:s,inputLen:l,keyboardFn:c,pageVehicleSplit:d,enabledCh:u,enabledEn:h,backpaceEventFn:p}){super(e),this.boxName=e||"",this.entryInputNa=t||"",this.writeBoxName=n||"",this.chArray=r||["京","津","冀","鲁","晋","蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","豫","鄂","湘","粤","桂","渝","川","贵","云","藏","陕","甘","青","琼","新","宁","港","澳","台","警","军","学"],this.enArray=a||["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],this.pushCh=o instanceof Array&&o||[],this.pushEn=s instanceof Array&&s||[],this.line=i||5,this.saveValue=[],this.index=0,this.inputLen=l||9,this.inpRedundantLen=2,this.status=!0,this.version="2.0.0",this.keyboardFn=c||null,this.backpaceEventFn=p||null,this.pageVehicleSplit=d||"",this.enabledCh=u||[],this.enabledEn=h||[],this.__OwnBox__=!0,this.detail={boxName:"放置键盘盒子的名称-String-必填项",entryInputNa:"放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",writeBoxName:"自己显示键盘值的输入框,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",chArray:"有自己的默认值，显示中文车牌-Array-非必填项",enArray:"有自己的默认值，显示字母和数字-Array-非必填项",line:"键盘排列几行，默认显示5行-Int-非必填项",pushCh:"可以往原有的中文键盘中添加自己的中文-Array-非必填项",pushEn:"可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",inputLen:"现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项",pageVehicleSplit:"页面中传来的部分车牌，String",enabledCh:"需要禁用的中文键-Array-非必填项",enabledEn:"需要禁用的英文键-Array-非必填项",keyboardFn:"键盘点击回调-Function-非必填项",backpaceEventFn:"backpace点击回调-Function-非必填项"}}init(){if(this.chArray=this.chArray.concat(this.pushCh,["中/EN","删除"]),this.enArray=this.enArray.concat(this.pushEn,["中/EN","删除"]),this._createKeyBorad(),this.writeBoxName&&this.entryInputNa&&(this.entryInputNa="",this.__OwnBox__=!1),this.writeBoxName)this.__OwnBox__=!1,this._builtInShow();else{if(!this.entryInputNa)throw new Error("entryInputNa或者writeBoxName字段是否为空");this.__OwnBox__=!0,this._createInp()}this._getVehicleSplit(),this._monitorInputClick()}_createKeyBorad(){if(!this.boxName)throw new Error("搁置键盘盒子的名称字段必要的'boxName'");this._loopSpan(),this._keyboradEvent()}_createInp(){let e=document.createElement("div"),t=document.createElement("div");t.className="keyboradInp",e.className="keyboradInpBox";let n=document.createDocumentFragment();for(let e=0;e<this.inputLen;e++){let t=document.createElement("span"),r=e;t.className="key_item",0==e&&(t.className="keyborad_active key_item"),e>2&&(r-=1),2==e?(t.className="keyborad_interval",t.innerText="·"):t.setAttribute("data-index",r),e==this.inputLen-1&&(t.innerHTML="<font></font>",t.className="keyborad_especial key_item"),n.appendChild(t)}t.appendChild(n),e.appendChild(t),document.querySelector(this.entryInputNa).appendChild(e),this._keyboradInpEvent()}_keyboradEvent(){let e=this,t=document.querySelectorAll(".keyboradZy span"),n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(t){let n=this.innerText,r=document.querySelectorAll(e.entryInputNa+" span[data-index]");if(!r)throw new Error("entryInputNa是否为空");if(e.hasClass(this,"keyborad_switch"))e._switchEnOrCh();else if(e.hasClass(this,"keyborad_del"))e.writeBoxName?e.delWriteBoxName():e._builtInDel(e,r);else if(e.saveValue[e.index]=n,e.writeBoxName){let t=document.querySelector(e.writeBoxName);e.index<e.inputLen-e.inpRedundantLen&&e.index++,e.index>=1&&(e.status=!0,e._switchEnOrCh()),"INPUT"==t.nodeName?(t.value=e.getVehicleValue(),t.focus()):t.innerText=e.getVehicleValue()}else e._builtInEvalua(e,r,n);e.keyboardFn&&e.keyboardFn(),e._eventBubbling(t)},!1)}_builtInEvalua(e,t,n){let r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial");if(t[e.index].innerHTML=n,t.forEach(t=>{e.removeClass(t,"keyborad_active")}),r&&6==e.index)return e.addClass(t[e.index],"keyborad_active"),!1;e.index<e.inputLen-e.inpRedundantLen&&e.index++,e.addClass(t[e.index],"keyborad_active"),e.index>=1&&(e.status=!0,e._switchEnOrCh())}_builtInDel(e,t){t[e.index].innerHTML="",t.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.index>0&&!e.saveValue[e.index]?e.index--:0==e.index&&(e.status=!1,e._switchEnOrCh()),e.saveValue[e.index]="",e.addClass(t[e.index],"keyborad_active")}_keyboradInpEvent(){let e=this,t=document.querySelectorAll(this.entryInputNa+" span[data-index]"),n=[];t.length?n=[...t]:n.push(t);for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(t){let n=document.querySelectorAll(e.entryInputNa+" span[data-index]"),r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial"),a=this.getAttribute("data-index");"none"==document.querySelector(".keyboradZy").style.display&&e.keyboradShow(),r&&7==a&&(this.innerHTML="",e.removeClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial")),0==a&&(e.status=!1,e._switchEnOrCh()),n.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.addClass(n[a],"keyborad_active"),e.index=a,e._eventBubbling(t)},!1)}_monitorInputClick(){let e=this;this.writeBoxName&&document.querySelector(this.writeBoxName).addEventListener("keydown",t=>{8===t.keyCode&&e.delWriteBoxName()})}delWriteBoxName(){let e=document.querySelector(this.writeBoxName);this.index>0&&!this.saveValue[this.index]?this.index--:0==this.index&&(this.status=!1,this._switchEnOrCh()),this.saveValue[this.index]="",e.innerText?e.innerText=this.getVehicleValue():e.value=this.getVehicleValue(),this.backpaceEventFn&&this.backpaceEventFn()}_switchEnOrCh(){this.status=!this.status,this.status?(document.querySelector(".keyboradZy .ch").style.display="block",document.querySelector(".keyboradZy .en").style.display="none"):(document.querySelector(".keyboradZy .ch").style.display="none",document.querySelector(".keyboradZy .en").style.display="block")}_builtInShow(){let e=this,t=document.querySelector(e.writeBoxName);if(!t)return!1;this._getVehicleSplit(),t.addEventListener("click",function(t){e.keyboradShow(),e._eventBubbling(t)}),document.querySelector(".keyboradZy").addEventListener("click",function(t){e.keyboradShow(),e._eventBubbling(t)})}_loopSpan(){let e=this.chArray,t=this.enArray,n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");r.style.display="none",n.className="ch",r.className="en",a.className="keyboradZy",a.appendChild(this._splicingKeyboard({_array:e,finalBox:n,thatKeyboardEnable:this.enabledCh})),a.appendChild(this._splicingKeyboard({_array:t,finalBox:r,thatKeyboardEnable:this.enabledEn})),this.append(a)}_splicingKeyboard({_array:e,finalBox:t,thatKeyboardEnable:n}){let r=this,a="",i=e.length,o=Math.ceil(e.length/this.line);return e.forEach((e,s)=>{let l=`<span class="${r._arrayIsNoEnabled(e,n)}">${e}</span>`;if(s%o==0&&0!=s){let e=document.createElement("div");e.innerHTML=a,t.appendChild(e),a=""}if(s==i-2&&(l=`<span class="keyborad_switch">${e}</span>`),s==i-1&&(l='<span class="keyborad_del"></span>'),a+=l,s==i-1){let e=document.createElement("div");e.innerHTML=a,t.appendChild(e)}}),t}_arrayIsNoEnabled(e,t){return t.find(t=>e==t.toLocaleUpperCase())?"enableBtn":""}_eventBubbling(e){let t=e||window.event;t.stopPropagation?t.stopPropagation():t.cancelBubbel=!0}_getVehicleSplit(){this.pageVehicleSplit&&"string"==typeof this.pageVehicleSplit&&(this.pageVehicleSplit=this.pageVehicleSplit.toLocaleUpperCase(),this.saveValue=[...this.pageVehicleSplit.split("")],this.status=!0,this._switchEnOrCh(),this._assignmentInput())}_assignmentInput(){var e=this;if(this.__OwnBox__){let t=document.querySelectorAll(e.entryInputNa+" span[data-index]");Array.from(t).forEach(function(t,n){e.removeClass(t,"keyborad_active");var r=t.getAttribute("data-index");if(r>=e.saveValue.length)return r==e.saveValue.length&&(e.addClass(t,"keyborad_active"),e.index=r),!1;r&&(t.innerHTML=e.saveValue[r])})}else this.index=this.saveValue.length,document.querySelector(e.writeBoxName).focus(),document.querySelector(e.writeBoxName).innerHTML=this.pageVehicleSplit,document.querySelector(e.writeBoxName).value=this.pageVehicleSplit}initValue(){if(this.__OwnBox__){let e=document.querySelectorAll(this.entryInputNa+" span[data-index]");this.saveValue=[],this.index=0,this.status=!1,this._switchEnOrCh(),e.forEach((t,n)=>{e[n].innerHTML="",this.removeClass(t,"keyborad_active")}),this.addClass(e[0],"keyborad_active"),this.addClass(e[e.length-1],"keyborad_especial key_item"),e[e.length-1].innerHTML="<font></font>",this._getVehicleSplit()}else this._builtInShow()}getVehicleValue(){if(0==this.saveValue.length)return"";let e="";return this.saveValue.forEach(t=>{e+=t}),e}keyboradShow(){document.querySelector(".keyboradZy").style.display="block"}keyboradHide(){document.querySelector(".keyboradZy").style.display="none"}keyboardShow(){document.querySelector(".keyboradZy").style.display="block"}keyboardHide(){document.querySelector(".keyboradZy").style.display="none"}showDoc(){console.table(this.detail)}}},"object"==typeof e&&"object"===e.export?e.export=r.call(t):t.Keyboard=r.call(t)}).call(this,n(5)(e))}]);
