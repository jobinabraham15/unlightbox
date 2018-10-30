const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.ts"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        // test: /\.(ts|tsx|jsx)?$/,
        test: /^(?!.*interface\.ts).*\.(ts|tsx|jsx)?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
};
