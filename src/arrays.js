const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};
const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const newArray = numbers.map(num => {
    return String(num);
  });
  return newArray;
};

const uppercaseWordsInArray = strings => {
  const newArray = strings.map(element => {
    return element.toUpperCase();
  });
  return newArray;
};

const reverseWordsInArray = strings => {
  const newArray = strings.map(e => {
    return e
      .split([])
      .reverse()
      .join('');
  });
  return newArray;
};

function onlyEven(numbers) {
  // your code here
}

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
