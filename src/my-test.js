function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = sum / arr.length;

  if (Number.isInteger(average)) {
    return average;
  }

  return Number(average.toFixed(2));
}

console.log(getAverage([1, 10, 100, 1000]));
