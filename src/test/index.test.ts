import { getArcPoint, ellipse2point, BezierCurve2point } from '../utils';

test('arc2point', () => {
    expect(getArcPoint(50, 180, 0, 0)).toStrictEqual([
        { x: -50, y: 0 },
        { x: 50, y: 0 }
    ])
})

test('ellipse2point', () => {
    expect(ellipse2point(200, 200, 500, 200, 500)).toStrictEqual([
        { x: -300, y: 200 },
        { x: 200, y: 0 },
        { x: 700, y: 200 },
        { x: 700, y: 200 },
        { x: 200, y: 400 },
        { x: -300, y: 200 }
    ])
})

test('bezierParse', () => {
    expect(new BezierCurve2point().getBezierCurvePoint(5, { x: 100, y: 0 }, { x: 100, y: 100 })).toStrictEqual([
        { x: 100, y: 0 },
        { x: 100, y: 20 },
        { x: 100, y: 40 },
        { x: 100, y: 60 },
        { x: 100, y: 80 },
        { x: 100, y: 100 },
    ])
})