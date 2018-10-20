const path = require("path");
// // const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
const TsDocPlugin = require("react-docgen-typescript-webpack-plugin"); // optional
// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.module.rules.push({
//     test: /\.(ts|tsx|jsx)?$/,
//     loader: require.resolve("ts-loader")
//   });

//   defaultConfig.plugins.push(new TsDocPlugin());
//   defaultConfig.resolve.extensions.push(".ts", ".tsx", ".js");
//   return defaultConfig;
// };

module.exports = {
  resolve: {
    extensions: [".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      }
    ]
  },
  plugins: [new TsDocPlugin()]
};
