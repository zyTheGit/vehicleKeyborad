
# vehicleKeyboard
普通车牌和新能源车牌

![中文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/ch.jpg)

![EN键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/en.jpg)

# 适用范围
* 使用flex自动布局，适用于多端
* 中英文键盘都可根据自己的需求定义

# 使用方法
+ 页面引用`dest/keyboard.js`即可
```
 html
  # 外层的盒子名称都可自己定义
  # 和js的boxName、entryInputNa名称对应即可
  <div class="inp"></div>  
  <div class="keyboard"></div>
  
  
 js 页面直接
 ** 虽然样式名称还是keyborad但是调用时已经修改为KeyBoard **
 1.显示写的输入框
    var keyboard = new Keyboard({
      boxName: ".keyboard",
      writeBoxName:".inp"
    });
    
  or 
2.使用内置创建的输入框
   var keyboard = new Keyboard({
    boxName: ".keyboard",
    entryInputNa:".inp",
    pageVehicleSplit:"鄂j401",//页面传的车牌
    keyboardFn:function(){},//键盘点击回调事件
    backpaceEventFn:function(){},//键盘backpace点击回调事件
   });
    
   keyboard.init();
```

# new Keyboard(Object) 传的参数
+ **`boxName`** 放置键盘盒子的名称-`String`-**必填项**
+ `entryInputNa`放置键盘输入框名称-`String`-非必填项（writeBoxName为空时，必填）,不能是input框，应该为一个盒子
+ `writeBoxName`存键盘操作的值的input或者盒子-`String`-非必填项（entryInputNa为空时，必填）
+ `chArray`有自己的默认值，显示中文车牌-`Array`-非必填项
+ `enArray`有自己的默认值，显示字母和数字-`Array`-非必填项
+ `keyboardShowRowNum`键盘排列几行，默认显示5行-`Int`-非必填项
+ `pushCh`可以往原有的中文键盘中添加自己的中文-`Array`-非必填项
+ `pushEn`可以往原有的字母和数字键盘中添加自己的字母和数字-`Array`-非必填项
+ `inputLen`现实几个键盘输入框，默认是9个(其实显示出来是8位的车牌)，带中间一个点-`Int`-非必填项
+ `keyboardFn`点击键盘的回调防暑，-Function-非必填项
+ `pageVehicleSplit`: "页面中传来的部分车牌，String-非必填项
+ `enabledCh`: "需要禁用的中文键-Array-非必填项",
+ `enabledEn`: "需要禁用的英文键-Array-非必填项"

# 返回的事件和参数
+ `init` -Function- 键盘创建和初始化 -**必须执行函数初始化**
+ `getVehicleValue` -Function- 返回输入的车牌
+ `saveValue` -Array- 返回输入的车牌
+ `keyboardShow` -Function- 键盘显示
+ `keyboardHide` -Function- 键盘隐藏
+ `showDoc` -Function- 显示使用文档
+ `initValue` -Function- 初始化键盘
+ `backpaceEventFn` -Function- 键盘上的backpack键的事件
+ `initComplateFn` -Function- 键盘创建完成的回调函数

# 版本更新
* 新增键盘返回键事件
* 可以使用require 导入
* 新增自定义键盘 
* 新增预设车牌
* 新增键盘重置方法
* 使用input显示输入车牌时，可以使用自己的键盘输入
* 优化代码，使用`与或`取代`if`
* 如果需要引用es6 语法`import`导出请调用`dest/keyboard.es6.js`


