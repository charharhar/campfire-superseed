const path = require('path');
const webpack = require('webpack');
const appRootDir = require('app-root-dir');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

function removeEmpty (x) {
  return x.filter(y => y != null);
}

function ifElse (condition) {
  return function ifElseResolver (then, or) {
    const execIfFunc = x => (typeof x === 'function' ? x() : x);
    return condition ? execIfFunc(then) : (or);
  }
}

function configFactory() {
  const isDev = process.env.NODE_ENV === 'development';
  const isProd = process.env.NODE_ENV === 'production';

  const ifDev = ifElse(isDev);
  const ifProd = ifElse(isProd);

  let webpackConfig = {
    target: 'web',

    devtool: isProd ? 'hidden-source-map' : 'source-map',

    performance: isProd ? { hints: 'warning' } : false,

    node: {
      __dirname: true,
      __filename: true,
    },

    entry: {
      main: removeEmpty([
        ifDev('webpack-hot-middleware/client'),
        path.resolve(appRootDir.get(), './public/js/index')
      ]),
    },

    output: {
      path: path.resolve(appRootDir.get(), './build/'),
      filename: ifProd('[name]-[chunkhash].js', '[name].js'),
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: ifDev('http://localhost:3000/build/', '/'),
    },

    plugins: removeEmpty([
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
      }),

      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve(appRootDir.get(), './build'),
      }),

      ifDev(() => new webpack.NoEmitOnErrorsPlugin()),

      ifDev(() => new webpack.HotModuleReplacementPlugin()),

      ifDev(() => new webpack.NamedModulesPlugin()),

      ifProd(() =>
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            screw_ie8: true,
            warnings: false,
          },
          mangle: {
            screw_ie8: true,
          },
          output: {
            comments: false,
            screw_ie8: true,
          },
        })
      ),

      ifProd(() =>
        new ExtractTextPlugin({
          filename: '[name]-[chunkhash].css',
          allChunks: true,
        })
      ),
    ]),

    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
    },

    module: {
      rules: [
        // Javascript Loader
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: [
                  'stage-3',
                  ['latest', { es2015: { modules: false } }],
                ]
              }
            }
          ],
        },
        // CSS/SCSS Loader
        {
          test: /\.css$/,
          exclude: /node_modules/,
          rules: removeEmpty([
            ifProd({
              loader: ExtractTextPlugin.extract({
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                    },
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      config: {
                        path: './webpack/postcss.config.js',
                      }
                    },
                  },
                  {
                    loader: 'sass-loader',
                  },
                ],
                fallback: 'style-loader',
              })
            }),
            ifDev({
              use: [
                'cache-loader',
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: true,
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    config: {
                      path: './webpack/postcss.config.js',
                    }
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  },
                },
              ]
            }),
          ]),
        },
        // Special File type Loader
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'file-loader',
          query: {
            name: ifDev('[path][name].[ext]?[hash:8]', '[hash:8].[ext]'),
          },
        },
      ],
    }
  }

  return webpackConfig;
}

module.exports = configFactory();

