function sum(initialValue, ...args) {
  if (Array.isArray(initialValue)) initialValue = initialValue.reduce((prev, curr) => prev + curr, 0);
  if (!args.length) return initialValue;
  args = args.map((val) => {
    if (Array.isArray(val)) {
      return val.reduce((prev, curr) => prev + curr, 0)
    } return val
  })
  return initialValue + args.reduce((prev, curr) => prev + curr, 0)
}

module.exports = sum;