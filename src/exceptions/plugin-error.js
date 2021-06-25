import {FenPDFError} from "./fen-pdf-error";

export class PluginError extends FenPDFError {
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
