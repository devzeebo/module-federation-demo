const { merge } = require('lodash/fp');
const {
  output, // ignore output
  ...base
} = require('./webpack.config');

/** @type {import('webpack').Configuration} */
const devConfig = {
  devServer: {
    port: 3001,
  },
};

module.exports = merge(
  base,
  devConfig,
);
