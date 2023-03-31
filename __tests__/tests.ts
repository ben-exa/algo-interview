import { calculateNumberOfDollars } from "../interview";

test("Public test 1", () => {
  expect(calculateNumberOfDollars([1, 0, 2])).toBe(5);
});

test("Public test 1", () => {
  expect(calculateNumberOfDollars([1, 2, 2])).toBe(4);
});

test("Public test 3", () => {
  expect(calculateNumberOfDollars([1, 0, 2, 1, 4])).toBe(8);
});
test("Public test 4", () => {
  expect(calculateNumberOfDollars([1, 0, 2, 1, 4, 1])).toBe(9);
});

test("Public test 5", () => {
  expect(calculateNumberOfDollars([0, 0, 0, 1, 4, 1])).toBe(9);
});
