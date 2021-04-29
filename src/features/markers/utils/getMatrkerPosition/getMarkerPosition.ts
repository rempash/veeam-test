
import { MarkerPosition } from '../../index';

export const getMarkerPosition = (clientX: number, clientY : number): MarkerPosition => {
    if (!clientX || !clientY || ([clientX, clientY].some(arg => typeof arg !== 'number'))) return { x: 0, y: 0 };
    const roundTo2 = (n: number): number => Math.round(n * 100) / 100;
    const windowWidth: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const x: number = roundTo2(100 * clientX / windowWidth);
    const windowHeigth: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const y: number = roundTo2(100 * clientY / windowHeigth);
    return { x, y };
};

