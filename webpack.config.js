
module.exports = {
    // other config options...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false, // Disable CSS source maps
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false, // Disable PostCSS source maps
              },
            },
          ],
        },
      ],
    },
    devtool: 'none', // Disable source maps for everything, if not needed
  };