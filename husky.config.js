module.exports = {
  hooks: {
    'pre-commit': 'lint-staged --verbose',
    'post-commit': 'npm run version'
  }
};
