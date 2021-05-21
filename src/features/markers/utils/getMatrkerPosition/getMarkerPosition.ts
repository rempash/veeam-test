import { MarkerPosition } from '../../index';

export interface ClickPosition {
    clientX: number,
    clientY: number,
    left: number,
    top: number,
    width: number,
    height: number,
}

export const getMarkerPosition = ({
  clientX,
  clientY,
  left,
  top,
  height,
  width,
}: ClickPosition): MarkerPosition => {
  const roundTo2 = (n: number): number => Math.round(n * 100) / 100;
  const x: number = roundTo2((clientX - left) / width * 100);
  const y: number = roundTo2((clientY - top) / height * 100);
  if (!([x, y].every(Number.isFinite))) return { x: 0, y: 0 };
  return { x, y };
};
