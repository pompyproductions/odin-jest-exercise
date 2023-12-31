const calculator = require("./calculator");

// ADD TESTS

it("ADD: one value", () => {
  expect(calculator.add(10)).toBe(10);
  expect(calculator.add(0)).toBe(0);
  expect(calculator.add(-5)).toBe(-5);
})

it("ADD: two separate ints", () => {
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.add(16, 22)).toBe(38);
})

it("ADD: many ints", () => {
  expect(calculator.add(3, 5, 8)).toBe(16);
  expect(calculator.add(16, 22, 12)).toBe(50);
  expect(calculator.add(16, 5, 4, -10)).toBe(15);
})

it("ADD: single array", () => {
  expect(calculator.add([3, 5, 8])).toBe(16);
})

it("ADD: single array and numbers", () => {
  expect(calculator.add([3, 5, 8], 34)).toBe(50);
})

it("ADD: arrays and numbers mixed", () => {
  expect(calculator.add([3, 5, 8], 34, [3, 5])).toBe(58);
})

// SUBTRACT TESTS

it("SUBTRACT: one value", () => {
  expect(calculator.subtract(10)).toBe(10);
  expect(calculator.subtract(0)).toBe(0);
})

it("SUBTRACT: two separate ints", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.subtract(16, 22)).toBe(-6);
})

it("SUBTRACT: many ints", () => {
  expect(calculator.subtract(3, 5, 8)).toBe(-10);
  expect(calculator.subtract(16, 22, 12)).toBe(-18);
  expect(calculator.subtract(16, 5, 4, -10)).toBe(17);
})

it("SUBTRACT: single array", () => {
  expect(calculator.subtract([3, 5, 8])).toBe(-10);
  expect(calculator.subtract([16, 22])).toBe(-6);
})

it("SUBTRACT: single array and numbers", () => {
  expect(calculator.subtract([3, 5, 8], -34)).toBe(24);
})

it("SUBTRACT: arrays and numbers mixed", () => {
  expect(calculator.subtract([3, 5, 8], -34, [3, 5])).toBe(16);
})

// MULTIPLY TESTS

it("MULTIPLY: one value", () => {
  expect(calculator.multiply(0)).toBe(0);
  expect(calculator.multiply(4)).toBe(4);
});

it("MULTIPLY: two ints", () => {
  expect(calculator.multiply(0, 5)).toBe(0);
  expect(calculator.multiply(4, 12)).toBe(48);
  expect(calculator.multiply(-3, 11)).toBe(-33);
});

it("MULTIPLY: multiple ints", () => {
  expect(calculator.multiply(0, 5, 2)).toBe(0);
  expect(calculator.multiply(4, 12, 1)).toBe(48);
  expect(calculator.multiply(-3, 11, -3)).toBe(99);
});

it("MULTIPLY: single array", () => {
  expect(calculator.multiply([0, 5, 2])).toBe(0);
  expect(calculator.multiply([4, 12, 1])).toBe(48);
  expect(calculator.multiply([-3, 11, -3])).toBe(99);
});

it("MULTIPLY: single array and numbers", () => {
  expect(calculator.multiply([0, 5, 2], 4)).toBe(0);
  expect(calculator.multiply([4, 12, 1], -1)).toBe(-48);
  expect(calculator.multiply([-3, 11, -3, -2])).toBe(-198);
});

it("MULTIPLY: arrays and numbers mixed", () => {
  expect(calculator.multiply([3, 5, 2], -3, [0.5, -1])).toBe(45);
})

// DIVIDE TESTS

it("DIVIDE: one value", () => {
  expect(calculator.divide(0)).toBe(0);
  expect(calculator.divide(4)).toBe(4);
});

it("DIVIDE: two ints", () => {
  expect(calculator.divide(0, 5)).toBe(0);
  expect(calculator.divide(12, 4)).toBe(3);
  expect(calculator.divide(10, -2)).toBe(-5);
});

it("DIVIDE: multiple ints", () => {
  expect(calculator.divide(0, 5, 2)).toBe(0);
  expect(calculator.divide(12, 4, 1)).toBe(3);
  expect(calculator.divide(-99, 11, -3)).toBe(3);
});

it("DIVIDE: single array", () => {
  expect(calculator.divide([0, 5])).toBe(0);
  expect(calculator.divide([12, 4])).toBe(3);
  expect(calculator.divide([10, -2])).toBe(-5);
});

it("DIVIDE: single array and numbers", () => {
  expect(calculator.divide([0, 5], 3, 2)).toBe(0);
  expect(calculator.divide([12, 4], 3)).toBe(1);
  expect(calculator.divide([10, -2], -2)).toBe(2.5);
});

it("DIVIDE: arrays and numbers mixed", () => {
  expect(calculator.divide([180, 3, -2], 0.5, [-3, 4, 2, 2])).toBe(1.25);
})

it("DIVIDE: zero division", () => {
  function zeroDivisionTwoInts() {
    calculator.divide(5, 0)
  }
  function zeroDivisionMultipleInts() {
    calculator.divide(5, 3, 0)
  }
  function zeroDivisionArgsArray() {
    calculator.divide(5, [3, 0])
  }
  function zeroDivisionInitArray() {
    calculator.divide([5, 0], 3)
  }
  expect(zeroDivisionTwoInts).toThrow("zero");
  expect(zeroDivisionMultipleInts).toThrow("zero");
  expect(zeroDivisionArgsArray).toThrow("zero");
  expect(zeroDivisionInitArray).toThrow("zero");
});

