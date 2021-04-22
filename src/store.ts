import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import uploadImgReducer from './features/upload-img';
import uploadImgSaga from './features/upload-img/saga';
import markersReducer from './features/markers';
import markersSaga from './features/markers/saga';
import notificationsReducer from './features/notifications';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        img: uploadImgReducer,
        markers: markersReducer,
        notifications: notificationsReducer,
    },
    middleware: [ sagaMiddleware ],
});

[
    uploadImgSaga,
    markersSaga
].forEach(sagaMiddleware.run);

export type RootState = ReturnType<typeof store.getState>;

export default store;
