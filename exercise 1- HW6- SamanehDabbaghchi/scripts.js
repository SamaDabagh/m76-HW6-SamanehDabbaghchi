/*

1-Create a function that takes in an array and returns an array of the accumulating
sum*/
const accumulatingArray = function (sampleArray) {
  let sum = 0;
  return sampleArray.map((item) => {
    sum += item;
    return sum;
  });
};
const mainArray = [1, 5, 7];
console.log(accumulatingArray(mainArray));
