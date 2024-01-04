function insertItem(arr, item, index) {
  return [...arr.splice(0, index), item, ...arr.splice(index - 1)];
}

console.log(insertItem([1, 3, 4, 5], 2, 1));
