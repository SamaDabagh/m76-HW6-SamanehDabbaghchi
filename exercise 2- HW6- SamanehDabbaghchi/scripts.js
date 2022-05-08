/*
2-Given an array of five values, calculate the average star rating, rounded to
two decimal places. The array contains user votes per star, so the first element
[0] contains the number of 1-star ratings and the last element [4], the
number of 5-star ratings.
Return the average score in [brackets], followed by a space and asterisks' * to represent
the star rating, rounded to the nearest whole star.*/

const starRating = function (sampleArray) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    sum += sampleArray[i] * (i + 1);
    count += sampleArray[i];
  }
  let ave = Math.round(sum / count);
  return ave;
};

myArray = [55, 67, 98, 115, 61];
console.log("Average rate is " + starRating(myArray) + " *.");
