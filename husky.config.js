module.exports = {
  hooks: {
    'pre-commit': 'lint-staged --verbose',
    "prepare-commit-msg": "exec < /dev/tty && git cz -m 'xx' --hook || true",
  }
};
