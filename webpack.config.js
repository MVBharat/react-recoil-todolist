// const path = require('path');
const webpack = require('webpack');

module.exports = {
  // entry: path.join(__dirname, './src/index.js'),
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', 'jsx'],
  },
  output: {
    // path: path.join(__dirname, './dist'),
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
