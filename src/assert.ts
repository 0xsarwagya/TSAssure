/**
 * Assert a condition, throwing an error if false.
 * @param condition Condition to be asserted.
 * @param message Optional error message to be thrown.
 */
export function assert(
  condition: boolean,
  message: string = "Assertion failed"
): void {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Assert that a value is of a specific type.
 * @param value Value to be asserted.
 * @param type Expected type of the value.
 * @param message Optional error message to be thrown.
 */
export function assertType<T>(
  value: any,
  type: string,
  message?: string
): void {
  const valueType = typeof value;
  assert(
    valueType === type,
    message || `Expected ${type} but received ${valueType}`
  );
}

/**
 * Assert that a value is within a specified range.
 * @param value Value to be asserted.
 * @param min Minimum value of the range.
 * @param max Maximum value of the range.
 * @param message Optional error message to be thrown.
 */
export function assertRange(
  value: number,
  min: number,
  max: number,
  message?: string
): void {
  assert(
    value >= min && value <= max,
    message || `Value ${value} is not within the range [${min}, ${max}]`
  );
}

/**
 * Assert that a value is truthy.
 * @param value Value to be asserted.
 * @param message Optional error message to be thrown.
 */
export function assertTruthy(value: any, message?: string): void {
  assert(!!value, message || `Value ${value} is not truthy`);
}

/**
 * Assert that a value is falsy.
 * @param value Value to be asserted.
 * @param message Optional error message to be thrown.
 */
export function assertFalsey(value: any, message?: string): void {
  assert(!value, message || `Value ${value} is not falsy`);
}

/**
 * Assert that a value is equal to a specified value.
 * @param actual Actual value to be asserted.
 * @param expected Expected value for comparison.
 * @param message Optional error message to be thrown.
 */
export function assertEquals(
  actual: any,
  expected: any,
  message?: string
): void {
  assert(
    actual === expected,
    message || `Expected ${expected}, but received ${actual}`
  );
}

/**
 * Assert that a value is not equal to a specified value.
 * @param actual Actual value to be asserted.
 * @param expected Unexpected value for comparison.
 * @param message Optional error message to be thrown.
 */
export function assertNotEquals(
  actual: any,
  unexpected: any,
  message?: string
): void {
  assert(
    actual !== unexpected,
    message || `Did not expect ${unexpected}, but received ${actual}`
  );
}

/**
 * Assert that a value is an instance of a specified type.
 * @param value Value to be asserted.
 * @param type Expected type of the value.
 * @param message Optional error message to be thrown.
 */
export function assertInstanceOf(
  value: any,
  type: any,
  message?: string
): void {
  assert(
    value instanceof type,
    message || `Expected instance of ${type}, but received ${value}`
  );
}

/**
 * Assert that a function throws an error.
 * @param func Function to be asserted.
 * @param expectedError Expected error to be thrown.
 * @param message Optional error message to be thrown.
 */
export function assertThrows(
  func: () => void,
  expectedError: any,
  message?: string
): void {
  let error = null;
  try {
    func();
  } catch (err) {
    error = err;
  }
  assert(
    error !== null && error instanceof expectedError,
    message || `Expected ${expectedError}, but no error was thrown`
  );
}
