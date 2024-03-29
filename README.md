# vehicleKeyboard

普通车牌和新能源车牌
+ 中文键盘
  
![中文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/ch.png)

+ 英文键盘
  
![英文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/en.png)

# 适用范围

- 使用 `flex` 自动布局，适用于多端
- 中英文键盘都可根据自己的需求定义
- 可模块化导入
- 可以浏览器中直接引入

# 安装
```shell
npm install vehicle-keyboard-js
```
你也可以通过`cdn`引入
```html
<script src="https://unpkg.com/vehicle-keyboard-js@1.0.14/lib/Keyboard.min.js"></script>
```

# 使用方法
  **如果是使用`vue`的话，需要在`mounted`下执行初始化操作**

`html`页面设置
```html
<!-- 外层的盒子名称都可自己定义 -->
<!-- 和js的boxName、entryInputNa名称对应即可 -->
<div class="inp"></div>
<div class="keyboard"></div>
```
键盘初始化
```js
//虽然样式名称还是keyborad但是调用时已经修改为Keyboard
//1.1显示写的输入框
let keyboard = new Keyboard({
    boxName: ".keyboard",
    writeBoxName:".inp"
});

//1.2或者使用内置创建的输入框
let keyboard = new Keyboard({
    boxName: ".keyboard",
    entryInputNa:".inp",
    pageVehicleSplit:"鄂j401",//页面传的车牌
    keyboardFn:()=>{},//键盘点击回调事件
    backpaceFn:()=>{},//键盘backpace点击回调事件
});

//2. 初始化生成键盘
// 在执行初始化的时候如果是使用vue的话，需要在mounted下执行初始化操作
keyboard.init();
```

# new Keyboard(params:object) 传的参数

- **`boxName`** 放置键盘盒子的名称-`String`-**必填项**；
- `entryInputNa`放置键盘输入框名称-`String`-非必填项（`writeBoxName` 为空时，必填）,不能是 `input` 框，应该为一个盒子；
- `writeBoxName`存键盘操作的值的 `input` 或者盒子-`String`-非必填项（`entryInputNa`为空时，必填）；
- `chArray`有自己的默认值，显示中文车牌-`Array`-非必填项；
- `enArray`有自己的默认值，显示字母和数字-`Array`-非必填项；
- `keyboardShowRowNum`键盘排列几行，默认显示 5 行-`Int`-非必填项；
- `pushCh`可以往原有的中文键盘中添加自己的中文-`Array`-非必填项；
- `pushEn`可以往原有的字母和数字键盘中添加自己的字母和数字-`Array`-非必填项；
- `inputLen`现实几个键盘输入框，默认是 `9` 个(其实显示出来是 `8` 位的车牌)，带中间一个点-`Int`-非必填项；
- `keyboardFn`点击键盘的回调函数，没有返回值，只有回调，-`Function`-非必填项；
- `pageVehicleSplit`: "页面中传来的部分车牌，`String`-非必填项；
- `enabledCh`: "需要禁用的中文键-`Array`-非必填项"；
- `enabledEn`: "需要禁用的英文键-`Array`-非必填项"；
- `externalKeyboard`:是否启用内置键盘-`Boolean`-非必填项，`entryInputNa`存在时才起作用,(开启原生自带键盘输入的方式)；

# 返回的事件和参数

- `init` -`Function`- 键盘创建和初始化 -**必须执行函数初始化**
- `getVehicleValue` -`Function`- 返回输入的车牌
- `saveValue` -`Array`- 返回输入的车牌
- `keyboardShow` -`Function`- 键盘显示
- `keyboardHide` -`Function`- 键盘隐藏
- `showDoc` -`Function`- 显示使用文档
- `initValue` -`Function`- 初始化键盘
- `backpaceFn` -`Function`- 键盘上的 `backpack` 键的事件
- `initComplateFn` -`Function`- 键盘创建完成的回调函数

# 版本更新
* **1.0.14**
  - 包由`zy-vehicle-keyboard`更名为`vehicle-keyboard-js`
  - 修复删除事件多返回一位
  

