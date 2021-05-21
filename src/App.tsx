import React, { ReactElement, useContext } from 'react';

import { Container } from './components/styled/container';
import { UploadImg } from './components/UploadImg/UploadImg';
import { MarkerMap } from './components/MarkerMap/MarkerMap';
import { uploadImgContext } from './features/upload-img';
import { GlobalStyle } from './components/styled/global';

function App(): ReactElement {
  const { src } = useContext(uploadImgContext);
  return (
    <>
      <GlobalStyle />
      <Container>
        {
          src
            ? (<MarkerMap src={src} />)
            : (<UploadImg />)
        }
      </Container>
    </>
  );
}

export default App;
