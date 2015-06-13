# Base64 font loader for webpack
This loader will Base64 encode any fonts in your css files.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

```js
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'index': './index.js'
  },
  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap')
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      }
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  }
};
```

## Example
### Input:

```css
@font-face {
  font-family: 'icons';
  src: url('fonts/icon.eot');
  src: url('fonts/icon.eot?v=0.0.1') format('eot'),
       url('fonts/icon.woff?v=0.0.1') format('woff'),
       url('fonts/icon.ttf?v=0.0.1') format('truetype'),
       url('fonts/icon.svg?v=0.0.1') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

### Exports:

```css
@font-face {
  font-family: 'icons';
  src: url(data:application/vnd.ms-fontobject;charset=utf-8;base64,[BASE_64_STRING]);
  src: url(data:application/vnd.ms-fontobject;charset=utf-8;base64,[BASE_64_STRING]) format('eot'),
       url(data:application/font-woff;charset=utf-8;base64,[BASE_64_STRING]) format('woff'),
       url(data:application/x-font-ttf;charset=utf-8;base64,[BASE_64_STRING]) format('truetype'),
       url(data:image/svg+xml;charset=utf-8;base64,[BASE_64_STRING]) format('svg');
  font-weight: normal;
  font-style: normal;
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
