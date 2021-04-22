import React, { FC, useState, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, TextField } from '@material-ui/core';
import { Wrapper } from './styled/wrapper';
import { markerInputState } from '../hooks/useMarkerInput';
import { IMarker, tryUpdate, selectors } from '../../../features/markers';

type getMarkerById = (id: string) => IMarker|undefined;

interface MarkerInputProps extends markerInputState {};

export const MarkerInput: FC<MarkerInputProps> = ({ x = 0, y = 0, id = '' }) => {

    const dispatch = useDispatch();

    const previousId = useRef<string>('');

    const [ text, setText ] = useState<string>('');

    const preventClose = (e: React.MouseEvent) => e.stopPropagation();

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value;
        setText(text);
    }

    const getMarkerById: getMarkerById = useSelector(selectors.getMarkerById);

    useLayoutEffect(
        () => {
            if (id && id !== previousId.current) {
                dispatch(tryUpdate({ text, id: previousId.current }));
                const { text: previousText } = getMarkerById(id) || { text: '' };
                setText(previousText);
                previousId.current = id;
            }
        },
        [id, text, getMarkerById, dispatch]
    );
    
    return (
        <Wrapper x={ x } y={ y } onClick={ preventClose } onDoubleClick={ preventClose } >
            <Paper elevation={ 3 } >
                <TextField 
                    value={ text }
                    onChange={ onTextChange }
                    multiline
                    variant="outlined"
                    size="small"
                />
            </Paper>
        </Wrapper>
    );
};
