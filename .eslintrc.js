/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    '@react-ddd',
  ],
  root: true,
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
