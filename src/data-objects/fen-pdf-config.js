export const fenPdfConfig = {

    defaultAnchorPoint: "#fen-pdf-viewer",

    /**
     * @property {String} workerSrc - The Mozilla PDF.js worker location. This is compiled directly from pdf.js
     */
    workerSrc: "./pdf.worker.js",
    /**
     * @property {String} renderMode - only canvas is supported for the moment
     */
    renderMode: "canvas",

    /**
     * @property {String} viewerHeight - viewer height in pixels or vhm
     */
    viewerHeight: "500px",

    /**
     * @property {String} viewerWidth - viewer height in pixels or vhm
     */
    viewerWidth: "200px",

    /**
     * @property {Object} pdfSource - Object that describes where the PDF will be loaded from
     * @property {String} pdfSource.mode - should the pdf be loaded in via direct link, or api call
     * @property {String} pdfSource.pdfUrl - url of the pdf if external. If an array of urls is passed in, then they are loaded in order
     * @property {Object} pdfSource.api - raw configuration object, or an instance of the fen-pdf-api-config object
     */
    pdfSource: {

        mode: "api",

        pdfUrl: "",

        api: {}

    },

    /**
     * @property {Object} pdfScrolling - only available in api mode, or if an array of pdfs is passed
     * @property {Boolean} pdfScrolling.continuous - should the user be able to continue scrolling indefinitely, or should there be some kind of paging
     * @property {Number} pdfScrolling.pageSize - if continuous is true, this is ignored. Otherwise it refers to the number of pages of a PDF to display per content page
     * @property {Number} pdfScrolling.prefetchThreshold - after how many pages of scrolling should the next page fetch occur in a single direction
     * @property {Number} pdfScrolling.prefetchUpperBound - if scrolling changes directions from bottom to top, and those pages are not available prefetch if the number of pages existing in that new direction is less than or equal to this value
     * @property {Number} pdfScrolling.prefetchLowerBound - if scrolling changes directions from top to bottom, and those pages are not available prefetch if the number of pages existing in that new direction is less than or equal to this value
     */
    pdfScrolling: {

        continuous: true,

        pageSize: 10,

        prefetchThreshold: 20,

        prefetchUpperBound: 9,

        prefetchLowerBound: 9
    },

    plugins: []
};
