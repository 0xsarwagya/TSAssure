// generateData.ts

/**
 * Generate a random integer within a range.
 * @param min Minimum value of the range (inclusive).
 * @param max Maximum value of the range (inclusive).
 * @returns Random integer within the specified range.
 */
export function generateRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random floating-point number within a range.
 * @param min Minimum value of the range (inclusive).
 * @param max Maximum value of the range (inclusive).
 * @returns Random floating-point number within the specified range.
 */
export function generateRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generate a random element from an array.
 * @param array Array from which to select a random element.
 * @returns Random element from the array.
 */
export function generateRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a random array of specified length with random elements.
 * @param length Length of the array to be generated.
 * @param generator Function to generate random elements.
 * @returns Random array with specified length and random elements.
 */
export function generateRandomArray<T>(
  length: number,
  generator: () => T
): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(generator());
  }
  return result;
}
