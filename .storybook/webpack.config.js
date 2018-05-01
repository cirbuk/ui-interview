// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const browserPath = path.resolve(__dirname, '../browser');
const isoPath = path.resolve(__dirname, '../isomorphic');

module.exports = {
  name: 'client',
  target: 'web',
  resolve: {
    extensions: ['.scss', '.js', '.png', '.svg'],
    modules: ['node_modules', browserPath, isoPath],
  },
  devtool: 'source-map',
  module: {
    rules: [{
      include: [browserPath, isoPath],
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.jpg|\.png$/,
      loader: 'url-loader?limit=100000&mimetype=image/png',
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        `sass-loader?sourceMap&includePaths[]=${browserPath}`,
      ],
    }, {
      test: /\.svg/,
      loader: 'svg-url-loader',
    }, {
      test: /\.woff2$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 50000,
        },
      },
    }],
  },
};
