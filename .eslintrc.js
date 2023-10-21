module.exports = {
  extends: [
    '@react-ddd',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [{
    files: '**/*.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  }],
};
