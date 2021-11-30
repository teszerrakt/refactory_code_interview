const { expect } = require("@jest/globals");
const nearestFibonacci = require("./nearestFibonacci");

test("input = [15, 1, 3]", () => {
  expect(nearestFibonacci([15, 1, 3])).toBe(2);
});
test("input = [0]", () => {
  expect(nearestFibonacci([0])).toBe(0);
});
test("input = [5]", () => {
  expect(nearestFibonacci([5])).toBe(0);
});
test("input = [1020, 1, 7, -4]", () => {
  expect(nearestFibonacci([1020, 1, 7, -4])).toBe(37);
});
