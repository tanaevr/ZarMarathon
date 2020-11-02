const path = require('path');
const HTMLWebpachPlugins = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name]__[local]__[hash:base64:5].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpachPlugins({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: false,
    hot: true,
  },
  devtool: 'source-map',
};
