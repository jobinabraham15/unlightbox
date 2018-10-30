const path = require("path");

module.exports = {
  entry: {
    demo: "./demo/index.tsx",
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
  mode: "production",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    libraryTarget: "umd",
    library: "Unlightbox",
    umdNamedDefine: true
  },
};
