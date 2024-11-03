# vehicleKeyboard

普通车牌和新能源车牌

- 中文键盘

![中文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/ch.png)

- 英文键盘

![英文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/en.png)

# 适用范围

- 使用 `flex` 自动布局，适用于多端
- 中英文键盘都可根据自己的需求定义
- 可模块化导入
- 可以浏览器中直接引入，支持`umd`方式引入
- 支持`Vue`、`React`等框架

# 安装

```shell
npm install vehicle-keyboard-js
```

或者通过`cdn`引入

1. 引入`js`
```js
<script src="https://unpkg.com/vehicle-keyboard-js@1.0.16/lib/Keyboard.min.js"></script>
```
2. 引入样式
```css
<link rel="stylesheet" href="https://unpkg.com/vehicle-keyboard-js@1.0.16/lib/style/default.css"></link>
```

## Vue 中使用

```vue
<script setup>
import { ref, onMounted } from "vue";
import Keyboard from "vehicle-keyboard-js";
// 须单独引入默认样式，也可自定义样式
import "vehicle-keyboard-js/lib/style/default.css";

const keyboard = ref();

keyboard.value = new Keyboard({
  boxName: ".box",
  // writeBoxName: ".inp",
  entryInputNa: ".inp",
  pageVehicleSplit: "鄂j401",
  pushCh: ["中", "国", "加", "油"],
  pushEn: ["1"],
  enabledEn: ["O", "j", "1"],
  enabledCh: ["油"],
  externalKeyboard: true, //是否启用自己的键盘
  backpaceFn: function () {
    console.log("backpaceFn=>删除事件的回调");
    console.log(keyboard.value.getVehicleValue());
  },
});

onMounted(() => {
  keyboard.value.init();
});
</script>

<template>
  <div class="inp"></div>
  <div class="box"></div>
</template>
```

## 使用`cdn`引入使用

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
  writeBoxName: ".inp",
});

//1.2或者使用内置创建的输入框
let keyboard = new Keyboard({
  boxName: ".keyboard",
  entryInputNa: ".inp",
  pageVehicleSplit: "鄂j401", //页面传的车牌
  keyboardFn: () => {}, //键盘点击回调事件
  backpaceFn: () => {}, //键盘backpace点击回调事件
});

//2. 初始化生成键盘
keyboard.init();
```

# new Keyboard(params:object) 传的参数

- **`boxName`** 放置键盘盒子的名称-`string`-**必填项**；
- `entryInputNa`放置键盘输入框名称-`string`-非必填项（`writeBoxName` 为空时，必填）,不能是 `input` 框，应该为一个盒子；
- `writeBoxName`存键盘操作的值的 `input` 或者盒子-`string`-非必填项（`entryInputNa`为空时，必填）；
- `chArray`有自己的默认值，显示中文车牌-`string|number[]`-非必填项；
- `enArray`有自己的默认值，显示字母和数字-`string|number[]`-非必填项；
- `keyboardShowRowNum`键盘排列几行，默认显示 5 行-`number`-非必填项；
- `pushCh`可以往原有的中文键盘中添加自己的中文-`string|number[]`-非必填项；
- `pushEn`可以往原有的字母和数字键盘中添加自己的字母和数字-`string|number[]`-非必填项；
- `inputLen`现实几个键盘输入框，默认是 `9` 个(其实显示出来是 `8` 位的车牌)，带中间一个点-`number`-非必填项；
- `keyboardFn`点击键盘的回调函数，没有返回值，只有回调，-`Function`-非必填项；
- `pageVehicleSplit`: "页面中传来的部分车牌，`string`-非必填项；
- `enabledCh`: "需要禁用的中文键-`string|number[]`-非必填项"；
- `enabledEn`: "需要禁用的英文键-`string|number[]`-非必填项"；
- `externalKeyboard`:是否启用内置键盘-`Boolean`-非必填项，默认`false`不开启，`entryInputNa`存在时才起作用,(开启原生自带键盘输入的方式)；

# 返回的事件和参数

- `init` -`Function`- 键盘创建和初始化 -**必须执行函数初始化**
- `getVehicleValue` -`Function`- 返回输入的车牌
- `saveValue` -`string|number[]`- 返回输入的车牌
- `keyboardShow` -`Function`- 键盘显示
- `keyboardHide` -`Function`- 键盘隐藏
- `showDoc` -`Function`- 显示使用文档
- `initValue` -`Function`- 初始化键盘
- `backpaceFn` -`Function`- 键盘上的 `backpack` 键的事件
- `initComplateFn` -`Function`- 键盘创建完成的回调函数

# 版本更新

- **1.0.14**
  - 包由`zy-vehicle-keyboard`更名为`vehicle-keyboard-js`
  - 修复删除事件多返回一位
- **1.0.16**
  - **将 css 抽离到单独的文件中，减少`js`的体积，用户可自定义键盘样式，须用户单独引入 css 样式**
  - 修复切换到第二个输入框，键盘没有自动切换到数字键盘
