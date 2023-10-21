const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.ts',
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
    new ModuleFederationPlugin({
      name: 'remote',
      library: { type: 'var', name: 'remote' },
      filename: 'remote.js',
      exposes: {
        './RepoChart': './src/components/RepoChart/RepoChart',
      },
      shared: {
        react: {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
      },
    }),
  ],
};
