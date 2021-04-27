import React, { useContext } from 'react';
import './App.css';
import { Container } from './components/styled/container';
import { UploadImg } from './components/upload-img';
import { MarkerMap } from './components/marker-map';
import { uploadImgContext } from './features/upload-img';

function App() {

  const { src } = useContext(uploadImgContext);

  return (
    <div className="App">
        <Container>
          {
            src
              ? (<MarkerMap src={ src } />)
              : (<UploadImg />)
          }
        </Container>
    </div>
  );
}

export default App;
