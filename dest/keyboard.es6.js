!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,d=0,c=[],u=n(0);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(x(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(x(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function y(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,n);n.insertBefore(t,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),y(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function x(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var o=d++;n=l||(l=b(t)),r=k.bind(null,n,o,!1),i=k.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),y(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}e&&h(p(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset 'utf-8';\r\n\r\n.keyboradZy {\r\n  max-width: 785px;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  -webkit-transform:translate(-50%, 0);\r\n}\r\n\r\n.keyboradZy .ch,\r\n.keyboradZy .en {\r\n  padding: 2px 3px;\r\n  box-sizing: border-box;\r\n  background-color: #ddd;\r\n  border-radius: 3px;\r\n}\r\n\r\n.keyboradZy .ch>div,\r\n.keyboradZy .en>div,\r\n.keyboradInp {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span {\r\n  text-align: center;\r\n  flex: auto;\r\n  -webkit-flex: auto;\r\n  padding: 10px 5px;\r\n  margin: 5px 3px;\r\n  transition: .3s;\r\n  box-shadow: 1px 1px 1px 1px #666;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span,\r\n.keyboradInp span {\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.keyboradZy .ch>div>span:active,\r\n.keyboradZy .en>div>span:active {\r\n  background-color: #ddc;\r\n  box-shadow: 0 0 0 0 #fff;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.keyboradZy .keyborad_del {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZ0lEQVRYR+2W200DMRRETzqACoAKgAoIHdABoQKgA+ggVAAdQAfQAUkH0AF0gEbaKxnHr2tttD/rz6w1czx3vNkFE6/FxP7MAHMCrQksgVfgYKTS/gCXwKYFYAU8A1vgbSQAaX4AqxpAaK4URD7GkrnWsgSwL3MZVwH2aV4FaDU/Ay6Ap8RMVNZb4DEzr2wCrebStb0vwE1gJPN34AQ4zvQmCXA1XDW1vbVwMr8GDCI0l8amNQHFKepvh7lphxDS0clL5jsdUEyfwC8ggZ6rZhASPy+c3KD/jUCx6YfTYZYS8yyLXfBacSdSWjsd6IWIZ34XdSJ3kGQJQwi9p21TTiRXuLiYTQnYJoM4sj+Lwix02odM4Qzi0HMNeyAEnCtt6Vn1VexJwlPY5C0ozVikGsf90O4eM1cH4s29t6MGWh1BKCCI9XC9asKe50p1XfsgCQXV+rE+yb5spB4Az+ma984AcwKTJ/AHQABhIXkmPiIAAAAASUVORK5CYII=);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  padding: 10px !important;\r\n}\r\n\r\n.keyboradZy div>span.enableBtn {\r\n  background-color: #ddd;\r\n  pointer-events: none;\r\n}\r\n\r\n.keyboradInp>span {\r\n  display: block;\r\n  width: 50px;\r\n  text-align: center;\r\n  height: 55px;\r\n  line-height: 55px;\r\n  margin: 0 2px;\r\n  border: 2px solid #cdc496;\r\n}\r\n\r\n.keyboradInp .keyborad_interval {\r\n  width: 5px;\r\n  box-shadow: none;\r\n  border: none;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n}\r\n\r\n.keyboradInp>span.keyborad_especial>font {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAvCAMAAABXLiNqAAAAe1BMVEX////6+vr4+Pj8/PzNzc3KysrAwMD29vbr6+vm5ubS0tLY2Njx8fG8vLzv7+/U1NSlpaXf39+1tbXCwsKysrLa2tq5ubmurq6oqKjo6OjPz8/z8/OdnZ2QkJDh4eHHx8eqqqqhoaHc3NzExMSYmJiWlpbj4+OJiYmIiIg8n+V6AAABhklEQVQ4y+2Ux47dIBRA6b2Du/Nsv5b8/xfG2FlEWcx4k0WiORIS5QC69yLAF/8LnF/z+oAueeGi1/efe3CnDxOE+EMNh+/fDn504EP8Qsk8U7po8Clrfz2OK8zztURTCsEX/wD4t0eJYH2s5/Sf3qTgLsjF7/0kEdDvuhVTDzUhShFqquUYe7ElhpQFAGOSCYzxtu57hnl8smwLs6J6/GFlUSOpffn0/qVURyM+hgkJ9hAOVKBkouNeIcjxpKV8NyQCoOWggWjv2WuSDu/Wlbnv6DNsL41Ja1ukQmavQTyTsE2OkZTzPCfbwXjiWglNiLeg3UjIe1+I0t5Z09Du8MQjh0yJRtmAaaVki36A/l5XGjtkulB7pkk4KqGKiBlgEoS2UaWUGuJKHpir1qEze52gDaOuelPP8nwbW1E/LWXHQY9327TwCF4by3XiyDpgOo6KJhpDRtwmrShOtSjdzqoxBoXHv+4lq4tb6YIZ1KQQbzZVa3nAca3l0WAdAGQMBieIg7/CT+PrFzXpIJefAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transform: scale(.8);\r\n  -webkit-transform: scale(.8);\r\n}\r\n\r\n.keyboradInp .keyborad_active {\r\n  border: 2px solid #d1824d;\r\n}",""])},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";n.r(t),n.d(t,"Keyboard",function(){return i}),n(4);class r{constructor(e=""){this.element=this.getEle(e)}append(e){this.forEle(function(t){t.appendChild(e)})}html(e){this.forEle(function(t){t.innerHTML=e})}forEle(e){let t=this.element,n=[];!t.length&&n.push(t)||(n=[...t]);for(let t=0;t<n.length;t++)e(n[t])}getEle(e){var t=document.querySelectorAll(e);return 1==t.length?t[0]:t}hasClass(e,t=""){return 0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}addClass(e,t){this.hasClass(e,t)||(e.className=""==e.className?t:e.className+" "+t)}removeClass(e,t){if(this.hasClass(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}}class i extends r{constructor({boxName:e,entryInputNa:t,writeBoxName:n,chArray:r,enArray:i,keyboardShowRowNum:a,pushCh:o,pushEn:s,inputLen:l,pageVehicleSplit:d,enabledCh:c,enabledEn:u,externalKeyboard:h,backpaceEventFn:p,keyboardFn:y,initComplateFn:f}){super(e),this.version="2.0.0",this.boxName=e||"",this.entryInputNa=t||"",this.writeBoxName=n||"",this.chArray=r||["京","津","冀","鲁","晋","蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","豫","鄂","湘","粤","桂","渝","川","贵","云","藏","陕","甘","青","琼","新","宁","港","澳","台","警","军","学"],this.enArray=i||["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],this.pushCh=o instanceof Array&&o||[],this.pushEn=s instanceof Array&&s||[],this.line=a||5,this.saveValue=[],this.index=0,this.inputLen=l||9,this.inpRedundantLen=2,this.status=!0,this.keyboardFn=y||null,this.initComplateFn=f||null,this.backpaceEventFn=p||null,this.pageVehicleSplit=d||"",this.enabledCh=c||[],this.enabledEn=u||[],this.externalKeyboard=h||!1,this.__OwnBox__=!0,this.__keyboardDom__=null,this.__writeBoxIsInput__=!1,this.detail={boxName:"放置键盘盒子的名称-String-必填项",entryInputNa:"放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",writeBoxName:"自己显示键盘值的输入框,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",chArray:"有自己的默认值，显示中文车牌-Array-非必填项",enArray:"有自己的默认值，显示字母和数字-Array-非必填项",keyboardShowRowNum:"键盘排列几行，默认显示5行-Int-非必填项",pushCh:"可以往原有的中文键盘中添加自己的中文-Array-非必填项",pushEn:"可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",inputLen:"现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项",pageVehicleSplit:"页面中传来的部分车牌，String",externalKeyboard:"是否开启外置键盘",enabledCh:"需要禁用的中文键-Array-非必填项",enabledEn:"需要禁用的英文键-Array-非必填项",backpaceEventFn:"backpace点击回调-Function-非必填项",keyboardFn:"键盘点击回调-Function-非必填项",initComplateFn:"键盘初始化完成的回调-Function-非必填项"}}init(){if(this.chArray=this.chArray.concat(this.pushCh,["中/EN","删除"]),this.enArray=this.enArray.concat(this.pushEn,["中/EN","删除"]),this._createKeyBorad(),this.writeBoxName&&this.entryInputNa&&(this.entryInputNa="",this.__OwnBox__=!1),this.writeBoxName)this.__OwnBox__=!1,this._builtInShow();else{if(!this.entryInputNa)throw new Error("entryInputNa或者writeBoxName字段是否为空");let e=document.querySelector(this.entryInputNa);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)throw e=null,new Error("entryInputNa必须是一个盒子，不能是input或者textarea");this.__OwnBox__=!0,this._createInp()}this._getVehicleSplit(),this._monitorInputClick(),this._keyboardExternalEvent()}_createKeyBorad(){if(!this.boxName)throw new Error("搁置键盘盒子的名称字段必要的'boxName'");this._loopSpan(),this._keyboradEvent(),this._isInputFn(),this._inputChangeEvent()}_createInp(){let e=document.createElement("div"),t=document.createElement("div");t.className="keyboradInp",e.className="keyboradInpBox";let n=document.createDocumentFragment();for(let e=0;e<this.inputLen;e++){let t=document.createElement("span"),r=e;t.className="key_item",0==e&&(t.className="keyborad_active key_item"),e>2&&(r-=1),2==e?(t.className="keyborad_interval",t.innerText="·"):t.setAttribute("data-index",r),e==this.inputLen-1&&(t.innerHTML="<font></font>",t.className="keyborad_especial key_item"),n.appendChild(t)}t.appendChild(n),e.appendChild(t),document.querySelector(this.entryInputNa).appendChild(e),this._keyboradInpEvent()}_keyboradEvent(){let e=this,t=document.querySelectorAll(".keyboradZy span"),n=[];!t.length&&n.push(t)||(n=[...t]);for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(t){let n=this.innerText,r=document.querySelectorAll(e.entryInputNa+" span[data-index]");if(!r)throw new Error("entryInputNa是否为空");e.hasClass(this,"keyborad_switch")?e._switchEnOrCh():e.hasClass(this,"keyborad_del")?!e.writeBoxName&&e._builtInDel(e,r)||e._delWriteBoxName():e._externalOrBuilt(n,r),e.keyboardFn&&e.keyboardFn(),e._eventBubbling(t)},!1)}_externalOrBuilt(e,t,n){if(this.saveValue[this.index]=e,this.writeBoxName){let e=document.querySelector(this.writeBoxName);this.index<this.inputLen-this.inpRedundantLen&&this.index++,this.index>=1&&(this.status=!0)&&this._switchEnOrCh(),this.__writeBoxIsInput__&&(e.value=this.getVehicleValue(),e.focus())||(e.innerText=this.getVehicleValue())}else this._builtInEvalua(t,e,n)}_builtInEvalua(e,t,n=!0){let r=this.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial");if(e[this.index].innerHTML=t,e.forEach(e=>{this.removeClass(e,"keyborad_active")}),r&&6==this.index)return this.addClass(e[this.index],"keyborad_active"),!1;n&&(this.index<this.inputLen-this.inpRedundantLen&&this.index++,this.addClass(e[this.index],"keyborad_active"),this.index>=1&&(this.status=!0,this._switchEnOrCh()))}_builtInDel(e,t){t[e.index].innerHTML="",t.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.saveValue[e.index]="",e.index>0&&!e.saveValue[e.index]?e.index--:0==e.index&&(e.status=!1,e._switchEnOrCh()),e.addClass(t[e.index],"keyborad_active")}_keyboradInpEvent(){let e=this,t=[],n=document.querySelectorAll(this.entryInputNa+" span[data-index]");!n.length&&t.push(n)||(t=[...n]);for(let n=0;n<t.length;n++)t[n].addEventListener("click",function(t){let n=document.querySelectorAll(e.entryInputNa+" span[data-index]"),r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial"),i=this.getAttribute("data-index");"none"==document.querySelector(".keyboradZy").style.display&&e.keyboradShow(),r&&7==i&&(this.innerHTML="",e.removeClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial")),0==i&&(e.status=!1,e._switchEnOrCh()),n.forEach(t=>{e.removeClass(t,"keyborad_active")}),e.addClass(n[i],"keyborad_active"),e.index=i,e._eventBubbling(t)},!1)}_keyboardExternalEvent(){let e=this,t=document.querySelectorAll(this.entryInputNa+" span[data-index]");if(!t)throw new Error("entryInputNa是否为空");this.externalKeyboard&&this.entryInputNa&&t.forEach(n=>{n.setAttribute("contenteditable",!0),n.addEventListener("keydown",e=>{n.innerHTML=""}),n.addEventListener("keyup",r=>{e._externalOrBuilt(n.innerHTML,t,!1)})})}_regNumberOrLetter(e){/^[a-zA-Z0-9]/g.test(e)}_monitorInputClick(){let e=this;this.writeBoxName&&document.querySelector(this.writeBoxName).addEventListener("keydown",t=>{8===t.keyCode&&e._delWriteBoxName()})}_delWriteBoxName(){let e=this.writeBoxName&&document.querySelector(this.writeBoxName)||"";this.index>0&&!this.saveValue[this.index]&&this.index--||0==this.index&&(this.status=!1,this._switchEnOrCh()),this.saveValue[this.index]="",e&&(this.__writeBoxIsInput__&&(e.value=this.getVehicleValue(),e.focus(),this.index=this.getVehicleValue().length)||(e.innerText=this.getVehicleValue())),this.backpaceEventFn&&this.backpaceEventFn()}_switchEnOrCh(){this.status=!this.status,this.status?(document.querySelector(".keyboradZy .ch").style.display="block",document.querySelector(".keyboradZy .en").style.display="none"):(document.querySelector(".keyboradZy .ch").style.display="none",document.querySelector(".keyboradZy .en").style.display="block")}_builtInShow(){let e=this,t=document.querySelector(e.writeBoxName);if(!t)return!1;this._getVehicleSplit(),t.addEventListener("click",function(t){e.keyboradShow(),e._eventBubbling(t)}),document.querySelector(".keyboradZy").addEventListener("click",function(t){e.keyboradShow(),e._eventBubbling(t)})}_loopSpan(){let e=this.chArray,t=this.enArray,n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");r.style.display="none",n.className="ch",r.className="en",i.className="keyboradZy",i.appendChild(this._splicingKeyboard({_array:e,finalBox:n,thatKeyboardEnable:this.enabledCh})),i.appendChild(this._splicingKeyboard({_array:t,finalBox:r,thatKeyboardEnable:this.enabledEn})),this.append(i),this.initComplateFn&&this.initComplateFn()}_splicingKeyboard({_array:e,finalBox:t,thatKeyboardEnable:n}){let r=this,i="",a=e.length,o=Math.ceil(e.length/this.line);return e.forEach((e,s)=>{let l=`<span class="${r._arrayIsNoEnabled(e,n)}">${e}</span>`;if(s%o==0&&0!=s){let e=document.createElement("div");e.innerHTML=i,t.appendChild(e),i=""}if(s==a-2&&(l=`<span class="keyborad_switch">${e}</span>`),s==a-1&&(l='<span class="keyborad_del"></span>'),i+=l,s==a-1){let e=document.createElement("div");e.innerHTML=i,t.appendChild(e)}}),t}_arrayIsNoEnabled(e,t){return t.find(t=>e==t.toLocaleUpperCase())?"enableBtn":""}_getVehicleSplit(){this.pageVehicleSplit&&"string"==typeof this.pageVehicleSplit&&(this.pageVehicleSplit=this.pageVehicleSplit.toLocaleUpperCase(),this.saveValue=[...this.pageVehicleSplit.split("")],this.status=!0,this._switchEnOrCh(),this._assignmentInput())}_assignmentInput(){let e=this;if(this.__OwnBox__){let t=document.querySelectorAll(e.entryInputNa+" span[data-index]");Array.from(t).forEach(function(t){let n=t.getAttribute("data-index");if(e.removeClass(t,"keyborad_active"),n>=e.saveValue.length)return n==e.saveValue.length&&(e.addClass(t,"keyborad_active"),e.index=n),!1;n&&(t.innerHTML=e.saveValue[n])})}else this.index=this.saveValue.length,document.querySelector(e.writeBoxName).focus(),document.querySelector(e.writeBoxName).innerHTML=this.pageVehicleSplit,document.querySelector(e.writeBoxName).value=this.pageVehicleSplit}_eventBubbling(e){let t=e||window.event;t.stopPropagation&&t.stopPropagation()||(t.cancelBubbel=!0)}_inputChangeEvent(){let e=this;this._inputFocusEvent(),this.__writeBoxIsInput__&&document.querySelector(this.writeBoxName).addEventListener("keyup",function(){e.saveValue=this.value.toLocaleUpperCase().split("")})}_inputFocusEvent(){let e=this;this.__writeBoxIsInput__&&document.querySelector(this.writeBoxName).addEventListener("keydown",function(){e.index=e._getPosition(this)})&&document.querySelector(this.writeBoxName).addEventListener("focus",function(){})}_isInputFn(){if(!this.writeBoxName)return!1;let e=document.querySelector(this.writeBoxName);("INPUT"==e.tagName||"TEXTAREA"==e.tagName)&&(this.__writeBoxIsInput__=!0)||(this.__writeBoxIsInput__=!1)}_getPosition(e){let t=0;if(document.selection){let n=document.selection.createRange();n.moveStart("character",-e.value.length),t=n.text.length}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);return t}initValue(){if(this.__OwnBox__){let e=document.querySelectorAll(this.entryInputNa+" span[data-index]");this.saveValue=[],this.index=0,this.status=!1,this._switchEnOrCh(),e.forEach((t,n)=>{e[n].innerHTML="",this.removeClass(t,"keyborad_active")}),this.addClass(e[0],"keyborad_active"),this.addClass(e[e.length-1],"keyborad_especial key_item"),e[e.length-1].innerHTML="<font></font>",this._getVehicleSplit()}else this._builtInShow()}getVehicleValue(){let e="";return 0==this.saveValue.length?"":(this.saveValue.forEach(t=>{e+=t}),e)}keyboradShow(){document.querySelector(".keyboradZy").style.display="block"}keyboradHide(){document.querySelector(".keyboradZy").style.display="none"}keyboardShow(){document.querySelector(".keyboradZy").style.display="block"}keyboardHide(){document.querySelector(".keyboradZy").style.display="none"}showDoc(){console.table(this.detail)}}}])});