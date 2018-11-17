const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open:true,
    }
}