# canvas_algorithm
🐱‍🐉some canvas graphics parse



> ### arc2point  根据圆生成相应点阵坐标

```typescript
/**
* @description 传入中心点坐标、半径以及点密度 可直接获取圆上相应点阵坐标
* @param {number} x 中心点x坐标
* @param {number} y 中心点y坐标
* @param {number} arc 圆半径
* @param {number} [pointDensity=5] 密度 即两点与中心点连线之间的角度 默认值是5 该值不建议超过30
*/
const pointArray: AcrPoint[] = getPoint(20, 20, 50, 5);
console.log('pointArray >>',pointArray) 
// [{x: 49.809,y:4.3577},{x: 49.2403,y: 8.6824},...{x:50,y:0}]
```

![效果图](https://test.cloudindoormap.com/H5/map/gitImg/arc2point.png)