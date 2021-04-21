canvas-parse.js [![npm](https://img.shields.io/npm/v/parse-canvas.svg?style=flat)](https://www.npmjs.com/package/parse-canvas) [![npm](https://img.shields.io/npm/l/parse-canvas.svg?style=flat)](https://www.npmjs.com/package/parse-canvas)
===
🐱‍🐉some canvas graphics parse



## Installation
```bash
npm install --save canvas-parse
//or
yarn add --save canvas-parse
```

```html
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
// 圆生成点阵坐标
const arcPointsArray = canvasParse.getArcPoint(50, 5, 20, 20);
// 椭圆生成点阵坐标
const ellipsePointsArray = canvasParse.ellipse2point(500, 200, 300, 100, 1);
// 贝塞尔曲线生成点阵坐标
const bezierCurve2point = new canvasParse.BezierCurve2point();
const bezierCurvePointsArray = bezierCurve2point.getBezierCurvePoint(150, { x: 300, y: 250 }, { x: 560, y: 700 }, { x: 320, y: 50 }, { x: 700, y: 500 });
if (ctx) {
    ctx.beginPath();
    for (let index = 0; index < arcPointsArray.length; index++) {
        if (index === arcPointsArray.length - 1) {
            ctx.moveTo(arcPointsArray[index].x + 100, arcPointsArray[index].y + 100);
            ctx.lineTo(arcPointsArray[0].x + 100, arcPointsArray[0].y + 100);
        } else {
            ctx.moveTo(arcPointsArray[index].x + 100, arcPointsArray[index].y + 100);
            ctx.lineTo(arcPointsArray[index + 1].x + 100, arcPointsArray[index + 1].y + 100);
        }
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ff0000';
    ctx.lineCap = 'round';
    ctx.stroke();
}
```



> ### getArcPoint  根据圆生成相应点阵坐标

|    params    |    sense    |  type  | default | reruire |
| :----------: | :---------: | :----: | :-----: | :-----: |
|    raduis    |    半径     | number |   no    |  true   |
| pointDensity | 生成点密度  | number |    5    |  false  |
|      x       | 中心点x坐标 | number |    0    |  false  |
|      y       | 中心点y坐标 | number |    0    |  false  |



```javascript
/**
* @description 传入中心点坐标、半径以及点密度 可直接获取圆上相应点阵坐标
* @param {number} raduis 圆半径
* @param {number} [pointDensity=5] 密度 即两点与中心点连线之间的角度 默认值是5 该值不建议超过30
* @param {number} [x=0] 中心点x坐标
* @param {number} [y=0] 中心点y坐标
*/
const pointArray = canvasParse.getArcPoint(50, 5, 20, 20);
console.log('pointArray >>',pointArray) 
// [{x: 49.809,y:4.3577},{x: 49.2403,y: 8.6824},...{x:50,y:0}]
```

![效果图](https://test.cloudindoormap.com/H5/map/gitImg/arc2point.png)




> ### ellipse2point  根据椭圆生成相应点阵坐标

|    params    |    sense    |  type  | default | requrie |
| :----------: | :---------: | :----: | :-----: | :-----: |
|      x       | 中心点x坐标 | number |    0    |  false  |
|      y       | 中心点y坐标 | number |    0    |  false  |
|   radiusX    | 椭圆x轴半径 | number |   no    |  true   |
|   radiusY    | 椭圆y轴半径 | number |   no    |  true   |
| pointDensity | 生成点密度  | number |    1    |  false  |



```javascript
/**
 * @description 根据椭圆生成相应点阵坐标
 * @param {number} [x=0] 椭圆中心点x坐标
 * @param {number} [y=0] 椭圆中心点y坐标
 * @param {number} radiusX x轴半径
 * @param {number} radiusY y轴半径
 * @param {number} [pointDensity=1] 点阵密度(不建议超过5)
 * @returns {AcrPoint[]}
*/
const pointArray = canvasParse.ellipse2point(500, 200, 300, 100, 1);
console.log('pointArray >>',pointArray) 
// [{x: 200, y: 200},{x: 201, y: 191.84184116631974},...{x: 200, y: 200}]
```

![效果图](https://test.cloudindoormap.com/H5/map/gitImg/ellipse2point.jpg)



> ### bezierCurve2point 根据贝塞尔曲线生成相应点阵坐标 （含 1-3阶贝塞尔曲线）



|    params    |    sense     |        type         | default | requrie |
| :----------: | :----------: | :-----------------: | :-----: | :-----: |
| pointDensity | 生成点的个数 |       number        |   180   |  true   |
|      p1      |    p1坐标    | {x:number,y:number} |   no    |  true   |
|      p2      |    p2坐标    | {x:number,y:number} |   no    |  true   |
|     cp1      |   控制点1    | {x:number,y:number} |   no    |  false  |
|     cp2      |   控制点2    | {x:number,y:number} |   no    |  false  |

```javascript
/**
 *
 * @description 贝塞尔曲线转点（含1-3阶贝塞尔曲线）cp1和cp2不传则解析一阶贝塞尔 只传cp1则解析二阶  贝塞尔 cp1和cp2都传则解析三阶贝塞尔
 * @param {number} [pointDensity=180] 生成贝塞尔曲线上点的个数 默认为180个
 * @param {AcrPoint} p1 p1坐标
 * @param {AcrPoint} p2 p2坐标
 * @param {AcrPoint} cp1 控制点1
 * @param {AcrPoint} cp2 控制点2
 * @returns {AcrPoint[]}
 */
const bezierCurve2point = new canvasParse.BezierCurve2point();
const pointArray = bezierCurve2point.getBezierCurvePoint(150, { x: 300, y: 250 }, { x: 560, y: 700 }, { x: 320, y: 50 }, { x: 700, y: 500 });
console.log('pointArray >>',pointArray) 
// [{x: 300, y: 250},{x: 300.4477392592592, y: 246.08639999999994},...{x: 562.7309274074074, y: 695.9669333333334},{x: 560, y: 700}]
```



![效果图](https://test.cloudindoormap.com/H5/map/gitImg/bezierCurve2point.jpg)

## License
```
MIT License

Copyright (c) 2021 varon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
