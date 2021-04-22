import { takeEvery, put } from 'redux-saga/effects';
import { fileUploadAction, upload, success, fail } from './index';
import { add } from '../notifications';
import { FileSizeError } from './errors/fileSize.error';
import { EmptyFileError } from './errors/emptyFile.error';
import { WrongTypeError } from './errors/wrongType.error';

function* handleImgUpload(action: fileUploadAction) {
    try {
        if (action.payload.target.files) {
            const [ file ] = Array.from(action.payload.target.files);

            const fileSizeMB = Math.round(file.size/1024/1024);
            const maxFileSize: number = parseInt(process.env.REACT_APP_MAX_FILE_SIZE || '0');
            if (fileSizeMB > maxFileSize) throw new FileSizeError();

            const resolvedTypes = (process.env.REACT_APP_OK_FILE_TYPES || '').split('|');
            const fileExt = file.type.split('/')[1];
            if (!resolvedTypes.some(type => type === fileExt)) throw new WrongTypeError();

            const src: string = URL.createObjectURL(file);
            yield put(success(src));
        } else throw new EmptyFileError();
    } catch(e) {
        yield put(add({
            text: e.message || 'Something went wrong',
            severity: 'error',
            id: Math.random()
        }));
        yield put(fail())
    }
}

function* uploadImgSaga() {
    yield takeEvery(upload, handleImgUpload);
}

export default uploadImgSaga;
