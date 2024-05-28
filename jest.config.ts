module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/task3/controller/userSchema.ts',
    'src/task3/server.ts',
    'src/index.ts',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
