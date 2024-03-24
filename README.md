# TSAssure

TSAssure is a TypeScript testing utility package designed to assist developers in writing comprehensive and reliable tests for their TypeScript projects. It provides a collection of functions for mocking dependencies, generating test data, and asserting conditions, making it easier to write effective tests.

## Installation

You can install TSAssure via npm:

```bash
npm install tsassure --save-dev
```
````

## Usage

### Mocking Dependencies

```typescript
import { mock, mockResolvedPromise } from "tsassure";

// Mock a function with custom implementation
const mockedFunction = mock((arg: string) => arg.toUpperCase());
console.log(mockedFunction("hello")); // Outputs: HELLO

// Mock a promise with resolved value
const mockedPromise = mockResolvedPromise("success");
await expect(mockedPromise).resolves.toBe("success");
```

### Data Generation

```typescript
import { generateRandomNumber, generateRandomString } from "tsassure";

// Generate a random number within a range
const randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber); // Outputs: Random number between 1 and 100

// Generate a random string of specified length
const randomString = generateRandomString(10);
console.log(randomString); // Outputs: Random string with length 10
```

### Assertion Functions

```typescript
import { assert, assertType, assertRange } from "tsassure";

// Assert a condition
assert(true, "Custom error message");

// Assert that a value is of a specific type
const value: any = 42;
assertType(value, "number");

// Assert that a value is within a specified range
assertRange(value, 1, 100);
```

## Contributing

Contributions to TSAssure are welcome! If you encounter any issues, have feature requests, or want to contribute improvements, please open an issue or pull request on the [GitHub repository](https://github.com/example/tsassure).

## License

TSAssure is licensed under the MIT License. See the [LICENSE](https://github.com/example/tsassure/blob/main/LICENSE) file for details.