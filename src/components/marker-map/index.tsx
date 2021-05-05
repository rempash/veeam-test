import React, { FC, useContext } from 'react';
import { Img } from './styled/img';
import { Wrapper } from './styled/wrapper';
import { Marker } from './marker';
import { markersContext } from '../../features/markers';

interface MarkerMapProps {
    src: string,
}

export const MarkerMap: FC<MarkerMapProps> = ({ src }: MarkerMapProps) => {

  const { markers, addMarker, updateMarker } = useContext(markersContext);

  return (
    <Wrapper
      onDoubleClick={ (e) => addMarker(e) }
    >
            <Img
                src={src}
            />
            {
                markers.map(({ text, position, id }) => (
                    <Marker
                        updateMarker={ updateMarker }
                        text={ text }
                        key={ id }
                        position={ position }
                        id={ id }
                    />
                ))
            }
    </Wrapper>
  )
};
