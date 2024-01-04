function createNDimensionalArray(n, size) {
  if (n === 0) {
    return 0;
  }

  const arr = new Array(size);

  arr.fill(n === 1 ? 0 : createNDimensionalArray(n - 1, size));

  return arr;
}

console.log(createNDimensionalArray(3, 2));
