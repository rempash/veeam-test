
import { MarkerPosition } from '../../index';

export interface ClickPosition {
    clientX: number,
    clientY: number,
    left: number,
    top: number,
    width: number,
    height: number,
}

export const getMarkerPosition = ({ clientX, clientY, left, top, height, width }: ClickPosition): MarkerPosition => {
    try {
        const roundTo2 = (n: number): number => Math.round(n * 100) / 100;
        const x: number = roundTo2((clientX - left) / width * 100);
        const y: number = roundTo2((clientY - top) / height * 100);
        return { x, y };
    } catch {
        return { x: 0, y: 0 };
    }
};

