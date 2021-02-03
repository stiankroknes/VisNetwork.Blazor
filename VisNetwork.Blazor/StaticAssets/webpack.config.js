const path = require('path');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
    },
    entry: './BlazorVisNetwork.ts',
    output: {
        // Place output in wwwroot and export a top-level 'BlazorVisNetwork' object
        path: path.join(__dirname, '..', 'wwwroot'),
        filename: 'BlazorVisNetwork.js',
        libraryTarget: 'var',
        library: 'BlazorVisNetwork',
        libraryExport: 'default'
    }
});