import React, {
  createContext, FC, useState, ChangeEvent,
} from 'react';
import { useSnackbar } from 'notistack';

import { EmptyFileError } from './errors/emptyFile.error';
import { FileSizeError } from './errors/fileSize.error';
import { WrongTypeError } from './errors/wrongType.error';

export type uploadImgState = {
    src: string,
    uploadFile: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const uploadImgContext = createContext<uploadImgState>({ src: '', uploadFile: (e) => e });

export const UploadImgProvider: FC = ({ children }) => {
  const [ src, setSrc ] = useState<string>('');

  const { enqueueSnackbar } = useSnackbar();

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        const [ file ]: File[] = Array.from(e.target.files);
        const fileSizeMB = Math.round(file.size / 1024 / 1024);
        const maxFileSize: number = parseInt(process.env.REACT_APP_MAX_FILE_SIZE || '0', 2);
        if (fileSizeMB > maxFileSize) throw new FileSizeError();
        const resolvedTypes = (process.env.REACT_APP_OK_FILE_TYPES || '').split('|');
        const fileExt = file.type.split('/')[1];
        if (!resolvedTypes.some((type) => type === fileExt)) throw new WrongTypeError();
        const fileSrc: string = URL.createObjectURL(file);
        setSrc(fileSrc);
      } else throw new EmptyFileError();
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  return (
    <uploadImgContext.Provider value={{ src, uploadFile }}>
      { children }
    </uploadImgContext.Provider>
  );
};
