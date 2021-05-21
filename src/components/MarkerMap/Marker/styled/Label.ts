import styled from 'styled-components';
import { MarkerPosition } from '../../../../features/markers';
import { MARKER_HEIGHT } from '../../../../utils/constants/marker';

export const Label = styled.div`
  position: absolute;
  height: ${MARKER_HEIGHT}px;
  ${(props: MarkerPosition) => {
    const minWidth = MARKER_HEIGHT * 4;
    const left = minWidth / 2;
    return `
    min-width:  ${minWidth}px;
    left: calc(${props.x}% - ${left}px);
    `;
  }}
  top: calc(${(props: MarkerPosition) => props.y}% - ${MARKER_HEIGHT / 2}px);
  background: #ffffff;
  font-family: "Open Sans";
  outline: none;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 5px;
  display: flex;
`;
