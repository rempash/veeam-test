import React, { FC, useState, useRef, useLayoutEffect, useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import { Wrapper } from './styled/wrapper';
import { markerInputState } from '../hooks/useMarkerInput';
import { markersContext } from '../../../features/markers';

interface MarkerInputProps extends markerInputState {};

export const MarkerInput: FC<MarkerInputProps> = ({ x = 0, y = 0, id = '' }) => {

    const { updateMarker, getMarkerById } = useContext(markersContext);

    const previousId = useRef<string>('');

    const [ text, setText ] = useState<string>('');

    const preventClose = (e: React.MouseEvent) => e.stopPropagation();

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value;
        setText(text);
    };

    useLayoutEffect(
        () => {
            if (id !== previousId.current) {
                updateMarker({ text, id: previousId.current });
                const { text: previousText } = getMarkerById(id) || { text: '' };
                setText(previousText);
                previousId.current = id;
            }
        },
        [id, text, getMarkerById, updateMarker]
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
