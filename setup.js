import { JSDOM } from "/node_modules/jsdom";// i'm too stupid with karma to figure this one out -_-
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");


function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === "undefined")
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

global["window"] = jsdom;
global["document"] = window.document;
global["navigator"] = {
    userAgent: "node.js"
};
copyProps(window, global);
