/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    '../../.eslintrc.js',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
