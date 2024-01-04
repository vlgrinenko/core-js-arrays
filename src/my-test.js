function sumArrays(arr1, arr2) {
  const len = Math.max(arr1.length, arr2.length);

  return Array.from({ length: len }).map(
    (_, i) => (arr1[i] || 0) + (arr2[i] || 0)
  );
}

console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4]));
