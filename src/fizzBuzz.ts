export const fizzBuzz = (inputParam: number): string[] => {
  const output = Array.from({ length: inputParam }, (_, i) => {
    const num = i + 1;
    return num % 15 === 0
      ? 'FizzBuzz'
      : num % 3 === 0
        ? 'Fizz'
        : num % 5 === 0
          ? 'Buzz'
          : num.toString();
  });

  return output;
};
