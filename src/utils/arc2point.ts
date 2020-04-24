import { AcrPoint } from '../typings/index';
export const getPoint = (x: number, y: number, arc: number, pointDensity: number = 10): AcrPoint[] => {

    let angle = pointDensity;
    const angleCount = Math.floor(360 / pointDensity);
    const acrPoint: AcrPoint[] = [];

    for (let i = 0; i < angleCount; i++) {
        const _angle = angle * (i + 1);
        const _x = Math.sqrt(Math.pow(arc, 2) * (1 - Math.pow(Math.sin(_angle * Math.PI / 180), 2)));
        const _y = Math.sqrt(Math.pow(arc, 2) * (1 - Math.pow(Math.cos(_angle * Math.PI / 180), 2)));
        if (_angle <= 90 && 0 < _angle) {
            acrPoint.push({
                x: _x,
                y: _y
            })
        } else if (_angle > 90 && _angle <= 180) {
            acrPoint.push({
                x: -_x,
                y: _y
            })
        } else if (_angle > 180 && _angle <= 270) {
            acrPoint.push({
                x: _x === 0 ? 0 : -_x,
                y: -_y
            })
        } else if (_angle > 270 && _angle <= 360) {
            acrPoint.push({
                x: _x,
                y: _y === 0 ? 0 : -_y
            })
        }
    }
    return acrPoint
}