# Leadtech Tasks

## Table of contents

- [Leadtech Tasks](#leadtech-tasks)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Usage](#usage)
    - [Task 1: FizzBuzz](#task-1-fizzbuzz)
    - [Task 2: Longest Consecutive Sequence](#task-2-longest-consecutive-sequence)
    - [Task 3: User Registration](#task-3-user-registration)
  - [Development](#development)
    - [Style guide](#style-guide)
    - [Testing](#testing)
      - [Running tests](#running-tests)
  - [After finishing a task](#after-finishing-a-task)

## Getting started

1. First, clone the repo and install the dependencies,

   ```
   npm install
   ```

   Keep in mind that we use `npm` for managing Node packages. If you try installing the dependencies with `yarn`, it will generate a `yarn-lock` file that will likely cause problems with the existing `package-lock.json`.

## Usage

This repository contains three exercises implemented in TypeScript using Node.js. Below are the details for each exercise and the necessary commands to run each one and their respective tests.

### Task 1 FizzBuzz

This exercise prints numbers from 1 to n, but for multiples of 3, it prints "Fizz" instead of the number and for multiples of 5, it prints "Buzz". For numbers that are multiples of both, it prints "FizzBuzz".

To run the FizzBuzz code, use the following command:

```
 npm run fizz-buzz 15
```

### Task 2 Longest Consecutive Sequence

This exercise finds the longest consecutive sequence in an array of numbers.

To run the Longest Consecutive Sequence exercise, use the following command:

```
 npm run longest-consecutive "[100, 4, 200, 1, 3, 2]"
```

### Task 3 User Registration

This exercise creates a small server using Express that allows user registration and validates input data using Yup. Users are stored in an in-memory array and a UUID is assigned to each registered user. A container using Awilix is created to use the dependency injector.

To run the Longest Consecutive Sequence exercise, use these command:

```
 npm run start
```

The server will be available at http://localhost:3000.

You can make a request to the endpoint at http://localhost:3000/register with the POST method using the following body:

```
{
    "email": "pepe2@gmail.com",
    "name": "pepe"
}
```

You will receive a 201 Created response if the registration is successful, or a 409 Conflict response if the email has already been used.

## Development

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running tests

Before running the test, install the needed dependencies:

```
npm install
```

Execute all tests with:

To run the tests we need to run this script

```
npm run test
```

## After finishing a task

Before pushing your changes, make sure you run the linter and prettier to ensure the code follows the rules, or the CI pipeline will throw an error and fail:

```
npm run lint
npm run format
```
