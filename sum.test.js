const sum = require("./sum");

it("one value", () => {
  expect(sum(10)).toBe(10);
  expect(sum(0)).toBe(0);
  expect(sum(-5)).toBe(-5);
})

it("two separate ints", () => {
  expect(sum(3, 5)).toBe(8);
  expect(sum(16, 22)).toBe(38);
})

it("many ints", () => {
  expect(sum(3, 5, 8)).toBe(16);
  expect(sum(16, 22, 12)).toBe(50);
  expect(sum(16, 5, 4, -10)).toBe(15);
})

it("single array", () => {
  expect(sum([3, 5, 8])).toBe(16);
})

it("single array and numbers", () => {
  expect(sum([3, 5, 8], 34)).toBe(50);
})

it("arrays and numbers mixed", () => {
  expect(sum([3, 5, 8], 34, [3, 5])).toBe(58);
})