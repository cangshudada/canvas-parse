import { ellipse2point } from '../../utils';

const pointArray = ellipse2point(500, 200, 300, 100, 1);

window.onload = function () {
    const cav = <HTMLCanvasElement>document.getElementById('myCanvas');
    const ctx = cav.getContext('2d');
    if (ctx) {
        ctx.beginPath();

        for (let index = 0; index < pointArray.length; index++) {
            if (index === pointArray.length - 1) {
                ctx.moveTo(pointArray[index].x, pointArray[index].y);
                ctx.lineTo(pointArray[0].x, pointArray[0].y);
            } else {
                ctx.moveTo(pointArray[index].x, pointArray[index].y);
                ctx.lineTo(pointArray[index + 1].x, pointArray[index + 1].y);
            }
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ff0000';
        ctx.lineCap = 'round';
        ctx.stroke();
    }

};