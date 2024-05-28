import { longestConsecutive } from '../longestConsecutive';

const testCases = [
  {
    inputParams: [100, 4, 200, 1, 3, 2],
    outputParams: 4,
  },
  {
    inputParams: [10, 5, 11, 12],
    outputParams: 3,
  },
  {
    inputParams: [0, -1, 1, 2, 3, 4, 5, 6, 7],
    outputParams: 9,
  },
  {
    inputParams: [],
    outputParams: 0,
  },
  {
    inputParams: [1],
    outputParams: 1,
  },
  {
    inputParams: [1, 3, 4, 1, 5, 9, 4],
    outputParams: 3,
  },
];

describe('longestConsecutive', () => {
  testCases.forEach(({ inputParams, outputParams }) => {
    it(`should return ${outputParams} for the input ${JSON.stringify(inputParams)}`, () => {
      expect(longestConsecutive(inputParams)).toBe(outputParams);
    });
  });
});
