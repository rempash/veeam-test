import styled from 'styled-components';
import { MarkerPosition } from '../../../../features/markers';
import {  MARKER_WIDTH, MARKER_HEIGHT } from '../../../../utils/constants/marker';

export const MarkerImg = styled.img`
    position: absolute;
    width: ${MARKER_WIDTH}px;
    height: ${MARKER_HEIGHT}px;
    left: calc(${(props: MarkerPosition) => props.x}vw - ${(MARKER_WIDTH/2)}px);
    top: calc(${(props: MarkerPosition) => props.y}vh - ${MARKER_HEIGHT}px);
`;
