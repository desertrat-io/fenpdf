import {fenPdfConfig} from "../data-objects/fen-pdf-config";
import {ConfigError} from "../exceptions/config-error";

export class FenPdfDoc {
    constructor(doc) {
        this.doc = doc;
    }

    /**
     *
     * @param {String} el
     * @throws {ConfigError}
     */
    attachTo(el) {
        let attachPoint = el;
        if (attachPoint === null || typeof attachPoint === "undefined") {
            attachPoint = fenPdfConfig.defaultAnchorPoint;
        }

        if (attachPoint === "" || window.document.querySelectorAll(attachPoint).length === 0) {
            throw new ConfigError("Invalid Element, make sure the DOM is ready first.");
        }
    }

    getPage(pageNum) {
        return this.doc.getPage(pageNum).then(page => {
            return page;
        });
    }

    get meta() {
        return this.doc.getMetadata().then(meta => {
            return meta;
        });
    }
}
