import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Img } from './styled/img';
import { Wrapper } from './styled/wrapper';
import { Marker } from './marker';
import { offer, selectors } from '../../features/markers';
import { MarkerInput } from './marker-input';
import { useMarkerInputType, useMarkerInput, markerInputState } from './hooks/useMarkerInput';

interface MarkerMapProps {
    src: string,
};

export const MarkerMap: FC<MarkerMapProps> = ({ src }) => {

    const dispatch = useDispatch();

    const markers = useSelector(selectors.getMarkers);

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
            onDoubleClick={ e => dispatch(offer(e)) }
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
