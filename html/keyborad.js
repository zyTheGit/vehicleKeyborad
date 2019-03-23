require("./keyborad.css");
(function (window,document) {
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
      if (!arrayEl.length) {
        array.push(arrayEl);
      } else {
        array = [...arrayEl];
      }
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
      entryInputNa,
      writeBoxName,
      chArray,
      enArray,
      line,
      pushCh,
      pushEn,
      inputLen,
      keyboardFn
    }) {
      super(boxName);
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
      //显示多少行
      this.line = line || 5;
      //向中文键盘添加
      this.pushCh = pushCh || [];
      //向中文键盘添加
      this.pushEn = pushEn || [];
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
      //版本号
      this.version = "1.0.0";
	  //键盘点击回调
	  this.keyboardFn=keyboardFn||null;
      //使用详细
      this.detail = {
        boxName: "放置键盘盒子的名称-String-必填项",
        entryInputNa: "放置键盘输入框名称-String-非必填项（writeBoxName为空时，必填）",
        writeBoxName: "显示操作键盘值的盒子的名称,input或者其他的元素都可以支持-String-非必填项（entryInputNa为空时，必填）",
        chArray: "有自己的默认值，显示中文车牌-Array-非必填项",
        enArray: "有自己的默认值，显示字母和数字-Array-非必填项",
        line: "键盘排列几行，默认显示5行-Int-非必填项",
        pushCh: "可以往原有的中文键盘中添加自己的中文-Array-非必填项",
        pushEn: "可以往原有的字母和数字键盘中添加自己的字母和数字-Array-非必填项",
        inputLen: "现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-Int-非必填项"
      }
    }
    init() {
      this.chArray = this.chArray.concat(this.pushCh, ["中/EN", "删除"]);
      this.enArray = this.enArray.concat(this.pushEn, ["中/EN", "删除"]);
      this.createKeyBorad();
      //如果writeBoxName和entryInputNa全部传了参数，已用户自己的输入框为主
      if (!!this.writeBoxName && !!this.entryInputNa) this.entryInputNa = "";
      if (!this.writeBoxName) {
        if (!this.entryInputNa) {
          throw new Error("entryInputNa或者writeBoxName字段是否为空");
        }
        this.createInp();
      } else {
        this.builtInShow();
      }
    }
    createKeyBorad() {
      if (!this.boxName) {
        console.error("搁置键盘盒子的名称字段必要的'boxName'");
        return false;
      }
      this.loopSpan();
      this.keyboradEvent();
    }

    //生成input输入框
    createInp() {
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
      this.keyboradInpEvent();
    }

    //键盘点击事件
    keyboradEvent() {
      let _this = this,
        allEle = document.querySelectorAll(".keyboradZy span"),
        array = [];
      if (!allEle.length) {
        array.push(allEle);
      } else {
        array = [...allEle];
      }
      for (let i = 0; i < array.length; i++) {
        (function (i) {
          array[i].addEventListener(
            "click",
            function (e) {
              let txt = this.innerText;
              let inputSpanAll = document.querySelectorAll(
                _this.entryInputNa + " span[data-index]"
              );
              if (!inputSpanAll) throw new Error("entryInputNa是否为空");
              if (_this.hasClass(this, "keyborad_switch")) {
                //中文英文切换
                _this.switchEnOrCh();
              } else if (_this.hasClass(this, "keyborad_del")) {
                //删除操作
                _this.saveValue[_this.index] = "";
                if (!_this.writeBoxName) {
                  _this.builtInDel(_this, inputSpanAll);
                } else {
                  let writeBoxName = document.querySelector(_this.writeBoxName);
                  if (_this.index > 0) {
                    _this.index--;
                  } else {
                    _this.status = false;
                    _this.switchEnOrCh();
                  }
                  (writeBoxName.innerText) ? writeBoxName.innerText = _this.getVehicleValue(): writeBoxName.value = _this.getVehicleValue();
                };
              } else {
                //键盘输入操作
                _this.saveValue[_this.index] = txt;
                if (!_this.writeBoxName) {
                  _this.builtInEvalua(_this, inputSpanAll, txt);
                } else {
                  let writeBoxName = document.querySelector(_this.writeBoxName);
                  if (_this.index < _this.inputLen - _this.inpRedundantLen) _this.index++;
                  if (_this.index >= 1) {
                    _this.status = true;
                    _this.switchEnOrCh();
                  }
                  (writeBoxName.value === undefined) ? writeBoxName.innerText = _this.getVehicleValue(): writeBoxName.value = _this.getVehicleValue();
                };
              }
			  _this.keyboardFn&&_this.keyboardFn();
              _this.eventBubbling(e);
            },
            false
          );
        })(i);
      }
    }

    //内置自己生成的input赋值操作
    builtInEvalua(_this, inputSpanAll, txt) {
      let especialExis = _this.hasClass(
        document.querySelector(".keyboradInp span:last-child"),
        "keyborad_especial"
      );
      inputSpanAll[_this.index].innerHTML = txt;
      inputSpanAll.forEach(item => {
        _this.removeClass(item, "keyborad_active");
      });
      if (especialExis && _this.index == 6) {
        _this.addClass(inputSpanAll[_this.index], "keyborad_active");
        return false;
      }
      if (_this.index < _this.inputLen - _this.inpRedundantLen) {
        _this.index++;
      }
      _this.addClass(inputSpanAll[_this.index], "keyborad_active");
      if (_this.index >= 1) {
        _this.status = true;
        _this.switchEnOrCh();
      }
    }

    //内置自己生成的input删除操作
    builtInDel(_this, inputSpanAll) {
      inputSpanAll[_this.index].innerHTML = "";
      inputSpanAll.forEach(item => {
        _this.removeClass(item, "keyborad_active");
      });
      if (_this.index > 0) {
        _this.index--;
      } else {
        _this.status = false;
        _this.switchEnOrCh();
      }
      _this.addClass(inputSpanAll[_this.index], "keyborad_active");
    }

    //输入框点击事件
    keyboradInpEvent() {
      let _this = this,
        allEle = document.querySelectorAll(
          this.entryInputNa + " span[data-index]"
        ),
        array = [];
      if (!allEle.length) {
        array.push(allEle);
      } else {
        array = [...allEle];
      }
      for (let i = 0; i < array.length; i++) {
        (function (i) {
          array[i].addEventListener(
            "click",
            function (e) {
              let inputSpanAll = document.querySelectorAll(
                _this.entryInputNa + " span[data-index]"
              );
              let especialExis = _this.hasClass(
                document.querySelector(".keyboradInp span:last-child"),
                "keyborad_especial"
              );
              let dataIndex = this.getAttribute("data-index");
              let keyboradShow = document.querySelector(".keyboradZy").style
                .display;
              if (keyboradShow == "none") {
                _this.keyboradShow();
              }
              if (especialExis && dataIndex == 7) {
                this.innerHTML = "";
                _this.removeClass(
                  document.querySelector(".keyboradInp span:last-child"),
                  "keyborad_especial"
                );
              }
              if (dataIndex == 0) {
                _this.status = false;
                _this.switchEnOrCh();
              }
              inputSpanAll.forEach(item => {
                _this.removeClass(item, "keyborad_active");
              });
              _this.addClass(inputSpanAll[dataIndex], "keyborad_active");
              _this.index = dataIndex;
              _this.eventBubbling(e);
            },
            false
          );
        })(i);
      }
    }

    //中英文切换
    switchEnOrCh() {
      this.status = !this.status;
      if (this.status) {
        document.querySelector(".keyboradZy .ch").style.display = "block";
        document.querySelector(".keyboradZy .en").style.display = "none";
      } else {
        document.querySelector(".keyboradZy .ch").style.display = "none";
        document.querySelector(".keyboradZy .en").style.display = "block";
      }
    }

    //键盘显示
    keyboradShow() {
      document.querySelector(".keyboradZy").style.display = "block";
    }
    //键盘显示
    keyboradHide() {
      document.querySelector(".keyboradZy").style.display = "none";
    }

    //外置输入框点击显示键盘
    builtInShow() {
      let _this = this;
      let writeBoxName = document.querySelector(_this.writeBoxName);
      if (!writeBoxName) return false;
      writeBoxName.addEventListener("click",function(e){
        _this.keyboradShow();
        _this.eventBubbling(e);
      }) 
    }

    //循环添加元素
    loopSpan() {
      let _this = this,
        htmlCh = "",
        htmlEn = "",
        chArray = this.chArray,
        enArray = this.enArray,
        lineCh = Math.ceil(chArray.length / _this.line),
        lineEn = Math.ceil(enArray.length / _this.line),
        chBox = document.createElement("div"),
        enBox = document.createElement("div"),
        keyboradZy = document.createElement("div");
      enBox.style.display = "none";
      chBox.className = "ch";
      enBox.className = "en";
      keyboradZy.className = "keyboradZy";
      chArray.forEach((item, index) => {
        let spanBox = `<span>${item}</span>`;
        if (index % lineCh == 0 && index != 0) {
          let div = document.createElement("div");
          div.innerHTML = htmlCh;
          chBox.appendChild(div);
          htmlCh = "";
        }
        if (index == chArray.length - 2) {
          //中英文切换
          spanBox = `<span class="keyborad_switch">${item}</span>`;
        }
        if (index == chArray.length - 1) {
          //删除
          spanBox = `<span class="keyborad_del">${item}</span>`;
        }
        htmlCh += spanBox;
        if (index == chArray.length - 1) {
          let div = document.createElement("div");
          div.innerHTML = htmlCh;
          chBox.appendChild(div);
        }
      });
      enArray.forEach((item, index) => {
        let spanBox = `<span>${item}</span>`;
        if (index % lineEn == 0 && index != 0) {
          let div = document.createElement("div");
          div.innerHTML = htmlEn;
          enBox.appendChild(div);
          htmlEn = "";
        }
        if (index == enArray.length - 2) {
          //中英文切换
          spanBox = `<span class="keyborad_switch">${item}</span>`;
        }
        if (index == enArray.length - 1) {
          //删除
          spanBox = `<span class="keyborad_del">${item}</span>`;
        }
        htmlEn += spanBox;
        if (index == enArray.length - 1) {
          let div = document.createElement("div");
          div.innerHTML = htmlEn;
          enBox.appendChild(div);
        }
      });
      keyboradZy.appendChild(chBox);
      keyboradZy.appendChild(enBox);
      this.append(keyboradZy);
    }

    //事件冒泡
    eventBubbling(event) {
      let e = event || window.event;
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubbel = true);
    }

    //使用文档
    showDoc() {
      console.table(this.detail)
    }

    //获取输入车牌
    getVehicleValue() {
      if (this.saveValue.length == 0) return "";
      let html = "";
      this.saveValue.forEach((item) => {
        html += item;
      })
      return html;
    }
  }
  window.Keyboard = Keyboard;
})(window,document)
