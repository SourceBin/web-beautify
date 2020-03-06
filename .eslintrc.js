module.exports = {
  extends: '@syntek/syntek/index',
  env: {
    worker: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
};
