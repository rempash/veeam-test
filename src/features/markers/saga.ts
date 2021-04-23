import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid_v4 } from "uuid";
import { offer, add, MarkerPosition, MarkerMetaData, tryUpdate, updateMarker } from './index';
import { getMarkerPosition } from './utils/getMatrkerPosition/getMarkerPosition';
import { TextSizeError } from './errors/textSize.error';
import { add as addNotification } from '../notifications';

function* handleAddMarker(action: PayloadAction<React.MouseEvent<HTMLDivElement>>) {
    const { clientX, clientY } = action.payload;
    const position: MarkerPosition = getMarkerPosition(clientX, clientY);
    yield put(add({
        text: '',
        position,
        id: uuid_v4(),
    }));
};

function* handleTryUpdate(action: PayloadAction<MarkerMetaData>) {
    try {
        const { id, text } = action.payload;
        if (text.length > (process.env.REACT_APP_MAX_TEXT_SIZE || 0)) {
            throw new TextSizeError();
        }
        if (id) {
            yield put(updateMarker({
                id,
                text: text.trim(),
            }));
        }
    } catch(e) {
        yield put(addNotification(e.message));
    }
}

function* markersSaga() {
    yield takeEvery(offer, handleAddMarker);
    yield takeEvery(tryUpdate, handleTryUpdate);
}

export default markersSaga;
