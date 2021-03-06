const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');

const config = {
  target : 'node',
  // externals: [nodeExternals({
  //     whitelist : ['bootstrap', 'jquery', 'css-loader','style-loader','sass-loader']
  // })],
  entry : './index.js',
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);
