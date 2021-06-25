// Karma configuration
// Generated on Thu Nov 21 2019 13:57:39 GMT-0600 (Central Standard Time)
const webpack = require("webpack");
const webpackConfig = require("./webpack.base");
webpackConfig.entry = () => ({});

process.env.CHROME_BIN = require("puppeteer").executablePath();
module.exports = function (config) {
    config.set({

        plugins: [
            "karma-chrome-launcher",
            "karma-webpack",
            "karma-mocha",
            "karma-teamcity-reporter",
            "karma-babel-preprocessor",
            "karma-chai"
        ],
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha", "chai"],


        // list of files / patterns to load in the browser
        files: [
            {
                pattern: "tests/**/*.spec.js", type: "module"
            },
            {
                pattern: "setup.js", type: "module"
            },
            {
                pattern: "tests/test-pdfs/*.pdf", watched: false, included: false, served: true, nocache: false
            }
        ],
        
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    },
                ]
            },
            resolve: webpackConfig.resolve,
            devtool: "inline-source-map",
            plugins: [
                new webpack.SourceMapDevToolPlugin({
                    filename: null,
                    test: /\.(ts|js)(x?)$/ // to allow webpack to pass sourcemap if the file is ts or js.
                })
            ]
        },
        webpackMiddleware: {
            stats: "errors-only"
        },

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "./tests/**/*.spec.js": ["webpack"]
        },

        babelPreprocessor: {
            options: {
                presets: ["@babel/preset-env"],
                sourceMap: "inline"
            }
        },

        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress", "teamcity"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["ChromeHeadless"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
