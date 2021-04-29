import { useReducer, Dispatch } from 'react';

export interface markerInputActions {
    show: "show",
    hide: "hide"
}

export interface markerInputState {
    x: number,
    y: number,
    id?: string,
}

const actions: markerInputActions = {
    show: 'show',
    hide: 'hide',
};

export type useMarkerReducerTypes = [ markerInputState, Dispatch<useMarkerInputAction> ];

export type useMarkerInputAction = { type: string, payload?: markerInputState };

export type useMarkerInputType = {
    state: markerInputState,
    dispatch: Dispatch<useMarkerInputAction>,
    actions: markerInputActions
};

const initialState: markerInputState = {
    x: -500,
    y: -500,
    id: '',
};

const reducer = ( _: markerInputState, action: useMarkerInputAction ): markerInputState => {
    switch (action.type) {
        case actions.show: {
            if (!action.payload) return initialState;
            return {
                x: action.payload.x,
                y: action.payload.y,
                id: action.payload.id,
            }
        }
        case actions.hide: {
            return initialState;
        }
        default: return initialState;
    }
};

export const useMarkerInput = (): useMarkerInputType => {
    const [ state, dispatch ]: useMarkerReducerTypes = useReducer(reducer, initialState);
    return {
        state,
        dispatch,
        actions
    };
};
