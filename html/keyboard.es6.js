/**
 * author=zy
 * version=2.0.0
 */

require("./keyboard.css");

class Jquery {
  constructor(name = "") {
    this.element = this.getEle(name);
  }
  append(child) {
    this.forEle(function (item) {
      item.appendChild(child);
    });
  }
  html(child) {
    this.forEle(function (item) {
      item.innerHTML = child;
    });
  }

  forEle(callback) {
    let arrayEl = this.element,
      array = [];
    (!arrayEl.length) && array.push(arrayEl) || (array = [...arrayEl]);

    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  getEle(eleName) {
    var eleAll = document.querySelectorAll(eleName);
    return eleAll.length == 1 ? eleAll[0] : eleAll;
  }

  hasClass(ele, cls = "") {
    if (cls.replace(/\s/g, "").length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(" " + cls + " ").test(" " + ele.className + " ");
  }

  addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) {
      ele.className = ele.className == "" ? cls : ele.className + " " + cls;
    }
  }

  removeClass(elem, cls) {
    if (this.hasClass(elem, cls)) {
      var newClass = " " + elem.className.replace(/[\t\r\n]/g, "") + " ";
      while (newClass.indexOf(" " + cls + " ") >= 0) {
        newClass = newClass.replace(" " + cls + " ", " ");
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, "");
    }
  }
}

export class Keyboard extends Jquery {
  constructor({
    boxName,
    entryInputNa,
    writeBoxName,
    chArray,
    enArray,
    keyboradShowRowNum,
    pushCh,
    pushEn,
    inputLen,
    pageVehicleSplit,
    enabledCh,
    enabledEn,
    backpaceEventFn,
    keyboardFn,
    initComplateFn
  }) {
    super(boxName);
    //版本号
    this.version = "2.0.0";
    //外层盒子名称,显示键盘
    this.boxName = boxName || "";
    //输入键盘名称
    this.entryInputNa = entryInputNa || "";
    //存键盘操作的值的 盒子
    this.writeBoxName = writeBoxName || "";
    //中文键盘
    this.chArray = chArray || [
      "京",
      "津",
      "冀",
      "鲁",
      "晋",
      "蒙",
      "辽",
      "吉",
      "黑",
      "沪",
      "苏",
      "浙",
      "皖",
      "闽",
      "赣",
      "豫",
      "鄂",
      "湘",
      "粤",
      "桂",
      "渝",
      "川",
      "贵",
      "云",
      "藏",
      "陕",
      "甘",
      "青",
      "琼",
      "新",
      "宁",
      "港",
      "澳",
      "台",
      "警",
      "军",
      "学"
    ];
    //英文键盘
    this.enArray = enArray || [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M"
    ];
    //默认英文键盘往里面push
    this.pushCh = pushCh instanceof Array && pushCh || [];
    //默认中文键盘往里面push
    this.pushEn = pushEn instanceof Array && pushEn || [];
    //显示多少行
    this.line = keyboradShowRowNum || 5;
    //保存键盘输入的值
    this.saveValue = [];
    //输入框的下标
    this.index = 0;
    //车牌号的长度，显示其实是八个车牌号，因为有一个点暂位置，所以是长度9
    this.inputLen = inputLen || 9;
    //9个span有一个span不做输入操作，所以减两个
    this.inpRedundantLen = 2;
    //键盘显示状态true为输入中文，false为输入英文
    this.status = true;
    //键盘点击回调
    this.keyboardFn = keyboardFn || null;
    //键盘创建完成的函数
    this.initComplateFn = initComplateFn || null;
    //backpace点击回调
    this.backpaceEventFn = backpaceEventFn || null;
    //页面中传来的车牌号
    this.pageVehicleSplit = pageVehicleSplit || "";
    //需要禁用的中文键
    this.enabledCh = enabledCh || [];
    //需要禁用的英文键
    this.enabledEn = enabledEn || [];
    //是否是我的盒子
    //当传入是entryInputNa的值的话__OwnBox__就等于true
    //当传入是writeBoxName的值的话__OwnBox__就等于false
    //内置使用
    //为input输入框
    this.__OwnBox__ = true;
    this.__keyboardDom__ = null;
    //writeBoxName是否为input
    this.__writeBoxIsInput__ = false;
    //使用详细
    this.detail = {
      boxName: "放置键盘盒子的名称-String-必填项",
      entryInputNa: "放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",
      writeBoxName: "自己显示键盘值的输入框,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",
      chArray: "有自己的默认值，显示中文车牌-Array-非必填项",
      enArray: "有自己的默认值，显示字母和数字-Array-非必填项",
      keyboradShowRowNum: "键盘排列几行，默认显示5行-Int-非必填项",
      pushCh: "可以往原有的中文键盘中添加自己的中文-Array-非必填项",
      pushEn: "可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",
      inputLen: "现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项",
      pageVehicleSplit: "页面中传来的部分车牌，String",
      enabledCh: "需要禁用的中文键-Array-非必填项",
      enabledEn: "需要禁用的英文键-Array-非必填项",
      backpaceEventFn: "backpace点击回调-Function-非必填项",
      keyboardFn: "键盘点击回调-Function-非必填项",
      initComplateFn: '键盘初始化完成的回调-Function-非必填项'
    };
  }
  init() {
    this.chArray = this.chArray.concat(this.pushCh, ["中/EN", "删除"]);
    this.enArray = this.enArray.concat(this.pushEn, ["中/EN", "删除"]);
    this._createKeyBorad();
    //如果writeBoxName和entryInputNa全部传了参数，已用户自己的输入框为主
    (!!this.writeBoxName && !!this.entryInputNa) && (this.entryInputNa = "", this.__OwnBox__ = false)

    if (!this.writeBoxName) {
      if (!this.entryInputNa) throw new Error("entryInputNa或者writeBoxName字段是否为空");
      let domEntryInp = document.querySelector(this.entryInputNa);
      if (domEntryInp.tagName == 'INPUT' || domEntryInp.tagName == 'TEXTAREA') {
        domEntryInp = null;
        throw new Error("entryInputNa必须是一个盒子，不能是input或者textarea");
      }
      this.__OwnBox__ = true;
      this._createInp();
    } else {
      this.__OwnBox__ = false;
      this._builtInShow();
    }
    this._getVehicleSplit();
    this._monitorInputClick();
  }

