import styled from 'styled-components';
import { markerInputState } from '../../hooks/useMarkerInput';

interface markerInputWrapperProps extends markerInputState {
    width?: number,
    height?: number
}

export const Wrapper = styled.div`
    ${({ x, y, width = 10, height = 11 }: markerInputWrapperProps) => {
        return `
        width: ${width}vw;
        height: ${height}vh;
        left: ${x - (width / 2.25)}vw;
        top: ${y + (height / 5)}vh;
        `;
    }}
    position: absolute;
    padding: 10px;
    z-index: 999;
`;
