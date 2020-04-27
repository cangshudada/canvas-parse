import { AcrPoint } from '../types';

export const getArcPoint = (radius: number, pointDensity: number = 10, x: number = 0, y: number = 0): AcrPoint[] => {

    let angle = pointDensity;
    const angleCount = Math.floor(360 / pointDensity);
    const acrPoint: AcrPoint[] = [];

    for (let i = 0; i < angleCount; i++) {
        const _angle = angle * (i + 1);
        const _x = Math.sqrt(Math.pow(radius, 2) * (1 - Math.pow(Math.sin(_angle * Math.PI / 180), 2)));
        const _y = Math.sqrt(Math.pow(radius, 2) * (1 - Math.pow(Math.cos(_angle * Math.PI / 180), 2)));
        if (_angle <= 90 && 0 < _angle) {
            acrPoint.push({
                x: x + _x,
                y: y + _y
            })
        } else if (_angle > 90 && _angle <= 180) {
            acrPoint.push({
                x: x - _x,
                y: y + _y
            })
        } else if (_angle > 180 && _angle <= 270) {
            acrPoint.push({
                x: _x === x ? x : x - _x,
                y: y - _y
            })
        } else if (_angle > 270 && _angle <= 360) {
            acrPoint.push({
                x: x + _x,
                y: _y === y ? y : y - _y
            })
        }
    }
    return acrPoint
}