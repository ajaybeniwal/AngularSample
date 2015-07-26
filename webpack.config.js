var webpack = require('webpack');
var production = process.env.NODE_ENV === "production";
var plugins =production?[
         new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
         new webpack.optimize.UglifyJsPlugin()
    ]:[new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")];
module.exports = {
   entry: {
    app: "./app/scripts/index.js",
    vendor: ["angular","angular-route"],
  },
  output: {
    path: './app/build',
    filename: 'bundle.js',
    
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  plugins: plugins
};
