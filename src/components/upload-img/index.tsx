import React, { ReactElement, VoidFunctionComponent, useRef, useContext } from 'react';
import { uploadImgContext } from '../../features/upload-img';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { InputFile } from './styled/input-file';

export const UploadImg: VoidFunctionComponent = (): ReactElement => {

    const fileInput = useRef<HTMLInputElement>(null);

    const { uploadFile } = useContext(uploadImgContext);

    const onUpload = () => {
        if (fileInput && fileInput.current) {
            fileInput.current.click();
        }
    }

    return (
        <div>
            <InputFile
                data-testid='inputFile'
                ref={ fileInput }
                onChange={ e => uploadFile(e) }
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
