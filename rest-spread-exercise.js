// Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// Refactor it to use the rest operator & an arrow function:

const evens = (...nums) => nums.filter((num) => num % 2 === 0)

/* findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
 */

const findMin = (...vals) => vals.reduce((min, val) => (min < val ? min : val))

function mergeObjects(objA, objB) {
  return { ...objA, ...objB }
}

/*doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8] */

function doubleAndReturnArgs(arr, ...args) {
  const doubles = [...args].map((val) => val * 2)
  return [...arr, ...doubles]
}
// ***** Slice and Dice! *********

/** remove a random element in the items array
and return a new array without that item. */
const myArr = [1, 2, 3]
const removeRandom = (items) => {
  // get a randomIndex number
  const randomIndex = Math.floor(Math.random() * items.length)
  // slice out random index number of items arr
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)]
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val }
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  return { ...obj, [key]: val }
}
