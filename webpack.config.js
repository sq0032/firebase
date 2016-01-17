var webpack = require('webpack');

module.exports = {
    entry: [
        "./js/app.js"
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: "style!css"},
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loaders: ["babel?stage=1"]}
        ]
    }
}