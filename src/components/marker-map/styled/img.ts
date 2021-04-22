import styled from 'styled-components';

export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100vw;
    height: 100vh;
`;