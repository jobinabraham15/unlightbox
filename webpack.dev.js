const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname + "dist"),
    port: "8080"
  },
  mode: "development",
  devtool: "inline-source-map"
});
