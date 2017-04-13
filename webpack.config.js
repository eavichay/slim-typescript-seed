const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
