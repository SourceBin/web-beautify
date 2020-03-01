module.exports = {
  extends: '@syntek/syntek/typescript',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
