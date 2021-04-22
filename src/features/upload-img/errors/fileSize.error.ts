export class FileSizeError extends Error {
    constructor() {
        super();
        this.message = `File size shouldn't be greater than ${process.env.REACT_APP_MAX_FILE_SIZE}MB`;
    }
};
