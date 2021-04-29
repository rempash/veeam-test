import React, { ReactElement, useContext } from 'react';
import { Container } from './components/styled/container';
import { UploadImg } from './components/upload-img';
import { MarkerMap } from './components/marker-map';
import { uploadImgContext } from './features/upload-img';

function App(): ReactElement {
  const {src} = useContext(uploadImgContext);
  return (
    <div>
      <Container>
        {
          src
            ? (<MarkerMap src={ src } />) :
            (<UploadImg />)
        }
      </Container>
    </div>
  );
}

export default App;
