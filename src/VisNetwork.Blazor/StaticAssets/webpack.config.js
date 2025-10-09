const path = require('path');

module.exports = (env, args) => {
    const isDev = args.mode === 'development';
    return {
        mode: args.mode || 'production',
        target: 'web',
        resolve: { extensions: ['.ts', '.js'] },
        devtool: isDev ? 'source-map' : false,
        cache: { type: 'filesystem' },
        bail: !isDev,
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        entry: './BlazorVisNetwork.ts',
        experiments: {
            outputModule: true,
        },
        output: {
            path: path.resolve(__dirname, '..', 'wwwroot'),
            filename: 'BlazorVisNetwork.js',
            clean: true,
            library: {
                type: 'module',
            }
        },
        optimization: {
            minimize: !isDev
        }
    };
};