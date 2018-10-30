const path = require("path");
module.exports = {
  entry: {
    index: "./index.ts",
    // demo: "./demo/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    libraryTarget: 'umd',
    library: 'Unlightbox',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname + "dist"),
    port: "8080"
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        // test: /\.(ts|tsx|jsx)?$/,
        test:/^(?!.*interface\.ts).*\.(ts|tsx|jsx)?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
