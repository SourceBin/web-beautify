module.exports = {
  extends: '@syntek/syntek/index',
  parserOptions: {
    ecmaVersion: '2020',
  },
  env: {
    worker: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['examples/**'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
};
