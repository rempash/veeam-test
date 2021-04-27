import React, { FC, useCallback, useContext } from 'react';
import { Img } from './styled/img';
import { Wrapper } from './styled/wrapper';
import { Marker } from './marker';
import { MarkerInput } from './marker-input';
import { useMarkerInputType, useMarkerInput, markerInputState } from './hooks/useMarkerInput';
import { markersContext } from '../../features/markers';

interface MarkerMapProps {
    src: string,
};

export const MarkerMap: FC<MarkerMapProps> = ({ src }) => {

    const { markers, addMarker } = useContext(markersContext);

    const markerInput: useMarkerInputType = useMarkerInput();

    const showMarker = useCallback(
        (value: markerInputState) => {
            markerInput.dispatch({
                type: markerInput.actions.show,
                payload: value
            });
        },
        [markerInput]
    );

    return (
        <Wrapper
            onDoubleClick={ e => addMarker(e) }
            onClick={ () => markerInput.dispatch({ type: markerInput.actions.hide }) }
        >
            <Img
                src={src}
            />
            <MarkerInput
                x={ markerInput.state.x }
                y={ markerInput.state.y }
                id={ markerInput.state.id }
            />
            {
                markers.map(({ text, position, id }) => (
                    <Marker
                        showMarker={ showMarker }
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
