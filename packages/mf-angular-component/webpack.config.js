// this webpack config is additive to the angular config.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf-angular-component',
      library: { type: 'var', name: 'mf_angular_component' },
      filename: 'remote.js',
      exposes: {
        './MfExposedModule': './src/app/mf-exposed/mfexposed.module.ts'
      }
    })
  ]
}
