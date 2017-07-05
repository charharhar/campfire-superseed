const path = require('path');
const chalk = require('chalk');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const appRootDir = require('app-root-dir');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack/webpack.config');
const compiler = webpack(config);

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.use(helmet());
app.use(compression());
app.use(logger('dev'));

app.use(webpackDevMiddleware(compiler, {
  quiet: true,
  noInfo: true,
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
}));
app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static('build'))
app.use('/static', express.static('public'))
app.set('port', process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get('*', homeController.index);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('==> %s App is running at http://localhost:%d', chalk.green('✓'), app.get('port')); 
  console.log(chalk.yellow('  Press CTRL-C to stop\n'));
});

module.exports = app;
