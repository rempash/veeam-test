import React, { createContext, useState, FC, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { v4 as uuid_v4 } from "uuid";
import { TextSizeError } from './errors/textSize.error';
import { getMarkerPosition } from './utils/getMatrkerPosition/getMarkerPosition';

export type MarkerPosition = {
    x: number,
    y: number
};

export type MarkerMetaData = {
    id: string,
    text: string,
};

export type markersContextState = {
    markers: IMarker[],
    addMarker: (e: React.MouseEvent<HTMLDivElement>) => void,
    updateMarker: (marker: MarkerMetaData) => void,
    getMarkerById: (id: string) => IMarker|undefined,
}

export interface IMarker extends MarkerMetaData {
    position: MarkerPosition,
}

export const markersContext = createContext<markersContextState>({
    markers: [],
    addMarker: (e) => e,
    updateMarker: (e) => e,
    getMarkerById: () => ({ position: { x: 1, y: 1, }, text: '', id: '1'}),
});

export const MarkersProvider: FC = ({ children }) => {

    const [ markers, setMarkers ] = useState<IMarker[]>([]);

    const { enqueueSnackbar } = useSnackbar();

    const addMarker = (e: React.MouseEvent<HTMLDivElement>) => {
        const { top, left, width, height }: DOMRect = (e.target as HTMLElement).getBoundingClientRect();
        const { clientX, clientY } = e;
        const position: MarkerPosition = getMarkerPosition(clientX, clientY, left, top, width, height);
        setMarkers([
            ...markers,
            {
                text: '',
                position,
                id: uuid_v4(),
            }
        ]);
    };

    const updateMarker = useCallback(
        ({ id, text }: MarkerMetaData) => {
            try {
                if (text.length > (process.env.REACT_APP_MAX_TEXT_SIZE || 0)) {
                    throw new TextSizeError();
                }
                if (id) {
                    const upadtedMarkers = markers.map((marker) => {
                        return id === marker.id ? { ...marker, text: text.trim() } : marker;
                    });
                    setMarkers(upadtedMarkers);
                }
            } catch(e) {
                enqueueSnackbar(e.message, {
                    variant: 'error',
                });
            }
        },
        [markers, enqueueSnackbar]
    );

    const getMarkerById = useCallback(
        (id: string) => {
            return markers.find(({ id: markerId }) => id === markerId);
        },
        [markers]
    );

    return (
        <markersContext.Provider value={ { markers, addMarker, updateMarker, getMarkerById } } >
            { children }
        </markersContext.Provider>
    );

};
