[TOC]
# vehicleKeyborad
普通车牌和新能源车牌


![中文键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/ch.jpg)

![EN键盘](https://github.com/zyTheGit/vehicleKeyborad/blob/master/img/en.jpg)

# 适用范围
* 使用flex自动布局，适用于多端
* 中英文键盘都可根据自己的需求定义

# 使用方法
+ 页面引用`dist/keyborad.js`即可
```
 html
  # 外层的盒子名称都可自己定义
  # 和js的boxName、entryInputNa名称对应即可
  <div class="inp"></div>  
  <div class="keyborad"></div>
  
  
 js 页面直接
 var keyBorad = new Keyborad({
      boxName: ".keyborad",
      entryInputNa:".inp"
    });
    keyBorad.init();
```

# new Keyborad(Object) 传的参数
+ `boxName`放置键盘盒子的名称-`String`-必填项
+ `entryInputNa`放置键盘输入框名称-`String`-必填项
+ `chArray`有自己的默认值，显示中文车牌-`Array`-非必填项
+ `enArray`有自己的默认值，显示字母和数字-`Array`-非必填项
+ `line`键盘排列几行，默认显示5行-`Int`-非必填项
+ `pushCh`可以往原有的中文键盘中添加自己的中文-`Array`-非必填项
+ `pushEn`可以往原有的字母和数字键盘中添加自己的字母和数字-`Array`-非必填项
+ `inputLen`现实几个键盘输入框，不建议修改，默认是9个，带中间一个点-`Int`-非必填项

# 返回的事件和参数
+ `init` Function 键盘创建和初始化
+ `getVehicleValue` Function 返回输入的车牌
+ `saveValue` Array 返回输入的车牌
+ `showDoc` Function 显示使用方法

