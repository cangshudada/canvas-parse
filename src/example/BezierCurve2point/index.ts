import { BezierCurve2point } from '../../utils';

const pointArray = new BezierCurve2point().getBezierCurvePoint(150, { x: 300, y: 250 }, { x: 560, y: 700 }, { x: 320, y: 50 }, { x: 700, y: 500 });
window.onload = function () {
    const cav = <HTMLCanvasElement>document.getElementById('myCanvas');
    const ctx = cav.getContext('2d');

    if (ctx) {
        ctx.beginPath()
        for (let index = 0; index < pointArray.length; index++) {
            if (index === pointArray.length - 1) {
                break
            } else {
                ctx.moveTo(pointArray[index].x, pointArray[index].y);
                ctx.lineTo(pointArray[index + 1].x, pointArray[index + 1].y);
            }
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
};