  _createKeyBorad() {
    if (!this.boxName) throw new Error("搁置键盘盒子的名称字段必要的'boxName'");
    this._loopSpan();
    this._keyboradEvent();
    this._isInputFn();
    this._inputChangeEvent();
  }

  //生成input输入框
  _createInp() {
    let divBox = document.createElement("div");
    let div = document.createElement("div");
    div.className = "keyboradInp";
    divBox.className = "keyboradInpBox";
    let frag = document.createDocumentFragment();
    for (let i = 0; i < this.inputLen; i++) {
      let span = document.createElement("span"),
        num = i;
      span.className = "key_item";
      if (i == 0) span.className = "keyborad_active key_item";
      if (i > 2) num = num - 1;
      if (i == 2) {
        span.className = "keyborad_interval";
        span.innerText = "·";
      } else {
        span.setAttribute("data-index", num);
      }
      if (i == this.inputLen - 1) {
        span.innerHTML = "<font></font>";
        span.className = "keyborad_especial key_item";
      }
      frag.appendChild(span);
    }
    div.appendChild(frag);
    divBox.appendChild(div);
    document.querySelector(this.entryInputNa).appendChild(divBox);
    this._keyboradInpEvent();
  }

  //键盘点击事件
  _keyboradEvent() {
    let _this = this,
      allEle = document.querySelectorAll(".keyboradZy span"),
      array = [];
    (!allEle.length) && array.push(allEle) || (array = [...allEle]);
    for (let i = 0; i < array.length; i++) {
      (function (i) {
        array[i].addEventListener("click", function (e) {
          let txt = this.innerText,
            inputSpanAll = document.querySelectorAll(_this.entryInputNa + " span[data-index]");
          if (!inputSpanAll) throw new Error("entryInputNa是否为空");
          if (_this.hasClass(this, "keyborad_switch")) {
            //中文英文切换
            _this._switchEnOrCh();
          } else if (_this.hasClass(this, "keyborad_del")) {
            //删除操作
            (!_this.writeBoxName) && _this._builtInDel(_this, inputSpanAll) || _this._delWriteBoxName();
          } else {
            //键盘输入操作
            _this.saveValue[_this.index] = txt;
            if (!_this.writeBoxName) {
              _this._builtInEvalua(_this, inputSpanAll, txt);
            } else {
              let writeBoxName = document.querySelector(_this.writeBoxName);
              (_this.index < _this.inputLen - _this.inpRedundantLen) && _this.index++;
              (_this.index >= 1) && (_this.status = true) && _this._switchEnOrCh();
              (_this.__writeBoxIsInput__) && (writeBoxName.value = _this.getVehicleValue(), writeBoxName.focus()) || (writeBoxName.innerText = _this.getVehicleValue());
            }
          }
          _this.keyboardFn && _this.keyboardFn();
          _this._eventBubbling(e);
        }, false);
      })(i);
    }
  }

