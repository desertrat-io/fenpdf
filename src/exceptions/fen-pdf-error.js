
export class FenPdfError extends Error {
    constructor(message) {
        super();
        this.error = new Error(message);
        this.errorMessage = message;
        return this.error;
    }

    getMessage() {
        return this.errorMessage;
    }

}
FenPdfError.prototype = Object.create(Error.prototype);
