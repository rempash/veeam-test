
import { MarkerPosition } from '../../index';

export const getMarkerPosition = (clientX: number, clientY : number, left: number, top: number, offsetWidth: number, offsetHeight: number): MarkerPosition => {
    if (!clientX || !clientY || ([clientX, clientY].some(arg => typeof arg !== 'number'))) return { x: 0, y: 0 };
    // const roundTo2 = (n: number): number => Math.round(n * 100) / 100;
    const x: number = (clientX - left) / offsetWidth * 100;
    const y: number = (clientY - top) / offsetHeight * 100;
    return { x, y };
};

