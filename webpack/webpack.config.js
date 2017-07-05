const path = require('path');
const webpack = require('webpack');
const appRootDir = require('app-root-dir');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  target: 'web',

  devtool: 'source-map',

  node: {
    __dirname: true,
    __filename: true,
  },

  entry: {
    main: [
      'webpack-hot-middleware/client',
      './public/js/index'
    ],
  },

  output: {
    path: path.resolve(appRootDir.get(), './build/'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/build/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // new ExtractTextPlugin({
    //   filename: '[name]-[chunkhash].css',
    //   allChunks: true,
    // }),

    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(appRootDir.get(), './build'),
    }),

  ],

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

        // rules: [{
        //   loader: ExtractTextPlugin.extract({
        //     use: [
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           importLoaders: 1,
        //         },
        //       },
        //       {
        //         loader: 'postcss-loader',
        //         options: {
        //           config: {
        //             path: './webpack/postcss.config.js',
        //           }
        //         },
        //       },
        //       {
        //         loader: 'sass-loader',
        //       },
        //     ],
        //     fallback: 'style-loader',
        //   })
        // }]

      },
      // Special File type Loader
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[hash:8].[ext]',
        },
      },
    ],
  }
}

