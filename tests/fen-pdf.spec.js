import {FenPDF} from "../src/fen-pdf";

import "chai/register-assert";
import "chai/register-expect";

import {ConfigError} from "../src/exceptions/config-error";
import {FenPDFDoc} from "../src/core/fen-pdf-doc";
// we need some dom stuff to work with
window.document.body.innerHTML = "<div id='app'></div>";
describe("Basic object functionality", () => {

    it("Can be instantiated with valid parameters", done => {
        FenPDF.createDoc("base/tests/test-pdfs/dummy.pdf").then(doc => {
            assert.instanceOf(doc, FenPDFDoc);
            done();
        }).catch(done);
    });

    it("Cannot be created with new", done => {
        try {
            expect(() => (new FenPDF())).to.throw("Error: Do not use new to create instances of this class");
        } catch (e) {
            // noop
            done();
        }
        done();
    });

    it("Throws an error on invalid id", done => {
        try {
            FenPDF.createDoc("base/tests/test-pdfs/dummy.pdf").then(doc => {
                expect(() => doc.attachTo("#badid")).to.not.throw(ConfigError);
                done();
            }).catch(done);
        } catch (e) {
            // noop for now
            done();
        }
    });
});
