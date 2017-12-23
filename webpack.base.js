var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module : {
    rules : [
      {
        test : /\.js?$/,
        loader : 'babel-loader',
        exclude : '/node-modules/',
        options : {
          presets : [
            'react',
            'stage-0',
            ['env', {
              targets : {
                browser : ['last 2 versions']
              }
            }]
          ]
        }
      },
      {
          test:/\.(s*)css$/,
          use: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','sass-loader'],
            })
      }
    ]
},
plugins: [
        new ExtractTextPlugin({filename:'app.bundle.css'})
    ]
};
