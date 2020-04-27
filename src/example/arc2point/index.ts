import { getArcPoint } from '../../utils/arc2point';
import { AcrPoint } from '../../types';
// 圆解析后的点阵坐标
const pointArray: AcrPoint[] = getArcPoint(50, 5, 20, 20);

window.onload = function () {
    const cav = <HTMLCanvasElement>document.getElementById('myCanvas');
    const ctx = cav.getContext('2d');
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

};