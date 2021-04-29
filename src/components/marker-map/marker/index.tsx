import React, { FC } from 'react';
import { IMarker } from '../../../features/markers';
import { MarkerImg } from './styled/marker-img';
import icon from './assets/marker.svg';
import { markerInputState } from '../hooks/useMarkerInput';

interface MarkerProps extends IMarker {
    showMarker: (value: markerInputState) => void
}

export const Marker: FC<MarkerProps> = ({ position, showMarker, id }) => {
    return (
        <MarkerImg
            onDoubleClick={ e => e.stopPropagation() }
            onClick={ (e) => {
                showMarker({ x: position.x, y: position.y, id });
                e.stopPropagation();
            } }
            src={ icon } x={ position.x }
            y={ position.y }
        />
    );
}
