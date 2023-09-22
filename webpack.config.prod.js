const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js-oop-practice-project.js",
  output: {
    filename: "js-oop-practice-project.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  //   devtool: "cheap-source-map",
  //   plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
