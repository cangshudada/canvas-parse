import { AcrPoint } from '../types';



/**
 *
 * @description 根据椭圆生成相应点阵坐标
 * @param {number} [x=0] 椭圆中心点x坐标
 * @param {number} [y=0] 椭圆中心点y坐标
 * @param {number} radiusX x轴半径
 * @param {number} radiusY y轴半径
 * @param {number} [pointDensity=1] 点阵密度(不建议超过5)
 * @returns {AcrPoint[]}
 */
export const ellipse2point = (x: number = 0, y: number = 0, radiusX: number, radiusY: number, pointDensity: number = 1): AcrPoint[] => {

    let _radiusX = -radiusX;
    let pointAry: AcrPoint[] = [];

    /**
     * @description 生成椭圆上半圈的点
     */
    (function getPoint() {
        let posX, posY;
        if (_radiusX <= radiusX) {
            posX = _radiusX;
            posY = Math.sqrt(1 - Math.pow(_radiusX / radiusX, 2)) * -radiusY;
            _radiusX += pointDensity;

            // 解析椭圆上半圈
            if (!isNaN(posX) && !isNaN(posY)) {
                pointAry.push({
                    x: posX,
                    y: posY === -0 ? 0 : posY
                })
            }
            // 递归调用
            getPoint()
        } else {
            // 椭圆上半圈解析完毕
            return
        }
    })()

    // 翻转上半圈的点
    const reversePoints: AcrPoint[] = JSON.parse(JSON.stringify(pointAry))
    reversePoints.forEach(pos => {
        pos.y = pos.y === 0 ? 0 : -pos.y;
    })

    // 合并成所有点
    pointAry = pointAry.concat(reversePoints.reverse());

    // 兼容传入的中心点坐标
    pointAry.forEach(pos => {
        pos.x += x;
        pos.y += y;
    })

    return pointAry;

}
