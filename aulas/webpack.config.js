module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],  // E nosso arquivo principal
    output: {
        path: __dirname + '/public',    // Para ele jogar o arquivo bandle la no public
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'  // E a onde ele vai abrir o servidor da nossa aplicação.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Vai pedir para ele apagar o node modules
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
}