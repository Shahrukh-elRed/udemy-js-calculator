const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js-oop-practice-project.js",
  output: {
    filename: "js-oop-practice-project.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  // devtool: "cheap-module-eval-source-map",
  // devServer: {
  //   contentBase: "./",
  // },
  // plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
