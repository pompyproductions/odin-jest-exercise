const caesar = require("./caesar");

// ENCODE

test("ENCODE: no shift", () => {
  expect(caesar.encode("hello", 0)).toBe("hello");
  expect(caesar.encode("no arg")).toBe("no arg");
})

test("ENCODE: shift alphabet", () => {
  expect(caesar.encode("hello", 5)).toBe("mjqqt");
  expect(caesar.encode("no arg", 13)).toBe("ab net");
})


// DECODE

test("DECODE: no shift", () => {
  expect(caesar.decode("hello", 0)).toBe("hello");
  expect(caesar.decode("no arg")).toBe("no arg");
})