  //内置自己生成的input赋值操作
  _builtInEvalua(_this, inputSpanAll, txt) {
    let especialExis = _this.hasClass(
      document.querySelector(".keyboradInp span:last-child"),
      "keyborad_especial"
    );
    inputSpanAll[_this.index].innerHTML = txt;
    inputSpanAll.forEach(item => { _this.removeClass(item, "keyborad_active") });
    if (especialExis && _this.index == 6) {
      _this.addClass(inputSpanAll[_this.index], "keyborad_active");
      return false;
    }
    (_this.index < _this.inputLen - _this.inpRedundantLen) && _this.index++;
    _this.addClass(inputSpanAll[_this.index], "keyborad_active");
    (_this.index >= 1) && (_this.status = true, _this._switchEnOrCh())
  }

  //内置自己生成的input删除操作
  _builtInDel(_this, inputSpanAll) {
    inputSpanAll[_this.index].innerHTML = "";
    inputSpanAll.forEach(item => { _this.removeClass(item, "keyborad_active") });
    _this.saveValue[_this.index] = "";
    if (_this.index > 0 && !_this.saveValue[_this.index]) {
      _this.index--;
    } else if (_this.index == 0) {
      _this.status = false;
      _this._switchEnOrCh();
    }
    _this.addClass(inputSpanAll[_this.index], "keyborad_active");
  }

  //输入框点击事件
  _keyboradInpEvent() {
    let _this = this,
      array = [],
      allEle = document.querySelectorAll(this.entryInputNa + " span[data-index]");
    (!allEle.length) && array.push(allEle) || (array = [...allEle]);
    for (let i = 0; i < array.length; i++) {
      (function (i) {
        array[i].addEventListener("click", function (e) {
          let inputSpanAll = document.querySelectorAll(_this.entryInputNa + " span[data-index]");
          let especialExis = _this.hasClass(document.querySelector(".keyboradInp span:last-child"), "keyborad_especial");
          let dataIndex = this.getAttribute("data-index");
          let keyboradShow = document.querySelector(".keyboradZy").style.display;
          (keyboradShow == "none") && _this.keyboradShow();
          (especialExis && dataIndex == 7) && (this.innerHTML = "", _this.removeClass(document.querySelector(".keyboradInp span:last-child"), "keyborad_especial"));
          (dataIndex == 0) && (_this.status = false, _this._switchEnOrCh());
          inputSpanAll.forEach(item => { _this.removeClass(item, "keyborad_active") });
          _this.addClass(inputSpanAll[dataIndex], "keyborad_active");
          _this.index = dataIndex;
          _this._eventBubbling(e);
        }, false);
      })(i);
    }
  }

  //监听显示车牌的是input框时做的操作
  _monitorInputClick() {
    let _this = this;
    if (!this.writeBoxName) return;
    document.querySelector(this.writeBoxName).addEventListener('keydown', e => { (e.keyCode === 8) && _this._delWriteBoxName() });
  }

