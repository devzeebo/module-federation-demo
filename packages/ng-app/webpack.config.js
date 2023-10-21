// this webpack config is additive to the angular config.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  module: {
    rules: [
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'devzeebo-ng-app',
      remotes: {
        '@devzeebo/spa-app': '_spa_app@http://localhost:3000/remote.js',
        '@devzeebo/mf-react-component': '_mf_react_component@http://localhost:3001/remote.js',
        '@devzeebo/mf-angular-component': '_mf_angular_component@http://localhost:4200/remote.js',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
  ],
};
