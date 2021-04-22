import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
    text: string,
    severity: 'success'|'error',
    id: number,
};

const initialState: Notification[] = [];

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        add: (state: Notification[], action: PayloadAction<Notification>) => {
            state.push(action.payload);
        },
        remove: (state : Notification[], action: PayloadAction<{ id: number }>) => {
            return state.filter(({ id }) => id !== action.payload.id);
        }
    }
});

export const { add, remove } = notificationsSlice.actions;

export default notificationsSlice.reducer;

