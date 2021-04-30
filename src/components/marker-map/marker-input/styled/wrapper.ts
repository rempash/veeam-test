import styled from 'styled-components';
import { markerInputState } from '../../hooks/useMarkerInput';

interface markerInputWrapperProps extends markerInputState {
    width?: number,
}

export const Wrapper = styled.div`
    ${({ x, y, width = 15 }: markerInputWrapperProps) => {
        return `
        width: ${width}%;
        left: calc(${x}% - ${(width / 2)}%);
        top: calc(${y}% - 4px);
        `;
    }}
    position: absolute;
    padding: 0 10px;
    z-index: 999;
`;
