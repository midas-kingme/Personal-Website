module.exports = {
    plugins: {
      'postcss-preset-env': {},
      'postcss-flexbugs-fixes': {},
      'postcss-custom-media': {},
      '@csstools/postcss-global-data': {
        files: ['./src/app/globals.css'],
      },
    },
  };
  