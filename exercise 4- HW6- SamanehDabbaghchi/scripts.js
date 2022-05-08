/*
4- Create a function to build a Clock in 12 hours(with AM & PM ) and show The current Time in the console.
 */
const buildClock = function (hours, minuts) {
  let result;
  if (hours >= 13) {
    result = `${hours - 12}:${minuts} PM`;
  } else {
    result = `${hours}:${minuts} AM`;
  }
  return result;
};
let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
console.log(buildClock(hours, mins));
