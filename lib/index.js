!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Keyboard=t():e.Keyboard=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h,y;n(2),h="undefiend"==window?this:window,y=function(){return function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(a,e);var n=r(a);function a(e){var t,r=e.boxName,i=e.entryInputNa,o=e.writeBoxName,s=e.chArray,u=e.enArray,l=e.keyboardShowRowNum,d=e.pushCh,h=e.pushEn,y=e.inputLen,p=e.pageVehicleSplit,f=e.enabledCh,b=e.enabledEn,v=e.externalKeyboard,m=e.backpaceEventFn,k=e.keyboardFn,g=e.initComplateFn;return c(this,a),(t=n.call(this,r)).version="2.0.0",t.boxName=r||"",t.entryInputNa=i||"",t.writeBoxName=o||"",t.chArray=s||["京","津","冀","鲁","晋","蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","豫","鄂","湘","粤","桂","渝","川","贵","云","藏","陕","甘","青","琼","新","宁","港","澳","台","警","军","学"],t.enArray=u||["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],t.pushCh=d instanceof Array&&d||[],t.pushEn=h instanceof Array&&h||[],t.line=l||5,t.saveValue=[],t.index=0,t.inputLen=y||9,t.inpRedundantLen=2,t.status=!0,t.keyboardFn=k||null,t.initComplateFn=g||null,t.backpaceEventFn=m||null,t.pageVehicleSplit=p||"",t.enabledCh=f||[],t.enabledEn=b||[],t.externalKeyboard=v||!1,t.__OwnBox__=!0,t.__keyboardDom__=null,t.__writeBoxIsInput__=!1,t.detail={boxName:"放置键盘盒子的名称-String-必填项",entryInputNa:"放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",writeBoxName:"自己显示键盘值的输入框,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",chArray:"有自己的默认值，显示中文车牌-Array-非必填项",enArray:"有自己的默认值，显示字母和数字-Array-非必填项",keyboardShowRowNum:"键盘排列几行，默认显示5行-Int-非必填项",pushCh:"可以往原有的中文键盘中添加自己的中文-Array-非必填项",pushEn:"可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",inputLen:"现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项",pageVehicleSplit:"页面中传来的部分车牌，String",externalKeyboard:"是否开启外置键盘",enabledCh:"需要禁用的中文键-Array-非必填项",enabledEn:"需要禁用的英文键-Array-非必填项",backpaceEventFn:"backpace点击回调-Function-非必填项",keyboardFn:"键盘点击回调-Function-非必填项",initComplateFn:"键盘初始化完成的回调-Function-非必填项"},t}return l(a,[{key:"init",value:function(){if(this.chArray=this.chArray.concat(this.pushCh,["中/EN","删除"]),this.enArray=this.enArray.concat(this.pushEn,["中/EN","删除"]),this._createKeyBorad(),this.writeBoxName&&this.entryInputNa&&(this.entryInputNa="",this.__OwnBox__=!1),this.writeBoxName)this.__OwnBox__=!1,this._builtInShow();else{if(!this.entryInputNa)throw new Error("entryInputNa或者writeBoxName字段是否为空");var e=document.querySelector(this.entryInputNa);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)throw e=null,new Error("entryInputNa必须是一个盒子，不能是input或者textarea");this.__OwnBox__=!0,this._createInp()}this._getVehicleSplit(),this._monitorInputClick(),this._keyboardExternalEvent()}},{key:"_createKeyBorad",value:function(){if(!this.boxName)throw new Error("搁置键盘盒子的名称字段必要的'boxName'");this._loopSpan(),this._keyboradEvent(),this._isInputFn(),this._inputChangeEvent()}},{key:"_createInp",value:function(){var e=document.createElement("div"),t=document.createElement("div");t.className="keyboradInp",e.className="keyboradInpBox";for(var n=document.createDocumentFragment(),r=0;r<this.inputLen;r++){var a=document.createElement("span"),i=r;a.className="key_item",0==r&&(a.className="keyborad_active key_item"),r>2&&(i-=1),2==r?(a.className="keyborad_interval",a.innerText="·"):a.setAttribute("data-index",i),r==this.inputLen-1&&(a.innerHTML="<font></font>",a.className="keyborad_especial key_item"),n.appendChild(a)}t.appendChild(n),e.appendChild(t),document.querySelector(this.entryInputNa).appendChild(e),this._keyboradInpEvent()}},{key:"_keyboradEvent",value:function(){var e=this,t=document.querySelectorAll(".keyboradZy span"),n=[];!t.length&&n.push(t)||(n=o(t));for(var r=0;r<n.length;r++)!function(t){n[t].addEventListener("click",(function(t){var n=this.innerText,r=document.querySelectorAll(e.entryInputNa+" span[data-index]");if(!r)throw new Error("entryInputNa是否为空");e.hasClass(this,"keyborad_switch")?e._switchEnOrCh():e.hasClass(this,"keyborad_del")?!e.writeBoxName&&e._builtInDel(e,r)||e._delWriteBoxName():e._externalOrBuilt(n,r),e.keyboardFn&&e.keyboardFn(),e._eventBubbling(t)}),!1)}(r)}},{key:"_externalOrBuilt",value:function(e,t,n){if(this.saveValue[this.index]=e,this.writeBoxName){var r=document.querySelector(this.writeBoxName);this.index<this.inputLen-this.inpRedundantLen&&this.index++,this.index>=1&&(this.status=!0)&&this._switchEnOrCh(),this.__writeBoxIsInput__&&(r.value=this.getVehicleValue(),r.focus())||(r.innerText=this.getVehicleValue())}else this._builtInEvalua(t,e,n)}},{key:"_builtInEvalua",value:function(e,t){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial");if(e[this.index].innerHTML=t,Array.from(e).forEach((function(e){n.removeClass(e,"keyborad_active")})),a&&6==this.index)return this.addClass(e[this.index],"keyborad_active"),!1;r&&(this.index<this.inputLen-this.inpRedundantLen&&this.index++,this.addClass(e[this.index],"keyborad_active"),this.index>=1&&(this.status=!0,this._switchEnOrCh()))}},{key:"_builtInDel",value:function(e,t){t[e.index].innerHTML="",Array.from(t).forEach((function(t){e.removeClass(t,"keyborad_active")})),e.saveValue[e.index]="",e.index>0&&!e.saveValue[e.index]?e.index--:0==e.index&&(e.status=!1,e._switchEnOrCh()),e.addClass(t[e.index],"keyborad_active")}},{key:"_keyboradInpEvent",value:function(){var e=this,t=[],n=document.querySelectorAll(this.entryInputNa+" span[data-index]");!n.length&&t.push(n)||(t=o(n));for(var r=0;r<t.length;r++)!function(n){t[n].addEventListener("click",(function(t){var n=document.querySelectorAll(e.entryInputNa+" span[data-index]"),r=e.hasClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial"),a=this.getAttribute("data-index");"none"==document.querySelector(".keyboradZy").style.display&&e.keyboradShow(),r&&7==a&&(this.innerHTML="",e.removeClass(document.querySelector(".keyboradInp span:last-child"),"keyborad_especial")),0==a&&(e.status=!1,e._switchEnOrCh()),Array.from(n).forEach((function(t){e.removeClass(t,"keyborad_active")})),e.addClass(n[a],"keyborad_active"),e.index=a,e._eventBubbling(t)}),!1)}(r)}},{key:"_keyboardExternalEvent",value:function(){var e=this,t=document.querySelectorAll(this.entryInputNa+" span[data-index]");if(!t)throw new Error("entryInputNa是否为空");this.externalKeyboard&&this.entryInputNa&&Array.from(t).forEach((function(n){n.setAttribute("contenteditable",!0),n.addEventListener("keydown",(function(e){n.innerHTML=""})),n.addEventListener("keyup",(function(r){e._externalOrBuilt(n.innerHTML,t,!1)}))}))}},{key:"_regNumberOrLetter",value:function(e){/^[a-zA-Z0-9]/g.test(e)}},{key:"_monitorInputClick",value:function(){var e=this;this.writeBoxName&&document.querySelector(this.writeBoxName).addEventListener("keydown",(function(t){8===t.keyCode&&e._delWriteBoxName()}))}},{key:"_delWriteBoxName",value:function(){var e=this.writeBoxName&&document.querySelector(this.writeBoxName)||"";this.index>0&&!this.saveValue[this.index]&&this.index--||0==this.index&&(this.status=!1,this._switchEnOrCh()),this.saveValue[this.index]="",e&&(this.__writeBoxIsInput__&&(e.value=this.getVehicleValue(),e.focus(),this.index=this.getVehicleValue().length)||(e.innerText=this.getVehicleValue())),this.backpaceEventFn&&this.backpaceEventFn()}},{key:"_switchEnOrCh",value:function(){this.status=!this.status,this.status?(document.querySelector(".keyboradZy .ch").style.display="block",document.querySelector(".keyboradZy .en").style.display="none"):(document.querySelector(".keyboradZy .ch").style.display="none",document.querySelector(".keyboradZy .en").style.display="block")}},{key:"_builtInShow",value:function(){var e=this,t=document.querySelector(e.writeBoxName);if(!t)return!1;this._getVehicleSplit(),t.addEventListener("click",(function(t){e.keyboradShow(),e._eventBubbling(t)})),document.querySelector(".keyboradZy").addEventListener("click",(function(t){e.keyboradShow(),e._eventBubbling(t)}))}},{key:"_loopSpan",value:function(){var e=this,t=this.chArray,n=this.enArray,r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");a.style.display="none",r.className="ch",a.className="en",i.className="keyboradZy",i.appendChild(this._splicingKeyboard({_array:t,finalBox:r,thatKeyboardEnable:this.enabledCh})),i.appendChild(this._splicingKeyboard({_array:n,finalBox:a,thatKeyboardEnable:this.enabledEn})),this.append(i),i.onclick=function(t){return e._eventBubbling(t)},this.initComplateFn&&this.initComplateFn()}},{key:"_splicingKeyboard",value:function(e){var t=e._array,n=e.finalBox,r=e.thatKeyboardEnable,a=this,i="",o=t.length,s=Math.ceil(t.length/this.line);return t.forEach((function(e,t){var c='<span class="'.concat(a._arrayIsNoEnabled(e,r),'">').concat(e,"</span>");if(t%s==0&&0!=t){var u=document.createElement("div");u.innerHTML=i,n.appendChild(u),i=""}if(t==o-2&&(c='<span class="keyborad_switch">'.concat(e,"</span>")),t==o-1&&(c='<span class="keyborad_del"></span>'),i+=c,t==o-1){var l=document.createElement("div");l.innerHTML=i,n.appendChild(l)}})),n}},{key:"_arrayIsNoEnabled",value:function(e,t){return t.find((function(t){return e==t.toLocaleUpperCase()}))?"enableBtn":""}},{key:"_getVehicleSplit",value:function(){this.pageVehicleSplit&&"string"==typeof this.pageVehicleSplit&&(this.pageVehicleSplit=this.pageVehicleSplit.toLocaleUpperCase(),this.saveValue=o(this.pageVehicleSplit.split("")),this.status=!0,this._switchEnOrCh(),this._assignmentInput())}},{key:"_assignmentInput",value:function(){var e=this;if(this.__OwnBox__){var t=document.querySelectorAll(e.entryInputNa+" span[data-index]");Array.from(t).forEach((function(t){var n=t.getAttribute("data-index");if(e.removeClass(t,"keyborad_active"),n>=e.saveValue.length)return n==e.saveValue.length&&(e.addClass(t,"keyborad_active"),e.index=n),!1;n&&(t.innerHTML=e.saveValue[n])}))}else this.index=this.saveValue.length,document.querySelector(e.writeBoxName).focus(),document.querySelector(e.writeBoxName).innerHTML=this.pageVehicleSplit,document.querySelector(e.writeBoxName).value=this.pageVehicleSplit}},{key:"_eventBubbling",value:function(e){var t=e||window.event;t.stopPropagation&&t.stopPropagation()||(t.cancelBubbel=!0)}},{key:"_inputChangeEvent",value:function(){var e=this;this._inputFocusEvent(),this.__writeBoxIsInput__&&document.querySelector(this.writeBoxName).addEventListener("keyup",(function(){e.saveValue=this.value.toLocaleUpperCase().split("")}))}},{key:"_inputFocusEvent",value:function(){var e=this;this.__writeBoxIsInput__&&document.querySelector(this.writeBoxName).addEventListener("keydown",(function(){e.index=e._getPosition(this)}))&&document.querySelector(this.writeBoxName).addEventListener("focus",(function(){}))}},{key:"_isInputFn",value:function(){if(!this.writeBoxName)return!1;var e=document.querySelector(this.writeBoxName);("INPUT"==e.tagName||"TEXTAREA"==e.tagName)&&(this.__writeBoxIsInput__=!0)||(this.__writeBoxIsInput__=!1)}},{key:"_getPosition",value:function(e){var t=0;if(document.selection){var n=document.selection.createRange();n.moveStart("character",-e.value.length),t=n.text.length}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);return t}},{key:"initValue",value:function(){var e=this;if(this.__OwnBox__){var t=document.querySelectorAll(this.entryInputNa+" span[data-index]");this.saveValue=[],this.index=0,this.status=!1,this._switchEnOrCh(),Array.from(t).forEach((function(n,r){t[r].innerHTML="",e.removeClass(n,"keyborad_active")})),this.addClass(t[0],"keyborad_active"),this.addClass(t[t.length-1],"keyborad_especial key_item"),t[t.length-1].innerHTML="<font></font>",this._getVehicleSplit()}else this._builtInShow()}},{key:"getVehicleValue",value:function(){var e="";return 0==this.saveValue.length?"":(this.saveValue.forEach((function(t){e+=t})),e)}},{key:"keyboradShow",value:function(){document.querySelector(".keyboradZy").style.display="block"}},{key:"keyboradHide",value:function(){document.querySelector(".keyboradZy").style.display="none"}},{key:"keyboardShow",value:function(){document.querySelector(".keyboradZy").style.display="block"}},{key:"keyboardHide",value:function(){document.querySelector(".keyboradZy").style.display="none"}},{key:"showDoc",value:function(){console.table(this.detail)}}]),a}(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c(this,e),this.element=this.getEle(t)}return l(e,[{key:"append",value:function(e){this.forEle((function(t){t.appendChild(e)}))}},{key:"html",value:function(e){this.forEle((function(t){t.innerHTML=e}))}},{key:"forEle",value:function(e){var t=this.element,n=[];!t.length&&n.push(t)||(n=o(t));for(var r=0;r<n.length;r++)e(n[r])}},{key:"getEle",value:function(e){var t=document.querySelectorAll(e);return 1==t.length?t[0]:t}},{key:"hasClass",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return 0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}},{key:"addClass",value:function(e,t){this.hasClass(e,t)||(e.className=""==e.className?t:e.className+" "+t)}},{key:"removeClass",value:function(e,t){if(this.hasClass(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}}]),e}())},"object"==d(e)&&"object"==d(e.exports)?e.exports=y():h.Keyboard=y()}).call(this,n(1)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(3),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(h)):o.push({identifier:l,updater:b(h,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function y(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function b(e,t){var n,r,a;if(t.singleton){var i=f++;n=p||(p=u(t)),r=h.bind(null,n,i,!1),a=h.bind(null,n,i,!0)}else n=u(t),r=y.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);o[a].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=i}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,"@charset 'utf-8';\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\n.keyboradZy {\r\n  max-width: 78.5rem;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  -webkit-transform: translate(-50%, 0);\r\n}\r\n\r\n.keyboradZy .ch,\r\n.keyboradZy .en {\r\n  padding: .2rem .3rem;\r\n  box-sizing: border-box;\r\n  background-color: #ddd;\r\n  border-radius: .3rem;\r\n}\r\n\r\n.keyboradZy .ch>div,\r\n.keyboradZy .en>div,\r\n.keyboradInp {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span {\r\n  text-align: center;\r\n  flex: auto;\r\n  -webkit-flex: auto;\r\n  padding: 1rem .5rem;\r\n  margin: .5rem .3rem;\r\n  transition: .3s;\r\n  box-shadow: .1rem .1rem .1rem .1rem #666;\r\n  border: .1rem solid #ddd;\r\n}\r\n\r\n.keyboradZy .ch>div>span,\r\n.keyboradZy .en>div>span,\r\n.keyboradInp span {\r\n  border-radius: .5rem;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.keyboradZy .ch>div>span:active,\r\n.keyboradZy .en>div>span:active {\r\n  background-color: #ddc;\r\n  box-shadow: 0 0 0 0 #fff;\r\n  border-radius: .5rem;\r\n  outline: none;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.keyboradZy .keyborad_del {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZ0lEQVRYR+2W200DMRRETzqACoAKgAoIHdABoQKgA+ggVAAdQAfQAUkH0AF0gEbaKxnHr2tttD/rz6w1czx3vNkFE6/FxP7MAHMCrQksgVfgYKTS/gCXwKYFYAU8A1vgbSQAaX4AqxpAaK4URD7GkrnWsgSwL3MZVwH2aV4FaDU/Ay6Ap8RMVNZb4DEzr2wCrebStb0vwE1gJPN34AQ4zvQmCXA1XDW1vbVwMr8GDCI0l8amNQHFKepvh7lphxDS0clL5jsdUEyfwC8ggZ6rZhASPy+c3KD/jUCx6YfTYZYS8yyLXfBacSdSWjsd6IWIZ34XdSJ3kGQJQwi9p21TTiRXuLiYTQnYJoM4sj+Lwix02odM4Qzi0HMNeyAEnCtt6Vn1VexJwlPY5C0ozVikGsf90O4eM1cH4s29t6MGWh1BKCCI9XC9asKe50p1XfsgCQXV+rE+yb5spB4Az+ma984AcwKTJ/AHQABhIXkmPiIAAAAASUVORK5CYII=);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  padding: 1rem !important;\r\n}\r\n\r\n.keyboradZy div>span.enableBtn {\r\n  background-color: #ddd;\r\n  pointer-events: none;\r\n}\r\n\r\n.keyboradInp>span {\r\n  display: block;\r\n  width: 5rem;\r\n  text-align: center;\r\n  line-height: 5rem;\r\n  margin: 0 .2rem;\r\n  border: .2rem solid #cdc496;\r\n}\r\n\r\n.keyboradInp .keyborad_interval {\r\n  width: .5rem;\r\n  box-shadow: none;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.keyboradInp>span.keyborad_especial>font {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAvCAMAAABXLiNqAAAAe1BMVEX////6+vr4+Pj8/PzNzc3KysrAwMD29vbr6+vm5ubS0tLY2Njx8fG8vLzv7+/U1NSlpaXf39+1tbXCwsKysrLa2tq5ubmurq6oqKjo6OjPz8/z8/OdnZ2QkJDh4eHHx8eqqqqhoaHc3NzExMSYmJiWlpbj4+OJiYmIiIg8n+V6AAABhklEQVQ4y+2Ux47dIBRA6b2Du/Nsv5b8/xfG2FlEWcx4k0WiORIS5QC69yLAF/8LnF/z+oAueeGi1/efe3CnDxOE+EMNh+/fDn504EP8Qsk8U7po8Clrfz2OK8zztURTCsEX/wD4t0eJYH2s5/Sf3qTgLsjF7/0kEdDvuhVTDzUhShFqquUYe7ElhpQFAGOSCYzxtu57hnl8smwLs6J6/GFlUSOpffn0/qVURyM+hgkJ9hAOVKBkouNeIcjxpKV8NyQCoOWggWjv2WuSDu/Wlbnv6DNsL41Ja1ukQmavQTyTsE2OkZTzPCfbwXjiWglNiLeg3UjIe1+I0t5Z09Du8MQjh0yJRtmAaaVki36A/l5XGjtkulB7pkk4KqGKiBlgEoS2UaWUGuJKHpir1qEze52gDaOuelPP8nwbW1E/LWXHQY9327TwCF4by3XiyDpgOo6KJhpDRtwmrShOtSjdzqoxBoXHv+4lq4tb6YIZ1KQQbzZVa3nAca3l0WAdAGQMBieIg7/CT+PrFzXpIJefAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transform: scale(.8);\r\n  -webkit-transform: scale(.8);\r\n}\r\n\r\n.keyboradInp .keyborad_active {\r\n  border: .2rem solid #d1824d;\r\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}}])}));