  //删除writeBoxName的操作
  _delWriteBoxName() {
    let writeBoxName = this.writeBoxName && document.querySelector(this.writeBoxName) || '';
    (this.index > 0 && !this.saveValue[this.index]) && (this.index--) || ((this.index == 0) && (this.status = false, this._switchEnOrCh()));
    this.saveValue[this.index] = "";
    writeBoxName && (this.__writeBoxIsInput__ && (writeBoxName.value = this.getVehicleValue(), writeBoxName.focus(), this.index = this.getVehicleValue().length) || (writeBoxName.innerText = this.getVehicleValue()));
    this.backpaceEventFn && this.backpaceEventFn();
  }

  //中英文切换
  _switchEnOrCh() {
    this.status = !this.status;
    if (this.status) {
      document.querySelector(".keyboradZy .ch").style.display = "block";
      document.querySelector(".keyboradZy .en").style.display = "none";
    } else {
      document.querySelector(".keyboradZy .ch").style.display = "none";
      document.querySelector(".keyboradZy .en").style.display = "block";
    }
  }

  //外置输入框点击显示键盘
  _builtInShow() {
    let _this = this;
    let writeBoxName = document.querySelector(_this.writeBoxName);
    if (!writeBoxName) return false;
    this._getVehicleSplit();
    writeBoxName.addEventListener("click", function (e) {
      _this.keyboradShow();
      _this._eventBubbling(e);
    });
    document.querySelector(".keyboradZy").addEventListener("click", function (e) {
      _this.keyboradShow();
      _this._eventBubbling(e);
    });
  }

  //循环添加键盘
  _loopSpan() {
    let chArray = this.chArray,
      enArray = this.enArray,
      chBox = document.createElement("div"),
      enBox = document.createElement("div"),
      keyboradZy = document.createElement("div");
    enBox.style.display = "none";
    chBox.className = "ch";
    enBox.className = "en";
    keyboradZy.className = "keyboradZy";

    keyboradZy.appendChild(this._splicingKeyboard({
      _array: chArray,
      finalBox: chBox,
      thatKeyboardEnable: this.enabledCh
    }));
    keyboradZy.appendChild(this._splicingKeyboard({
      _array: enArray,
      finalBox: enBox,
      thatKeyboardEnable: this.enabledEn
    }));
    this.append(keyboradZy);
    this.initComplateFn && this.initComplateFn();
  }


  //拼接html
  _splicingKeyboard({ _array, finalBox, thatKeyboardEnable }) {
    let _this = this,
      html = '',
      _arrayLen = _array.length,
      lineRow = Math.ceil(_array.length / this.line);
    _array.forEach((item, index) => {
      let spanBox = `<span class="${_this._arrayIsNoEnabled(item, thatKeyboardEnable)}">${item}</span>`;
      if (index % lineRow == 0 && index != 0) {
        let div = document.createElement("div");
        div.innerHTML = html;
        finalBox.appendChild(div);
        html = "";
      }
      (index == _arrayLen - 2) && (spanBox = `<span class="keyborad_switch">${item}</span>`);
      (index == _arrayLen - 1) && (spanBox = `<span class="keyborad_del"></span>`)
      html += spanBox;
      if (index == _arrayLen - 1) {
        let div = document.createElement("div");
        div.innerHTML = html;
        finalBox.appendChild(div);
      }
    });
    return finalBox;
  }

  //判断键值是否需要禁用
  _arrayIsNoEnabled(val, thatKeyboard) {
    return thatKeyboard.find(item => val == item.toLocaleUpperCase()) && "enableBtn" || '';
  }

  //获取页面传的车牌字符串
  _getVehicleSplit() {
    if (!!this.pageVehicleSplit && typeof (this.pageVehicleSplit) == "string") {
      this.pageVehicleSplit = this.pageVehicleSplit.toLocaleUpperCase();
      this.saveValue = [...this.pageVehicleSplit.split("")];
      this.status = true;
      this._switchEnOrCh();
      this._assignmentInput();
    }
  }

