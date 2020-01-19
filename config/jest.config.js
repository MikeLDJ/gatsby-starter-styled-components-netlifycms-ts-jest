module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/config/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    // eslint-disable-next-line max-len
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'config'],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFilesAfterEnv: [
    '<rootDir>/config/jest.setup.js',
    '<rootDir>/config/jest.loadershim.js',
  ],
};
// TODO this should be main config file instead of package.json jest field
