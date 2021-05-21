import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UploadImgProvider } from './features/upload-img';
import { MarkersProvider } from './features/markers';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={3000}
    >
      <MarkersProvider>
        <UploadImgProvider>
          <App />
        </UploadImgProvider>
      </MarkersProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
