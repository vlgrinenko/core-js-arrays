function getHexRGBValues(arr) {
  const result = [];
  arr.forEach((element) => {
    let newElement = element.toString(16).toUpperCase();

    if (newElement.length !== 6) {
      newElement = '0'.repeat(6 - newElement.length) + newElement;
    }

    newElement = '#'.concat(newElement);
    result.push(newElement);
  });

  return result;
}

const xxx = [0, 255, 16777215];
console.log(getHexRGBValues(xxx));
