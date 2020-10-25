module.exports = {
  sourceDir: 'extension',
  artifactsDir: 'build',
  verbose: true,
  run: {
    firefox: 'nightly',
    startUrl: ['about:debugging', 'https://example.com/'],
  },
  build: {
    overwriteDest: true,
  },
};
