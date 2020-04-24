import { getArcPoint } from '../utils/arc2point';

test('arc2point', () => {
    expect(getArcPoint(20, 20, 50, 180)).toStrictEqual([
        { x: -50, y: 0 },
        { x: 50, y: 0 }
    ])
})