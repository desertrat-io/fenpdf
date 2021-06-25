const merge = require("webpack-merge");
const common = require("./webpack.base");
const path = require("path");
module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",
        clean: true
    }
});
