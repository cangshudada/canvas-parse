import { getArcPoint, ellipse2point } from '../utils';

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