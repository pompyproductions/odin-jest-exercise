const analyze = (array) => {
  if (!Array.isArray(array)) throw new Error ("Not an array");
  if (!array.length) throw new Error("Empty array");
  // start from 1
  const result = {
    array,
    length: array.length,
    total: 0,
    min: array[0],
    max: array[0]
    // average: 0
  }
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (typeof val !== "number") throw new Error("Array contains non-number elements");
    if (val > result.max) result.max = val;
    if (val < result.min) result.min = val;
    result.total += val; 
  }
  result.average = result.total / result.length;
  return result
}

module.exports = analyze