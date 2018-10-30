const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    libraryTarget: "umd",
    library: "Unlightbox",
    umdNamedDefine: true
  }
});
