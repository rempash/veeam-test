export class WrongTypeError extends Error {
    constructor() {
        super();
        this.message = `Wrong type of file, file must be an image`;
    }
}
