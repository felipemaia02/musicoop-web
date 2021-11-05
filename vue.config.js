// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const buildDate = new Date();

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_DATE: `"${buildDate.getDate()}/${buildDate.getMonth()}/${buildDate.getFullYear()}"`,
        },
      }),
    ],
  },
};
