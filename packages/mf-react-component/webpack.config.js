const { ModuleFederationPlugin } = require('webpack').container;

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/bootstrap',
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
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfReactComponent',
      filename: 'remote.js',
      exposes: {
        './RepoChart': './src/components/RepoChart',
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
