import styled from 'styled-components';
import { MarkerPosition } from '../../../../features/markers';
import {  MARKER_WIDTH, MARKER_HEIGHT } from '../../../../utils/constants/marker';

export const MarkerImg = styled.img`
    position: absolute;
    width: ${MARKER_WIDTH}vw;
    height: ${MARKER_HEIGHT}vh;
    left: ${(props: MarkerPosition) => props.x}vw;
    top: ${(props: MarkerPosition) => props.y}vh;
`;
