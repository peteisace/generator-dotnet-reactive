const path = require('path');
const extractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: 'client-src/index.js',
    output: {
        filename: '<%= bundleFilename %>',
        path: path.resolve(__dirname, '<%= serverWebDirectory %>/wwwroot/js')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'client-src/js'),
                    path.resolve(__dirname, 'client-src/jsx')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: extractPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.scss'
        ]
    },
    plugins: [
        new extractPlugin({
            filename: '../css/styles.css',
            allChunks: true            
        })
    ]
}