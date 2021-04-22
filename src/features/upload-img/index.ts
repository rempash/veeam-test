import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';
import { RootState } from '../../store';

export interface uploadImgState {
    src: string | null,
    isLoading: boolean,
    isOk: boolean,
    isFail: boolean,
};

const initialState: uploadImgState = {
    src: null,
    isLoading: false,
    isOk: false,
    isFail: false,
};

export const uploadImgSlice = createSlice({
    name: 'uploadImg',
    initialState,
    reducers: {
        upload: (state: uploadImgState, _: fileUploadAction) => {
            state.isLoading = true;
        },
        success: (_, action: PayloadAction<string>) => {
            return {
                ...initialState,
                src: action.payload,
            }
        },
        fail: (state: uploadImgState) => {
            state.isFail = true;
            state.isLoading = false;
        }
    },
});

export const { upload, success, fail } = uploadImgSlice.actions;

export const selectors = {
    src: ({ img: { src, isLoading, isFail } }: RootState): string|false|null => !isLoading && !isFail && src,
};

export type fileUploadAction = PayloadAction<ChangeEvent<HTMLInputElement>>;

export default uploadImgSlice.reducer;
