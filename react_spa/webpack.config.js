


var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'bundle.css'
});

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015' ,'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,                    // made scss
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader: "file-loader?name=/static/media/[name].[ext]"
          }
        ]
    },
    plugins: [
        extractPlugin
    ]
};
