import webpack from 'webpack';
import express from 'express';
import config from './webpack/config';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack(config);

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: { colors: true },
  historyApiFallback: true
});

app.use('/', express.static('public'));
app.use('/properties', express.static('public'));
app.use('/node_modules/react', express.static('node_modules/react'));
app.use('/node_modules/react-relay', express.static('node_modules/react-relay'));
app.listen(8080);
