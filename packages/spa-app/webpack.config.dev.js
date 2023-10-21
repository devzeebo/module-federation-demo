const { merge } = require('lodash/fp');

const {
  output, // ignore output,
  ...base
} = require('./webpack.config');

/** @type {import('webpack').Configuration} */
const devConfig = {
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
};

module.exports = merge(
  base,
  devConfig,
);
