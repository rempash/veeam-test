export class TextSizeError extends Error {
    constructor() {
        super();
        this.message = `Marker text must be less than ${process.env.REACT_APP_MAX_TEXT_SIZE}`;
    }
}
