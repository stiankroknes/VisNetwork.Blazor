const path = require('path');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }]
    },
    entry: './BlazorVisNetwork.ts',
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.join(__dirname, '..', 'wwwroot'),
        filename: 'BlazorVisNetwork.js',
        library: {
            // do not specify a `name` here
            type: 'module',
        }
    }
});