const analyze = require("./analyzeArray");

// ERRORS

it("Empty array", () => {
  expect(() => {analyze([])}).toThrow("Empty")
})

it("Not an array", () => {
  expect(() => {analyze("hello")}).toThrow("Not an array")
})

it("Non-number elements", () => {
  expect(() => {analyze([1, 5, 0.3, "hello"])}).toThrow("contains")
})

it("Length and array", () => {
  expect(analyze([1, 2, 3])).toMatchObject({ length: 3, array: [1, 2, 3] })
})

it("Total", () => {
  expect(analyze([1, 2, 3])).toMatchObject({ total: 6 })
})

it("Min/max", () => {
  expect(analyze([1, 2, 3])).toMatchObject({ min: 1, max: 3 })
})

it("Average", () => {
  expect(analyze([1, 2, 3, 6])).toMatchObject({ average: 3 })
})