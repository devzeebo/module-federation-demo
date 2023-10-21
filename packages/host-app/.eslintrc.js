module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    '../../.eslintrc.js',
  ],
  overrides: [{
    files: '**/getServerSideProps.ts',
    rules: {
      'import/prefer-default-export': 'off',
    },
  }, {
    files: './next.config.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  }],
};
