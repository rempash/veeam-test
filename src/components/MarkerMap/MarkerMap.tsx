import React, { FC, useContext } from 'react';
import { Img } from './styled/Img';
import { Wrapper } from './styled/Wrapper';
import { Marker } from './Marker/Marker';
import { markersContext } from '../../features/markers';

interface MarkerMapProps {
    src: string,
}

export const MarkerMap: FC<MarkerMapProps> = ({ src }: MarkerMapProps) => {
  const { markers, addMarker, updateMarker } = useContext(markersContext);

  return (
    <Wrapper
      data-testid="marker-container"
      onDoubleClick={addMarker}
    >
      <Img
        src={src}
      />
      {
        markers.map(({ text, position, id }) => (
          <Marker
            updateMarker={updateMarker}
            text={text}
            key={id}
            position={position}
            id={id}
          />
        ))
      }
    </Wrapper>
  );
};
