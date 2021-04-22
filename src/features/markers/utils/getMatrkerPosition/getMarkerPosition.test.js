
import { getMarkerPosition } from './getMarkerPosition';

// I don't mock window cause jest made it automatically

test('it should compute marker position based on window size and incoming coordinates', () => {
    expect(getMarkerPosition(40, 40)).toEqual({ x: 2.91, y: 2.21 });
});

test('it should works without arguments', () => {
    expect(getMarkerPosition()).toEqual({ x: 0, y: 0 });
});

test('it should works with incorrect arguments type', () => {
    expect(getMarkerPosition('x', 'y')).toEqual({ x: 0, y: 0 });
});

