import styled from 'styled-components';
import { markerInputState } from '../../hooks/useMarkerInput';

interface markerInputWrapperProps extends markerInputState {
    width?: number,
}

export const Wrapper = styled.div`
    ${({ x, y, width = 10 }: markerInputWrapperProps) => {
        return `
        width: 10%;
        left: calc(${x}vw - ${(width / 2)}%);
        top: calc(${y}vh + 2.5px);
        `;
    }}
    position: absolute;
    padding: 0 10px;
    z-index: 999;
`;
