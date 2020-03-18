const path = require('path');

module.exports = {
    entry: ['@babel/polyfill'],
  
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: 'file-loader?name=public/fonts/[name].[ext]',
        },
        {
          test: /\.svg$/,
          loader: 'file-loader',
          query: {
            name: 'assets/images[name].[hash:8].[ext]',
          },
        },
        {
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
        },
        {
          test: /\.(gif|png|jpe?g)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true,
              },
            },
          ],
        },
      ],
    },
  
    resolve: {
      alias: {
        assets: path.resolve(__dirname, '../src/assets'),
        constants: path.resolve(__dirname, '../src/constants'),
        components: path.resolve(__dirname, '../src/components'),
        containers: path.resolve(__dirname, '../src/containers'),
        ducks: path.resolve(__dirname, '../src/ducks'),
        utils: path.resolve(__dirname, '../src/utils'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
    },
  };