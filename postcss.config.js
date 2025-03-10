const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const combineMediaQuery = require('postcss-combine-media-query');
const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    atImport({ path: ['./assets/css'] }),
    autoprefixer(),
    combineMediaQuery(),
    presetEnv({ stage: 0 }),
  ],
};
