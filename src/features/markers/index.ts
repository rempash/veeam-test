import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type MarkerPosition = {
    x: number,
    y: number
};

export type MarkerMetaData = {
    id: string,
    text: string,
};

export interface IMarker extends MarkerMetaData {
    position: MarkerPosition,
};

const initialState: IMarker[] = [];

export const markersSlice = createSlice({
    name: 'markers',
    initialState,
    reducers: {
        offer: (_, action: PayloadAction<React.MouseEvent<HTMLDivElement>>) => {
            // this action will be handled by saga
        },
        add: (state, action: PayloadAction<IMarker>) => {
            state.push(action.payload);
        },
        tryUpdate: (_, action: PayloadAction<MarkerMetaData>) => {
            // this action will be handled by saga
        },
        updateMarker: (state: IMarker[], action: PayloadAction<MarkerMetaData>) => {
            const markerIndex = state.findIndex(({ id }) => id === action.payload.id);
            state[markerIndex].text = action.payload.text;
        },
    }
}); 

export const selectors = {
    getMarkers: ({ markers }: RootState) => markers,
    getMarkerById: ({ markers }: RootState) => (id: string) => markers.find(({ id: markerId }) => id === markerId), 
};

export const { offer, add, tryUpdate, updateMarker } = markersSlice.actions;

export default markersSlice.reducer;
