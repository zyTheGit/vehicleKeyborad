/**
 * author=zy
 * version=1.1.0
 */

import "./keyboard.css";
class Jquery {
  constructor() {
    this.element = null;
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
    (!arrayEl.length && array.push(arrayEl)) || (array = [...arrayEl]);

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

class Keyboard extends Jquery {
  constructor({
    boxName,
    entryInputName,
    writeBoxName,
    chArray,
    enArray,
    rowNumber,
    pushCh,
    pushEn,
    inputNumber,
    defaultVehicleValue,
    enabledCh,
    enabledEn,
    externalKeyboard,
    onBackpace,
    onChange,
    onComplate,
  }) {
    super();
    //版本号
    this.version = "1.1.0";
    //外层盒子名称,显示键盘
    this.boxName = boxName || "";
    //输入键盘名称
    this.entryInputName = entryInputName || "";
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
      "学",
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
      "M",
    ];
    //默认英文键盘往里面push
    this.pushCh = (pushCh instanceof Array && pushCh) || [];
    //默认中文键盘往里面push
    this.pushEn = (pushEn instanceof Array && pushEn) || [];
    //显示多少行
    this.line = rowNumber || 5;
    //保存键盘输入的值
    this.saveValue = [];
    //输入框的下标
    this.index = 0;
    //车牌号的长度，显示其实是八个车牌号，因为有一个点暂位置，所以是长度9
    this.inputNumber = inputNumber || 9;
    //9个span有一个span不做输入操作，所以减两个
    this.inpRedundantLen = 2;
    //键盘显示状态true为输入中文，false为输入英文
    this.status = true;
    //键盘点击回调
    this.onChange = onChange || null;
    //键盘创建完成的函数
    this.onComplate = onComplate || null;
    //backpace点击回调
    this.onBackpace = onBackpace || null;
    //页面中传来的车牌号
    this.defaultVehicleValue = defaultVehicleValue || "";
    //需要禁用的中文键
    this.enabledCh = enabledCh || [];
    //需要禁用的英文键
    this.enabledEn = enabledEn || [];
    //开启外置键盘事件
    this.externalKeyboard = externalKeyboard || false;
    //是否是我的盒子
    //当传入是entryInputNa的值的话__OwnBox__就等于true
    //当传入是writeBoxName的值的话__OwnBox__就等于false
    //内置使用
    //为input输入框
    this.__OwnBox__ = true;
    this.__keyboardDom__ = null;
    //writeBoxName是否为input
    this.__writeBoxIsInput__ = false;
    //外层盒子的dom
    this.__keyboardDom__ = null;
    //键盘操作盒子
    this.__writeBoxNameDom__ = null;
    //使用详细
    this.detail = {
      boxName: "放置键盘盒子的名称-String-必填项",
      entryInputName:
        "放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",
      writeBoxName:
        "自己显示键盘值的输入框,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",
      chArray: "有自己的默认值，显示中文车牌-Array-非必填项",
      enArray: "有自己的默认值，显示字母和数字-Array-非必填项",
      rowNumber: "键盘排列几行，默认显示5行-Int-非必填项",
      pushCh: "可以往原有的中文键盘中添加自己的中文-Array-非必填项",
      pushEn: "可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",
      inputNumber:
        "现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项",
      defaultVehicleValue: "页面中传来的部分车牌，String",
      externalKeyboard: "是否开启外置键盘",
      enabledCh: "需要禁用的中文键-Array-非必填项",
      enabledEn: "需要禁用的英文键-Array-非必填项",
      onBackpace: "backpace点击回调-Function-非必填项",
      onChange: "键盘点击回调-Function-非必填项",
      onComplate: "键盘初始化完成的回调-Function-非必填项",
    };
  }
  init() {
    this.chArray = [...this.chArray, ...this.pushCh, "中/en", "删除"];
    this.enArray = [...this.enArray, ...this.pushEn, "中/en", "删除"];
    this.element =
      this.boxName instanceof HTMLElement
        ? this.boxName
        : this.getEle(this.boxName);
    this._createKeyboard();

    //如果writeBoxName和entryInputNa全部传了参数，已用户自己的输入框为主
    !!this.__writeBoxNameDom__ &&
      !!this.entryInputName &&
      ((this.entryInputName = ""), (this.__OwnBox__ = false));

    if (!this.__writeBoxNameDom__) {
      if (!this.entryInputName)
        throw new Error("entryInputNa或者writeBoxName字段是否为空");
      let domEntryInp = document.querySelector(this.entryInputName);
      if (domEntryInp.tagName == "INPUT" || domEntryInp.tagName == "TEXTAREA") {
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
    this._keyboardExternalEvent();
  }

  _createKeyboard() {
    if (!this.boxName) throw new Error("搁置键盘盒子的名称字段必要的'boxName'");
    this._loopSpan();
    this._keyboardEvent();
    this._isInputFn();
    this._inputChangeEvent();
  }

  //生成input输入框
  _createInp() {
    let divBox = document.createElement("div");
    let div = document.createElement("div");
    div.className = "keyboardInp";
    divBox.className = "keyboardInpBox";
    let frag = document.createDocumentFragment();
    for (let i = 0; i < this.inputNumber; i++) {
      let span = document.createElement("span"),
        num = i;
      span.className = "keyboard__item";
      if (i == 0) span.className = "keyboard__active keyboard__item";
      if (i > 2) num = num - 1;
      if (i == 2) {
        span.className = "keyboard__interval";
        span.innerText = "·";
      } else {
        span.setAttribute("data-index", num);
      }
      if (i == this.inputNumber - 1) {
        span.innerHTML = "<font></font>";
        span.className = "keyboard__especial keyboard__item";
      }
      frag.appendChild(span);
    }
    div.appendChild(frag);
    divBox.appendChild(div);
    document.querySelector(this.entryInputName).appendChild(divBox);
    this._keyboardInpEvent();
  }

  //键盘点击事件
  _keyboardEvent() {
    let _this = this,
      allEle = document.querySelectorAll(".keyboard span"),
      array = [];
    (!allEle.length && array.push(allEle)) || (array = [...allEle]);
    for (let i = 0; i < array.length; i++) {
      (function (i) {
        array[i].addEventListener(
          "click",
          function (e) {
            let txt = this.innerText,
              inputSpanAll = document.querySelectorAll(
                _this.entryInputName + " span[data-index]"
              );
            if (!inputSpanAll) throw new Error("entryInputNa不能为空");
            if (_this.hasClass(this, "keyboard__switch")) {
              //中文英文切换
              _this._switchEnOrCh();
            } else if (_this.hasClass(this, "keyboard__del")) {
              //删除操作
              (!_this.__writeBoxNameDom__ &&
                _this._builtInDel(_this, inputSpanAll)) ||
                _this._delWriteBoxName();
            } else {
              //键盘输入操作
              _this._externalOrBuilt(txt, inputSpanAll);
            }
            _this.onChange?.(txt);
            _this._eventBubbling(e);
          },
          false
        );
      })(i);
    }
  }

  //内置或者外置显示键盘框赋值
  _externalOrBuilt(txt, inputSpanAll, isDisbaledMoveFocus) {
    this.saveValue[this.index] = txt;
    if (!this.__writeBoxNameDom__) {
      this._builtInEvalua(inputSpanAll, txt, isDisbaledMoveFocus);
    } else {
      this.index < this.inputNumber - this.inpRedundantLen && this.index++;
      this.index >= 1 && (this.status = true) && this._switchEnOrCh();
      (this.__writeBoxIsInput__ &&
        ((this.__writeBoxNameDom__.value = this.getVehicleValue()),
        this.__writeBoxNameDom__.focus())) ||
        (this.__writeBoxNameDom__.innerText = this.getVehicleValue());
    }
  }

  //内置自己生成的input赋值操作
  _builtInEvalua(inputSpanAll, txt, isDisbaledMoveFocus = true) {
    //isDisbaledMoveFocus是否禁用点击自动到下一位
    let especialExis = this.hasClass(
      document.querySelector(".keyboardInp span:last-child"),
      "keyboard__especial"
    );
    inputSpanAll[this.index].innerHTML = txt;
    Array.from(inputSpanAll).forEach((item) => {
      this.removeClass(item, "keyboard__active");
    });
    if (especialExis && this.index == 6) {
      this.addClass(inputSpanAll[this.index], "keyboard__active");
      return false;
    }
    if (isDisbaledMoveFocus) {
      this.index < this.inputNumber - this.inpRedundantLen && this.index++;
      this.addClass(inputSpanAll[this.index], "keyboard__active");
      this.index >= 1 && ((this.status = true), this._switchEnOrCh());
    }
  }

  //内置自己生成的input删除操作
  _builtInDel(_this, inputSpanAll) {
    inputSpanAll[_this.index].innerHTML = "";
    Array.from(inputSpanAll).forEach((item) => {
      _this.removeClass(item, "keyboard__active");
    });
    _this.saveValue[_this.index] = "";
    if (_this.index > 0 && !_this.saveValue[_this.index]) {
      _this.index--;
    } else if (_this.index == 0) {
      _this.status = false;
      _this._switchEnOrCh();
    }
    _this.addClass(inputSpanAll[_this.index], "keyboard__active");
  }

  //输入框点击事件
  _keyboardInpEvent() {
    let _this = this,
      array = [],
      allEle = document.querySelectorAll(
        this.entryInputName + " span[data-index]"
      );
    (!allEle.length && array.push(allEle)) || (array = [...allEle]);
    for (let i = 0; i < array.length; i++) {
      (function (i) {
        array[i].addEventListener(
          "click",
          function (e) {
            let inputSpanAll = document.querySelectorAll(
              _this.entryInputName + " span[data-index]"
            );
            let especialExis = _this.hasClass(
              document.querySelector(".keyboardInp span:last-child"),
              "keyboard__especial"
            );
            let dataIndex = this.getAttribute("data-index");
            let keyboardShow = _this.__keyboardDom__.style.display;
            keyboardShow == "none" && _this.keyboardShow();
            especialExis &&
              dataIndex == 7 &&
              ((this.innerHTML = ""),
              _this.removeClass(
                document.querySelector(".keyboardInp span:last-child"),
                "keyboard__especial"
              ));
            _this.status = dataIndex != 0;
            _this._switchEnOrCh();
            Array.from(inputSpanAll).forEach((item) => {
              _this.removeClass(item, "keyboard__active");
            });
            _this.addClass(inputSpanAll[dataIndex], "keyboard__active");
            _this.index = dataIndex;
            _this._eventBubbling(e);
          },
          false
        );
      })(i);
    }
  }

  //输入框外置键盘点击事件
  _keyboardExternalEvent() {
    let inputSpanAll = document.querySelectorAll(
      this.entryInputName + " span[data-index]"
    );
    if (!inputSpanAll) throw new Error("entryInputNa是否为空");
    this.externalKeyboard &&
      this.entryInputName &&
      Array.from(inputSpanAll).forEach((item) => {
        item.setAttribute("contenteditable", true);
        item.addEventListener("keydown", (e) => {
          item.innerHTML = "";
        });
        item.addEventListener("keyup", (e) => {
          this._externalOrBuilt(item.innerHTML, inputSpanAll, false);
        });
      });
  }

  //判断按的是字母和数字
  _regNumberOrLetter(key) {
    let reg = /^[a-zA-Z0-9]/g;
    return reg.test(key);
  }

  //监听显示车牌的是input框时做的操作
  _monitorInputClick() {
    this.__writeBoxNameDom__?.addEventListener("keydown", (e) => {
      e.keyCode === 8 && this._delWriteBoxName();
    });
  }

  //删除writeBoxName的操作
  _delWriteBoxName() {
    this.onBackpace?.();
    (this.index > 0 && !this.saveValue[this.index] && this.index--) ||
      (this.index == 0 && ((this.status = false), this._switchEnOrCh()));
    this.saveValue[this.index] = "";
    !!this.__writeBoxNameDom__ &&
      ((this.__writeBoxIsInput__ &&
        ((this.__writeBoxNameDom__.value = this.getVehicleValue()),
        this.__writeBoxNameDom__.focus(),
        (this.index = this.getVehicleValue().length))) ||
        (this.__writeBoxNameDom__.innerText = this.getVehicleValue()));
  }

  //中英文切换
  _switchEnOrCh() {
    this.status = !this.status;
    if (this.status) {
      document.querySelector(".keyboard .keyboard__ch").style.display = "block";
      document.querySelector(".keyboard .keyboard__en").style.display = "none";
    } else {
      document.querySelector(".keyboard .keyboard__ch").style.display = "none";
      document.querySelector(".keyboard .keyboard__en").style.display = "block";
    }
  }

  //外置输入框点击显示键盘
  _builtInShow() {
    let _this = this;
    if (!this.__writeBoxNameDom__) return;
    this._getVehicleSplit();
    this.__writeBoxNameDom__.addEventListener("click", function (e) {
      _this.keyboardShow();
      _this._eventBubbling(e);
    });
    this.__keyboardDom__.addEventListener("click", function (e) {
      _this.keyboardShow();
      _this._eventBubbling(e);
    });
  }

  //循环添加键盘
  _loopSpan() {
    let chArray = this.chArray,
      enArray = this.enArray,
      chBox = document.createElement("div"),
      enBox = document.createElement("div"),
      keyboard = document.createElement("div");
    enBox.style.display = "none";
    chBox.className = "keyboard__ch";
    enBox.className = "keyboard__en";
    keyboard.className = "keyboard";

    keyboard.appendChild(
      this._splicingKeyboard({
        _array: chArray,
        finalBox: chBox,
        thatKeyboardEnable: this.enabledCh,
      })
    );
    keyboard.appendChild(
      this._splicingKeyboard({
        _array: enArray,
        finalBox: enBox,
        thatKeyboardEnable: this.enabledEn,
      })
    );
    this.append(keyboard);
    this.__keyboardDom__ = keyboard;
    this.__keyboardDom__.onclick = (e) => this._eventBubbling(e);
    this.__writeBoxNameDom__ =
      (this.writeBoxName && document.querySelector(this.writeBoxName)) || null;
    this.onComplate?.();
  }

  //拼接html
  _splicingKeyboard({ _array, finalBox, thatKeyboardEnable }) {
    let _this = this,
      html = "",
      _arrayLen = _array.length,
      lineRow = Math.ceil(_array.length / this.line);
    _array.forEach((item, index) => {
      let spanBox = `<span class="${_this._arrayIsNoEnabled(
        item,
        thatKeyboardEnable
      )}">${item}</span>`;
      if (index % lineRow == 0 && index != 0) {
        let div = document.createElement("div");
        div.className = "keyboard__line";
        div.innerHTML = html;
        finalBox.appendChild(div);
        html = "";
      }
      index == _arrayLen - 2 &&
        (spanBox = `<span class="keyboard__switch">${item}</span>`);
      index == _arrayLen - 1 &&
        (spanBox = `<span class="keyboard__del"></span>`);
      html += spanBox;
      if (index == _arrayLen - 1) {
        let div = document.createElement("div");
        div.className = "keyboard__line";
        div.innerHTML = html;
        finalBox.appendChild(div);
      }
    });
    return finalBox;
  }

  //判断键值是否需要禁用
  _arrayIsNoEnabled(val, thatKeyboard) {
    return (
      (thatKeyboard.find((item) => val == item.toLocaleUpperCase()) &&
        "keyboard__enable--btn") ||
      ""
    );
  }

  //获取页面传的车牌字符串
  _getVehicleSplit() {
    if (
      !!this.defaultVehicleValue &&
      typeof this.defaultVehicleValue == "string"
    ) {
      this.defaultVehicleValue = this.defaultVehicleValue.toLocaleUpperCase();
      this.saveValue = [...this.defaultVehicleValue.split("")];
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
        _this.entryInputName + " span[data-index]"
      );
      Array.from(inputSpanAll).forEach(function (item) {
        let dataIndex = item.getAttribute("data-index");
        _this.removeClass(item, "keyboard__active");
        if (dataIndex >= _this.saveValue.length) {
          dataIndex == _this.saveValue.length &&
            (_this.addClass(item, "keyboard__active"),
            (_this.index = dataIndex));
          return false;
        }
        !!dataIndex && (item.innerHTML = _this.saveValue[dataIndex]);
      });
    } else {
      this.index = this.saveValue.length;
      this.__writeBoxNameDom__.focus();
      this.__writeBoxNameDom__.innerHTML = this.defaultVehicleValue;
      this.__writeBoxNameDom__.value = this.defaultVehicleValue;
    }
  }

  //事件冒泡
  _eventBubbling(event) {
    let e = event || window.event;
    (e.stopPropagation && e.stopPropagation()) || (e.cancelBubbel = true);
  }

  //监听input的change事件
  _inputChangeEvent() {
    let _this = this;
    this._inputFocusEvent();
    this.__writeBoxIsInput__ &&
      this.__writeBoxNameDom__.addEventListener("keyup", function () {
        _this.saveValue = this.value.toLocaleUpperCase().split("");
      });
  }

  //获取焦点事件
  _inputFocusEvent() {
    this.__writeBoxIsInput__ &&
      this.__writeBoxNameDom__?.addEventListener("keydown", () => {
        this.index = this._getPosition(this);
      }) &&
      this.__writeBoxNameDom__?.addEventListener("focus", function () {});
  }

  //判断writeBoxName是否为input
  _isInputFn() {
    if (!this.__writeBoxNameDom__) return;
    ((this.__writeBoxNameDom__.tagName == "INPUT" ||
      this.__writeBoxNameDom__.tagName == "TEXTAREA") &&
      (this.__writeBoxIsInput__ = true)) ||
      (this.__writeBoxIsInput__ = false);
  }

  //获取input光标位置
  _getPosition(element) {
    let cursorPos = 0;
    if (document.selection) {
      //IE
      let selectRange = document.selection.createRange();
      selectRange.moveStart("character", -element.value.length);
      cursorPos = selectRange.text.length;
    } else if (element.selectionStart || element.selectionStart == "0") {
      cursorPos = element.selectionStart;
    }
    return cursorPos;
  }

  //键盘值初始化
  initValue() {
    if (this.__OwnBox__) {
      let inputSpanAll = document.querySelectorAll(
        this.entryInputName + " span[data-index]"
      );
      this.saveValue = [];
      this.index = 0;
      this.status = false;
      this._switchEnOrCh();
      Array.from(inputSpanAll).forEach((item, index) => {
        inputSpanAll[index].innerHTML = "";
        this.removeClass(item, "keyboard__active");
      });
      this.addClass(inputSpanAll[0], "keyboard__active");
      this.addClass(
        inputSpanAll[inputSpanAll.length - 1],
        "keyboard__especial keyboard__item"
      );
      inputSpanAll[inputSpanAll.length - 1].innerHTML = "<font></font>";
      this._getVehicleSplit();
    } else {
      this._builtInShow();
    }
  }

  //获取输入车牌
  getVehicleValue() {
    return this.saveValue.reduce((pre, i) => {
      i !== "" && (pre += i);
      return pre;
    }, "");
  }

  //键盘显示
  show() {
    this.hasClass(this.__keyboardDom__, "keyboard__hide") &&
      this.removeClass(this.__keyboardDom__, "keyboard__hide");
  }
  //键盘显示
  hide() {
    !this.hasClass(this.__keyboardDom__, "keyboard__hide") &&
      this.addClass(this.__keyboardDom__, "keyboard__hide");
  }

  //使用文档
  showDoc() {
    console.table(this.detail);
  }
}

export default Keyboard;
