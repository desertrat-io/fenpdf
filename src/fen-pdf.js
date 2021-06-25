import {ConfigError} from "./exceptions/config-error";
import {FenPdfError} from "./exceptions/fen-pdf-error";
import {fenPdfConfig} from "./data-objects/fen-pdf-config";
import {FenPdfReader} from "./core/fen-pdf-api";
import {FenPdfDoc} from "./core/fen-pdf-doc";

const configSym = Symbol("config");
const srcSym = Symbol("src");
/**
 * Base class for PDF viewers
 * @class FenPdf
 */
export class FenPdf {

    constructor() {
        throw new FenPdfError("Do not use new to create instances of this class");
    }
    /**
     * Create a base viewer and attach it to the DOM. As long as the element exists in such a way that it can be accessed
     * this should work appropriately
     * @param {String|null} [docSrc=null]
     * @param {(null|String|Object)} [config=null]
     * @throws {ConfigError}
     */
    static createDoc(docSrc = null, config = null) {

        if (docSrc === null) {
            throw new ConfigError("No source PDF given, cannot instantiate");
        }
        if (config !== null && typeof config !== "object" && typeof config && "string") {
            throw new ConfigError("Invalid instantiation configuration");
        }
        this[configSym] = config;
        this[srcSym] = docSrc;
        return FenPdfReader.getDocument(this[srcSym]).promise.then(pdf => {
            return new FenPdfDoc(pdf);
        });
    }
    /**
     * Simple way to access the exact configuration in use by the viewer
     * @returns {object} - the current configuration object described in fenPdfConfig
     */
    get currentConfig() {
        return fenPdfConfig;
    }
}
