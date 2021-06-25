import "./scss/fen-pdf.scss";
// entry

// because webpack + babel is stupid
// eslint-disable-next-line no-undef
window.FenPdf = require("./src/fen-pdf").FenPDF;
