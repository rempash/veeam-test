import styled from 'styled-components';

export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    max-width: 100vw;
    max-height: 100vh;
    display: block;
`;