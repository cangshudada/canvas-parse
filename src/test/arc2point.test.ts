import { getArcPoint } from '../utils/arc2point';

test('arc2point', () => {
    expect(getArcPoint(50, 180, 0, 0)).toStrictEqual([
        { x: -50, y: 0 },
        { x: 50, y: 0 }
    ])
})