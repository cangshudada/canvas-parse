import { getPoint } from '../utils/arc2point';

test('arc2point', () => {
    expect(getPoint(20, 20, 50, 180)).toStrictEqual([
        { x: -50, y: 0 },
        { x: 50, y: 0 }
    ])
})