const add = (initialValue, ...args) => {
  if (Array.isArray(initialValue)) initialValue = initialValue.reduce((prev, curr) => prev + curr);
  if (!args.length) return initialValue;

  args = args.map(val => {
    return Array.isArray(val) ?
      val.reduce((prev, curr) => prev + curr, 0) :
      val
  })

  return initialValue + args.reduce((prev, curr) => prev + curr, 0)
}

const subtract = (initialValue, ...args) => {
  if (Array.isArray(initialValue)) initialValue = initialValue.reduce((prev, curr) => prev - curr);
  if (!args.length) return initialValue;

  args = args.map(val => {
    return Array.isArray(val) ?
      val.reduce((prev, curr) => prev + curr, 0) :
      val
  });

  return initialValue - args.reduce((prev, curr) => prev + curr, 0);
}

const multiply = (initialValue, ...args) => {
  if (Array.isArray(initialValue)) initialValue = initialValue.reduce((prev, curr) => prev * curr, 1);
  if (!args.length) return initialValue;
  return initialValue * args.reduce((prev, curr) => prev * curr, 1)
}

const divide = (initialValue, ...args) => {
  if (Array.isArray(initialValue)) {
    // the findIndex gives 0 if the first value is 0, or -1 if there's none, so check for > 0
    if (initialValue.findIndex(val => val === 0) > 0) throw new Error("Divide by zero");
  }
  if (!args.length) return initialValue;

  args = args.map(val => {
    return Array.isArray(val) ?
      val.reduce((prev, curr) => prev + curr, 0) :
      val
  });
}

module.exports = { add, subtract, multiply, divide }