  //给input赋值
  _assignmentInput() {
    let _this = this;
    if (this.__OwnBox__) {
      let inputSpanAll = document.querySelectorAll(
        _this.entryInputNa + " span[data-index]"
      );
      Array.from(inputSpanAll).forEach(function (item) {
        let dataIndex = item.getAttribute("data-index");
        _this.removeClass(item, "keyborad_active");
        if (dataIndex >= _this.saveValue.length) {
          (dataIndex == _this.saveValue.length) && (_this.addClass(item, "keyborad_active"), _this.index = dataIndex);
          return false;
        }
        !!dataIndex && (item.innerHTML = _this.saveValue[dataIndex]);
      })
    } else {
      this.index = this.saveValue.length;
      document.querySelector(_this.writeBoxName).focus();
      document.querySelector(_this.writeBoxName).innerHTML = this.pageVehicleSplit;
      document.querySelector(_this.writeBoxName).value = this.pageVehicleSplit;
    }
  }

  //事件冒泡
  _eventBubbling(event) {
    let e = event || window.event;
    e.stopPropagation && e.stopPropagation() || (e.cancelBubbel = true);
  }

  //监听input的change事件
  _inputChangeEvent() {
    let _this = this;
    this._inputFocusEvent();
    this.__writeBoxIsInput__ && document.querySelector(this.writeBoxName).addEventListener('keyup', function () {
      _this.saveValue = this.value.toLocaleUpperCase().split("");
    })
  }

  //获取焦点事件
  _inputFocusEvent() {
    let _this = this;
    this.__writeBoxIsInput__ && document.querySelector(this.writeBoxName).addEventListener('keydown', function () {
      _this.index = _this._getPosition(this);
    }) && document.querySelector(this.writeBoxName).addEventListener('focus', function () {
      // if (this.setSelectionRange) {
      //   this.setSelectionRange(0, this.value.length);
      //   _this.index = _this._getPosition(this);
      // }
    })
  }

  //判断writeBoxName是否为input
  _isInputFn() {
    if (!this.writeBoxName) {
      return false;
    }
    let domWriteBoxName = document.querySelector(this.writeBoxName);
    (domWriteBoxName.tagName == 'INPUT' || domWriteBoxName.tagName == 'TEXTAREA') && (this.__writeBoxIsInput__ = true) || (this.__writeBoxIsInput__ = false);
  }

  //获取input光标位置
  _getPosition(element) {
    let cursorPos = 0;
    if (document.selection) {//IE
      let selectRange = document.selection.createRange();
      selectRange.moveStart('character', -element.value.length);
      cursorPos = selectRange.text.length;
    } else if (element.selectionStart || element.selectionStart == '0') {
      cursorPos = element.selectionStart;
    }
    return cursorPos;
  }

  //键盘值初始化
  initValue() {
    if (this.__OwnBox__) {
      let inputSpanAll = document.querySelectorAll(this.entryInputNa + " span[data-index]");
      this.saveValue = [];
      this.index = 0;
      this.status = false;
      this._switchEnOrCh();
      inputSpanAll.forEach((item, index) => {
        inputSpanAll[index].innerHTML = "";
        this.removeClass(item, "keyborad_active");
      });
      this.addClass(inputSpanAll[0], "keyborad_active");
      this.addClass(inputSpanAll[inputSpanAll.length - 1], "keyborad_especial key_item");
      inputSpanAll[inputSpanAll.length - 1].innerHTML = "<font></font>";
      this._getVehicleSplit();
    } else {
      this._builtInShow();
    }
  }

  //获取输入车牌
  getVehicleValue() {
    let html = "";
    if (this.saveValue.length == 0) return "";
    this.saveValue.forEach(item => { html += item });
    return html;
  }

  //键盘显示
  keyboradShow() {
    document.querySelector(".keyboradZy").style.display = "block";
  }
  //键盘显示
  keyboradHide() {
    document.querySelector(".keyboradZy").style.display = "none";
  }

  //键盘显示
  keyboardShow() {
    document.querySelector(".keyboradZy").style.display = "block";
  }
  //键盘显示
  keyboardHide() {
    document.querySelector(".keyboradZy").style.display = "none";
  }

  //使用文档
  showDoc() {
    console.table(this.detail);
  }
}
