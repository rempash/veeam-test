import React, { ReactElement, VoidFunctionComponent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { InputFile } from './styled/input-file';
import { upload } from '../../features/upload-img';

export const UploadImg: VoidFunctionComponent = (): ReactElement => {

    const fileInput = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onUpload = () => {
        if (fileInput && fileInput.current) {
            fileInput.current.click();
        }
    }

    return (
        <div>
            <InputFile
                ref={ fileInput }
                onChange={ e => dispatch(upload(e)) }
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon />}
                onClick={ onUpload }
            >
                Upload Image
            </Button>
        </div>
    );

};
