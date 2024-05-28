import { fizzBuzz } from './fizzBuzz';
import { longestConsecutive } from './longestConsecutive';

const runFizzBuzz = (n: string) => {
  const num = parseInt(n, 10);
  if (isNaN(num)) {
    console.error('Please provide a valid number for fizz-buzz');
    process.exit(1);
  }
  console.log(fizzBuzz(num).join('\n'));
};

const runLongestConsecutive = (arrayString: string) => {
  try {
    const array = JSON.parse(arrayString);
    if (!Array.isArray(array) || !array.every(Number.isInteger)) {
      throw new Error('Input must be an array of integers');
    }
    console.log(longestConsecutive(array));
  } catch (error) {
    console.error(
      'Please provide a valid array of integers for longest-consecutive',
    );
    process.exit(1);
  }
};

export const main = () => {
  const args = process.argv.slice(2);
  const command = args[0];
  const commandArgs = args[1];

  switch (command) {
    case 'fizz-buzz':
      runFizzBuzz(commandArgs);
      break;
    case 'longest-consecutive':
      runLongestConsecutive(commandArgs);
      break;
    default:
      console.error(
        'Unknown command. Use "fizz-buzz" or "longest-consecutive".',
      );
      process.exit(1);
  }
};

main();
