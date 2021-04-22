export class EmptyFileError extends Error {
    constructor() {
        super();
        this.message = `Please choose an image`;
    }
};
