import styled from 'styled-components';

export const InputFile = styled.input.attrs(() => ({
    type: 'file',
    'data-testid': 'inputFile',
}))`
    display: none;
`;