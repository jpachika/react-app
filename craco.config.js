const { name } = require('./package.json');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove splitChunks optimization for single-spa
      delete webpackConfig.optimization.splitChunks;
      
      // Configure output for single-spa with SystemJS format
      webpackConfig.output.library = {
        type: 'system'
      };
      webpackConfig.output.filename = 'static/js/main.js';
      
      // Don't externalize React - include it in the bundle for now
      // webpackConfig.externals = {
      //   react: 'React',
      //   'react-dom': 'ReactDOM'
      // };
      
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3001, // Use a different port to avoid conflicts
  },
};