import styled from 'styled-components';
import { MarkerPosition } from '../../../../features/markers';
import {  MARKER_WIDTH, MARKER_HEIGHT } from '../../../../utils/constants/marker';

export const MarkerImg = styled.img`
    position: absolute;
    width: ${MARKER_WIDTH}px;
    height: ${MARKER_HEIGHT}px;
    left: calc(${(props: MarkerPosition) => props.x}% - ${(MARKER_WIDTH / 2)}px);
    top: calc(${(props: MarkerPosition) => props.y}% - ${MARKER_HEIGHT + (MARKER_HEIGHT / 4)}px);
`;
