// this webpack config is additive to the angular config.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  module: {
    rules: [
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'devzeebo-mf-angular-component',
      library: { type: 'var', name: '_mf_angular_component' },
      filename: 'remote.js',
      exposes: {
        './mfexposed.component': './src/app/mf-exposed/mfexposed.component.ts',
        './mfexposed.module': './src/app/mf-exposed/mfexposed.module.ts',
        './app.module': './src/app/app.module.ref.ts',
      },
    }),
  ],
};
