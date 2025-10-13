import { ceil, clamp, floor, random, round } from "./methods";

type ArgType = string | number | boolean;

const resultString = (value: ArgType) => `\x1b[32m${value.toString()}\x1b[37m`;
const argString = (value: ArgType) => `\x1b[35m${value.toString()}\x1b[37m`;

const argsString = <T extends ArgType[]>(...args: T) => args
  .map(argString)
  .join(", ");

// Ceil
describe(
  "Ceil",
  () => {
    const testData = [
      // value, precision, expected
      [10.123, 2, 10.13],
      [3.151, 1, 3.2],
      [7.1, 0, 8],
      [Math.PI, 3, 3.142],
      [1000000.12345678901234567890, 10, 1000000.123456789],
      [56.111111111111111111, 5, 56.11112],
    ];

    testData.forEach(([value, precision, expected]) => it(
      `ceil(${argsString(value, precision)}) is ${resultString(expected)}`,
      () => expect(ceil(value, precision)).toBe(expected)
    ));
  }
);

// Clamp
describe(
  "Clamp",
  () => {
    const testData = [
      // value, max, min, expected
      [15, 10, 0, 10],
      [-5, 10, 0, 0],
      [7, 10, 0, 7],
      [Math.PI, 3.1416, 3.1415, Math.PI],
      [50, -10, 10, NaN],
      [-99, 6, -6, -6],
    ];


    testData.forEach(([value, max, min, expected]) => it(
      `clamp(${argsString(value, max, min)}) is ${resultString(expected)}`,
      () => expect(clamp(value, max, min)).toBe(expected)
    ));
  }
);

// Floor
describe(
  "Floor",
  () => {
    const testData = [
      // value, precision, expected
      [10.123, 2, 10.12],
      [3.151, 1, 3.1],
      [7.1, 0, 7],
      [Math.PI, 3, 3.141],
      [1000000.12345678901234567890, 10, 1000000.123456789],
      [56.111111111111111111, 5, 56.11111],
    ];

    testData.forEach(([value, precision, expected]) => it(
      `floor(${argsString(value, precision)}) is ${resultString(expected)}`,
      () => expect(floor(value, precision)).toBe(expected)
    ));
  }
);

// Round
describe(
  "Round",
  () => {
    const testData = [
      // value, precision, expected
      [10.123, 2, 10.12],
      [3.151, 1, 3.2],
      [7.1, 0, 7],
      [Math.PI, 3, 3.142],
      [1000000.12345678901234567890, 10, 1000000.123456789],
      [56.111111111111111111, 5, 56.11111],
    ];

    testData.forEach(([value, precision, expected]) => it(
      `round(${argsString(value, precision)}) is ${resultString(expected)}`,
      () => expect(round(value, precision)).toBe(expected)
    ));
  }
);

// Random
describe(
  "Random",
  () => {
    const testData: [number, number, boolean, number, false | number][] = [
      // min, max, exclusive, precision,expected
      [0, 10, false, 0, false],
      [1.5, 5.5, false, 2, false],
      [0, 1, true, 3, false],
      [-1000, 1000, false, 0, false],
      [-Infinity, Infinity, true, 6, NaN],
    ];

    testData.forEach(([min, max, exclusive, precision, expected]) => {
      const value = random(min, max, exclusive, precision);
      const operator = exclusive
        ? "<"
        : "<=";
      const comparison = expected === false
        ? `${argString(min)} ${operator} ${resultString(value)} ${operator} ${argString(max)}`
        : resultString(expected);

      it(
        `random(${argsString(min, max, exclusive, precision)}) is ${comparison}`,
        () => {
          if (expected !== false) {
            expect(value).toBe(expected);
          } else if (exclusive) {
            expect(value).toBeGreaterThan(min);
            expect(value).toBeLessThan(max);
          } else {
            expect(value).toBeGreaterThanOrEqual(min);
            expect(value).toBeLessThanOrEqual(max);
          }
        }
      )
    });
  }
);