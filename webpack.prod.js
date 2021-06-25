const merge = require("webpack-merge");
const common = require("./webpack.base");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map"
});
