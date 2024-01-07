/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {array} numbers - The array of numbers.
 * @return {array} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
  const oddIndexes = [];
  numbers.forEach((el, index) => {
    if (el % 2 !== 0) {
      oddIndexes.push(index);
    }
  });

  return oddIndexes;
}

const xxx = [1, 2, 3, 4, 5];
console.log(getIndicesOfOddNumbers(xxx));
