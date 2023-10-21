const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/bootstrap.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'remoteEntry.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'devzeebo-spa-app',
      filename: 'remote.js',
      library: { type: 'var', name: '_spa_app' },
      exposes: {
        './App': './src/components/App',
      },
      remotes: {
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
