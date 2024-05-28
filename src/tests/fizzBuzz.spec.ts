import { fizzBuzz } from '../fizzBuzz';

const testCases = [
  {
    inputParams: 0,
    outputParams: [],
  },
  {
    inputParams: 1,
    outputParams: ['1'],
  },
  {
    inputParams: 3,
    outputParams: ['1', '2', 'Fizz'],
  },
  {
    inputParams: 5,
    outputParams: ['1', '2', 'Fizz', '4', 'Buzz'],
  },
  {
    inputParams: 9,
    outputParams: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz'],
  },
  {
    inputParams: 15,
    outputParams: [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ],
  },
];

describe('fizzBuzz', () => {
  testCases.forEach(({ inputParams, outputParams }) => {
    it(`should return ${JSON.stringify(outputParams)} for n = ${inputParams}`, () => {
      expect(fizzBuzz(inputParams)).toEqual(outputParams);
    });
  });
});
