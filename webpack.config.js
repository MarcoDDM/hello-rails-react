const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: process.env.NODE_ENV === "production" ? "cheap-module-source-map" : "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']), // Make sure NODE_ENV is available in your app
  ],
};
