import React, { Fragment, ReactElement, useContext } from 'react';
import { Container } from './components/styled/container';
import { UploadImg } from './components/upload-img';
import { MarkerMap } from './components/marker-map';
import { uploadImgContext } from './features/upload-img';
import { GlobalStyle } from './components/styled/global';

function App(): ReactElement {
  const { src } = useContext(uploadImgContext);
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        {
          src
            ? (<MarkerMap src={ src } />)
            : (<UploadImg />)
        }
      </Container>
    </Fragment>
  );
}

export default App;
