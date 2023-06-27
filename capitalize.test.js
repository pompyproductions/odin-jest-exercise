const capitalize = require("./capitalize");

test("normal string", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
})