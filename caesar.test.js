const caesar = require("./caesar");

// ENCRYPT

test("ENCRYPT: no shift", () => {
  expect(caesar.encrypt("hello", 0)).toBe("hello");
  expect(caesar.encrypt("no arg")).toBe("no arg");
})

test("ENCRYPT: shift alphabet", () => {
  expect(caesar.encrypt("hello", 5)).toBe("mjqqt");
  expect(caesar.encrypt("no arg", 13)).toBe("ab net");
})

test("ENCRYPT: shift uppercase", () => {
  expect(caesar.encrypt("Hello", 5)).toBe("Mjqqt");
  expect(caesar.encrypt("NO ARG", 13)).toBe("AB NET");
})

test("ENCRYPT: skip punctuation and numbers", () => {
  expect(caesar.encrypt("Hello!!1", 5)).toBe("Mjqqt!!1");
  expect(caesar.encrypt("NO_ARG_h3r3", 13)).toBe("AB_NET_u3e3");
})


// DECRYPT

test("DECRYPT: no shift", () => {
  expect(caesar.decrypt("hello", 0)).toBe("hello");
  expect(caesar.decrypt("no arg")).toBe("no arg");
})

test("DECRYPT: shift alphabet", () => {
  expect(caesar.decrypt("mjqqt", 5)).toBe("hello");
  expect(caesar.decrypt("ab net", 13)).toBe("no arg");
})

test("DECRYPT: shift uppercase", () => {
  expect(caesar.decrypt("Mjqqt", 5)).toBe("Hello");
  expect(caesar.decrypt("AB NET", 13)).toBe("NO ARG");
})

test("DECRYPT: skip punctuation and numbers", () => {
  expect(caesar.decrypt("Mjqqt!!1", 5)).toBe("Hello!!1");
  expect(caesar.decrypt("AB_NET_u3e3", 13)).toBe("NO_ARG_h3r3");
})