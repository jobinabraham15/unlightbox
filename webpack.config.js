const path = require("path");
module.exports = {
  entry: {
    main: "./src/unlightbox.tsx",
    demo: "./demo/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: path.join(__dirname + "dist"),
    port: "8080"
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
