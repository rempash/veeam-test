import React, {
  ReactElement, VoidFunctionComponent, useRef, useContext,
} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

import { uploadImgContext } from '../../features/upload-img';
import { InputFile } from './styled/InputFile.';

export const UploadImg: VoidFunctionComponent = (): ReactElement => {
  const fileInput = useRef<HTMLInputElement>(null);

  const { uploadFile } = useContext(uploadImgContext);
  const onUpload = () => {
    if (fileInput && fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <>
      <InputFile
        data-testid="inputFile"
        ref={fileInput}
        onChange={uploadFile}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={onUpload}
      >
        Upload Image
      </Button>
    </>
  );
};
