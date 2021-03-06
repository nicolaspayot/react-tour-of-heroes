module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|.*\.spec\.js)/,
        loader: 'isparta-instrumenter'
      }
    ],
    postLoaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      }
    ]
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map'
};
