// this webpack config is additive to the angular config.
const { ModuleFederationPlugin } = require('webpack').container;

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
    ],
  },
  optimization: {
    splitChunks: false,
  },
  output: {
    publicPath: 'http://localhost:4200/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfAngularComponent',
      filename: 'remote.js',
      exposes: {
        // './mfexposed.component': './src/app/mf-exposed/mfexposed.component.ts',
        './bootstrapper': './src/bootstrapper.ts',
      },
    }),
  ],
};
