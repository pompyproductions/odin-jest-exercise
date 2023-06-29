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

  args = args.map(val => {
    return Array.isArray(val) ?
      val.reduce((prev, curr) => prev * curr, 1) :
      val
  })

  return initialValue * args.reduce((prev, curr) => prev * curr, 1)
}

const divide = (initialValue, ...args) => {
  if (Array.isArray(initialValue)) {
    // the findIndex gives 0 if the first value is 0, or -1 if there's none, so check for > 0
    if (initialValue.findIndex(val => val === 0) > 0) throw new Error("Divide by zero");
    initialValue = initialValue.reduce((prev, curr) => prev / curr)
  }
  if (!args.length) return initialValue;

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let val of args[i]) {
        console.log(val);
        if (val === 0) throw new Error("Divide by zero");
        initialValue /= val;
      }
    }
    if (args[i] === 0) throw new Error("Divide by zero");
    initialValue /= args[i];
  }

  return initialValue;
}

module.exports = { add, subtract, multiply, divide }