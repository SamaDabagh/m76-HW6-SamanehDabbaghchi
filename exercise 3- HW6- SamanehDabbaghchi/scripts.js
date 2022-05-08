/*
3-
user = {
id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
scores: { english: 10, math: 19.5, physics: 14 },
};
● / Function that add a new course score and return the new user object (dynamic
argument)
● // Function that add a new role and check if his age is under 18 add status:
"veryyoung" to that object and return the object
●
● // Convert this object to array and after that add (fatherName: "ali") and then convert
it to object */

// part 1
user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 12,
  scores: {
    english: 10,
    math: 19.5,
    physics: 14,
  },
};
myArr = { fatherName: "ali" };

const addCourse = function (course, score) {
  user.scores[course] = score;
  return user;
};
addCourse("Chemistry", 17);
// console.log(user);

// part 2

const addRole = function (role) {
  user.roles.push(role);
  if (user.age <= 18) {
    user.status = "veryYoung";
  }
  return user;
};
// console.log(addRole("teacher"));
// console.log(user);

// part 3

const convertAndAdd = function (main) {
  let tempArr = Object.entries(main);
  return tempArr;
};
const convertArrToObj = function (arr) {
  let object = Object.fromEntries(arr);
  return object;
};
let newArr = convertAndAdd(user).concat(convertAndAdd(myArr));
console.log(newArr);

console.log(convertArrToObj(newArr));
