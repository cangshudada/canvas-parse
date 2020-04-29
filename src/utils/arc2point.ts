import { AcrPoint } from '../types';

/**
* @description 传入中心点坐标、半径以及点密度 可直接获取圆上相应点阵坐标
* @param {number} raduis 圆半径
* @param {number} [pointDensity=5] 密度 即两点与中心点连线之间的角度 默认值是5 该值不建议超过30
* @param {number} [x=0] 中心点x坐标
* @param {number} [y=0] 中心点y坐标
*/
export const getArcPoint = (radius: number, pointDensity: number = 5, x: number = 0, y: number = 0): AcrPoint[] => {

    const _pointDensity = Math.abs(pointDensity);
    const angleCount = Math.floor(360 / _pointDensity);
    const acrPoint: AcrPoint[] = [];
    let angle = _pointDensity;

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