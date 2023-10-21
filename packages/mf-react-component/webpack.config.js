const { ModuleFederationPlugin } = require('webpack').container;

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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'devzeebo-mf-react-component',
      library: { type: 'var', name: '_mf_react_component' },
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
