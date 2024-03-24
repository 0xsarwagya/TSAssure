declare module "tsassure" {
  // Mocking Dependencies Module
  export function mock<T>(implementation?: T): jest.Mock<T>;
  export function mockObject<T>(properties: Partial<T>): T;
  export function mockResolvedPromise<T>(value: T): Promise<T>;
  export function mockRejectedPromise<T>(error: any): Promise<T>;
  export function mockThrowError(error: any): jest.Mock<any>;
  export function mockWithConditions<T>(conditions: [any, T][]): jest.Mock<T>;

  // Data Generation Module
  export function generateRandomNumber(min: number, max: number): number;
  export function generateRandomString(length: number): string;
  export function generateRandomBoolean(): boolean;
  export function generateRandomDate(start: Date, end: Date): Date;
  export function generateRandomInteger(min: number, max: number): number;
  export function generateRandomFloat(min: number, max: number): number;
  export function generateRandomElement<T>(array: T[]): T;
  export function generateRandomArray<T>(
    length: number,
    generator: () => T
  ): T[];

  // Assertion Functions Module
  export function assert(condition: boolean, message?: string): void;
  export function assertType<T>(
    value: any,
    type: string,
    message?: string
  ): void;
  export function assertRange(
    value: number,
    min: number,
    max: number,
    message?: string
  ): void;
  export function assertTruthy(value: any, message?: string): void;
  export function assertFalsey(value: any, message?: string): void;
  export function assertEquals(
    actual: any,
    expected: any,
    message?: string
  ): void;
  export function assertNotEquals(
    actual: any,
    unexpected: any,
    message?: string
  ): void;
  export function assertInstanceOf(
    value: any,
    type: any,
    message?: string
  ): void;
  export function assertThrows(
    func: () => void,
    expectedError: any,
    message?: string
  ): void;
}
