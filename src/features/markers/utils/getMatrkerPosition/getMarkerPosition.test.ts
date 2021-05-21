
import { getMarkerPosition } from './getMarkerPosition';

// I don't mock window cause jest made it automatically

test('it should return 0 coordinates with bad args', () => {
    expect(getMarkerPosition({})).toEqual({ x: 0, y: 0 });
});

test('it should return 0 coordinates with bad config types', () => {
    expect(getMarkerPosition({
        clientX: 70,
        clientY: 90,
        width: 200,
        height: 200,
        top: 'string',
        left: 'another string'
    })).toEqual({ x: 0, y: 0 });
});

test("it should return correct coordinates based on input config", () => {
    expect(getMarkerPosition({
        clientX: 70,
        clientY: 90,
        width: 200,
        height: 200,
        top: 25,
        left: 25
    })).toEqual({ x: 22.5, y: 32.5 });
});

