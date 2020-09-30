module.exports = {
  hooks: {
    'pre-commit': 'lint-staged --verbose',
    // 'commit-msg': 'npm run version'
  }
};
