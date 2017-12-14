const path = require('path');
module.exports = function(wallaby) {
  return {
    files: [
      'package.json',
      'test/**/*.ts?(x)',
      'tsconfig.json',
      'src/**/*.ts?(x)',
      '!src/**/*spec.ts?(x)'
    ],

    tests: ['src/**/*.spec.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    env: { type: 'node', runner: 'node' },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        typescript: require('typescript'),
        module: 'commonjs'
      })
    },

    setup: wallaby => {
      var jestconfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestconfig);
    },

    testFramework: 'jest'
  };
};
