module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'quote-props': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-tabs': 'off',
    'indent': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'object-shorthand': 'off',
    'no-unneeded-ternary': 'off',
  },
};
