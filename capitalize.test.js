const capitalize = require("./capitalize");

test("basic unicode string", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
  expect(capitalize("what's up world!")).toBe("What's up world!");
});

test("start with non-letter", () => {
  expect(capitalize(" i start with a space")).toBe(" i start with a space");
  expect(capitalize("0 letters in the beginning")).toBe("0 letters in the beginning");
});

test("start with capitalized letter", () => {
  expect(capitalize("I'm already good")).toBe("I'm already good");
});

test("first letter accent", () => {
  expect(capitalize("è problematico")).toBe("È problematico");
  expect(capitalize("çipura")).toBe("Çipura");
})

test("first letter foreign", () => {
  expect(capitalize("şarap")).toBe("Şarap");
})