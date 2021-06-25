import {FenPdfError} from "./fen-pdf-error";
export class ConfigError extends FenPdfError {
    /**
     *
     * @param {String} message
     */
    constructor(message) {
        super(message);
    }

    getMessage() {
        return super.getMessage();
    }
}
