/**
 * Mock a function with custom implementation.
 * @param implementation Custom implementation of the mocked function.
 * @returns Jest mock function.
 */
export function mock<T>(implementation?: T): jest.Mock<T> {
  return jest.fn().mockImplementation(() => implementation);
}

/**
 * Mock an object with custom properties.
 * @param properties Custom properties of the mocked object.
 * @returns Mocked object.
 */
export function mockObject<T>(properties: Partial<T>): T {
  return properties as T;
}

/**
 * Mock a promise with resolved value.
 * @param value Resolved value of the promise.
 * @returns Promise resolved with the provided value.
 */
export function mockResolvedPromise<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}

/**
 * Mock a promise with rejected error.
 * @param error Error to be rejected with.
 * @returns Promise rejected with the provided error.
 */
export function mockRejectedPromise<T>(error: any): Promise<T> {
  return Promise.reject(error);
}

/**
 * Mock a function to throw an error when called.
 * @param error Error to be thrown.
 * @returns Jest mock function that throws the provided error.
 */
export function mockThrowError(error: any): jest.Mock<any> {
  return jest.fn().mockImplementation(() => {
    throw error;
  });
}

/**
 * Mock a function to return a value based on provided conditions.
 * @param conditions Array of [input, output] pairs representing conditions and corresponding outputs.
 * @returns Jest mock function with conditional behavior.
 */
export function mockWithConditions<T>(conditions: [any, T][]): jest.Mock<T> {
  return jest.fn().mockImplementation((input) => {
    const condition = conditions.find(([cond]) => cond === input);
    return condition ? condition[1] : undefined;
  });
}
