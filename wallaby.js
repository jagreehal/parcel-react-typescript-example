const path = require('path');
module.exports = function (wallaby) {
  return {
    files: [
      'test/**/*.*',
      'package.json',
      'tsconfig.json',
      'src/**/*.ts?(x)',
      '!src/**/*test.ts?(x)'
    ],

    tests: ['src/**/*.test.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    env: {
      type: 'node',
      runner: 'node'
    },
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