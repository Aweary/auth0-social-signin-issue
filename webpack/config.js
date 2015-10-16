import { resolve } from 'path';

export default {
  entry: resolve(__dirname, '../js/app.js'),
  output: {
    filename: 'app.js',
    path: resolve('./dist')
  },
  module: {
    loaders: [ {
      test: /\.js$/,
      loader: 'babel',
      query: {stage: 0 }
    } ]
  }
};
