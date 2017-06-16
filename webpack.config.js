module.exports = {
  output: {
    library: 'react-panel',
    libraryTarget: 'umd',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
}