import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Notification = {
    text: string,
    severity: Severity,
    id: number,
};

type Severity = 'success'|'error';

const initialState: Notification[] = [];

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        add: {
            reducer: (state: Notification[], action: PayloadAction<Notification>) => {
                state.push(action.payload);
            },
            prepare: (text: string, severity: Severity = 'error'): PayloadAction<Notification> => {
                return {
                    // hacky way to map types, redux toolkit will implicitly rewrite type prop 
                    type: '',
                    payload: {
                        text,
                        severity,
                        id: Math.random(),
                    }
                }
            }
        },
        remove: (state : Notification[], action: PayloadAction<{ id: number }>) => {
            return state.filter(({ id }) => id !== action.payload.id);
        }
    }
});

export const { add, remove } = notificationsSlice.actions;

export default notificationsSlice.reducer;

