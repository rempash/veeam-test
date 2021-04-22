import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Container } from './components/styled/container';
import { UploadImg } from './components/upload-img';
import { selectors } from './features/upload-img';
import { MarkerMap } from './components/marker-map';
import { Notifications } from './components/notifications';

function App() {

  const src = useSelector(selectors.src);

  console.log(src);

  return (
    <div className="App">
      <Notifications />
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
