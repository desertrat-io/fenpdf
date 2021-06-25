import pdfjslib from "pdfjs-dist/webpack";
import {FenPdfConfig} from "../data-objects/fen-pdf-config";

const mozApi = Symbol("mozApi");

/**
 * This class provides a simple wrapper around the existing api from the pdf.js library.
 * Using this base API keeps us from also having to write a parser and lexical analyzer, which is the main reason for the
 * wrapper. As the API class let's us hook in to low level functionality, we can easily build our own from a few basic
 * methods.
 * @class
 */
class IFenPDFApi {

    /**
     * One getter for the time being to return the implementing API when requested
     * Classes that implement this interface are considered PDF APIs that interact with the
     * core document in some way.
     * @returns {null}
     */
    get api() {
        return null;
    }
}


export class FenPDFReaderApi extends IFenPDFApi {

    /**
     * Sets up the original Mozilla API for internal usage. Leaves out all the other stuff we don't need. As this will
     * only let us read PDFs, we're using this API for the main read and parsing features
     */
    constructor() {
        super();
        pdfjslib.GlobalWorkerOptions.workerSrc = FenPdfConfig.workerSrc;
        this[mozApi] = pdfjslib;
    }
    get api() {
        return this[mozApi];
    }
}

export class FenPDFWriterApi extends IFenPDFApi {

    constructor() {
        super();
    }

    get api() {
        return {};
    }
}

export const FenPDFReader = new FenPDFReaderApi().api;
export const FenPDFWriter = new FenPDFWriterApi().api;

