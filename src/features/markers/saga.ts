import { put, takeEvery, debounce } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid_v4 } from "uuid";
import { offer, add, MarkerPosition, MarkerMetaData, tryUpdate, updateMarker } from './index';
import { getMarkerPosition } from './utils/getMatrkerPosition/getMarkerPosition';

function* handleAddMarker(action: PayloadAction<React.MouseEvent<HTMLDivElement>>) {
    const { clientX, clientY } = action.payload;
    const position: MarkerPosition = getMarkerPosition(clientX, clientY);
    yield put(add({
        text: '',
        position,
        id: uuid_v4()
    }));
};

function* handleTryUpdate(action: PayloadAction<MarkerMetaData>) {
    if (action.payload.id) {
        yield put(updateMarker(action.payload));
    }
}

function* markersSaga() {
    yield takeEvery(offer, handleAddMarker);
    yield debounce(100, tryUpdate, handleTryUpdate);
}

export default markersSaga;
