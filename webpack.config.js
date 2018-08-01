const path = require('path');
module.exports = {
    entry: './src/app.js',
    output:{
        filename:'bundle.js',
        path: path.join(__dirname)
    },
    devServer:{
        contentBase: path.join(__dirname),
        historyApiFallback:true
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        rules : [{
            test:/\.js$/,
            loader: 'babel-loader',
            exclude:/node-modules/
        },{
            test:/\.s?css$/,
            use :[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test:/\.(png|jpeg|jpg)$/,
            loader:'url-loader'
        }]
    }
}