canvas-parse.js [![npm](https://img.shields.io/npm/v/parse-canvas.svg?style=flat)](https://www.npmjs.com/package/parse-canvas)[![npm](https://img.shields.io/npm/l/parse-canvas.svg?style=flat)](https://www.npmjs.com/package/parse-canvas)
===
🐱‍🐉some canvas graphics parse



## Installation
```bash
npm install --save canvas-parse
//or
yarn add --save canvas-parse
//or
<script src="canvas-parse.js"></script>
```



## Getting Started

```html
<!-- html -->
<canvas id="myCanvas" width="600" height="600" style="border:1px solid #ccc;">
        您的浏览器不支持canvas，请升级浏览器
</canvas>
```
```javascript
// javascript
import canvasParse from 'canvas-parse';

const cav = document.getElementById('myCanvas');
const ctx = cav.getContext('2d');
const pointArray = canvasParse.getArcPoint(20, 20, 50, 5);
if (ctx) {
    ctx.beginPath();
    for (let index = 0; index < pointArray.length; index++) {
        if (index === pointArray.length - 1) {
            ctx.moveTo(pointArray[index].x + 100, pointArray[index].y + 100);
            ctx.lineTo(pointArray[0].x + 100, pointArray[0].y + 100);
        } else {
            ctx.moveTo(pointArray[index].x + 100, pointArray[index].y + 100);
            ctx.lineTo(pointArray[index + 1].x + 100, pointArray[index + 1].y + 100);
        }
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ff0000';
    ctx.lineCap = 'round';
    ctx.stroke();
}
```



> ### getArcPoint  根据圆生成相应点阵坐标

```javascript
/**
* @description 传入中心点坐标、半径以及点密度 可直接获取圆上相应点阵坐标
* @param {number} x 中心点x坐标
* @param {number} y 中心点y坐标
* @param {number} arc 圆半径
* @param {number} [pointDensity=5] 密度 即两点与中心点连线之间的角度 默认值是5 该值不建议超过30
*/
const pointArray = getPoint(20, 20, 50, 5);
console.log('pointArray >>',pointArray) 
// [{x: 49.809,y:4.3577},{x: 49.2403,y: 8.6824},...{x:50,y:0}]
```

![效果图](https://test.cloudindoormap.com/H5/map/gitImg/arc2point.png)

## License
```
Copyright (C) 2016 Bilibili. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```