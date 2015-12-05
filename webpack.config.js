module.exports = {
  entry: "./src/main",
  output: {
    path: './public',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './public',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};