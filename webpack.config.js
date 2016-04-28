module.exports = {
  cache: true,
  entry: {
    index: './index.es6'
  },
  output: {
    path: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|es6)$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules,localIdentName=[local]',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules',
          'autoprefixer'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|eot|woff|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url'
      }

    ]
  },
  plugins: [
  ],
  resolve: {
    modulesDirectories: [
      './node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.es6']
  }
}
