const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      remotes: {
        '@devzeebo/mf-react-component': 'mfReactComponent@http://localhost:3001/remote.js',
        '@devzeebo/mf-angular-component': 'mfAngularComponent@http://localhost:4200/remote.js',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
};
