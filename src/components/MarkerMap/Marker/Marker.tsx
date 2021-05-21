import React, { FC } from 'react';
import { IMarker, MarkerMetaData } from '../../../features/markers';
import { Label } from './styled/Label';

interface MarkerProps extends IMarker {
    updateMarker: (data: MarkerMetaData) => void
}

export const Marker: FC<MarkerProps> = ({ position, updateMarker, id }) => {
  const onInput = (e: React.SyntheticEvent<HTMLDivElement>) => {
    updateMarker({ id, text: (e.target as HTMLDivElement).innerHTML });
  };

  return (
    <Label
      x={position.x}
      y={position.y}
      onInput={onInput}
      contentEditable
      data-testid="marker"
    />
  );
};
