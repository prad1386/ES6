var webpack = require("webpack");
module.exports = {
entry: __dirname + "/app/index.js",
output: {
path: __dirname + "/build",
filename: "bundle.js"
},
devServer: {
    inline: true,
    contentBase: __dirname + "/build",
    port: 3000
},
module: {
    rules: [
    {
    test: /\.js$/,
    loader: ["babel-loader"],
    exclude:/node_modules/
    }
    ]
}
}