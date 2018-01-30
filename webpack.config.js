const path = require('path');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './main.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            // Only run `.js` and `.jsx` files through Babel
            test: /\.js?$/,
            //skip the files in the node_modules directory
            exclude: /node_modules/,
            loader: 'babel-loader',
            // Options to configure the babel. here we have set up the preset. this can be replaced with .babelrc file
            query: {
                presets: ['env']
            }
        }]
    }
};