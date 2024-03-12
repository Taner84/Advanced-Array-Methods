//MAP
// const doubleMap = (numbers) => {
//   return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 2,  3]))

// let result =[1, 2, 3, 4].map (number => number * 2)
// console.log(result)


// .filter - loops and returns an array with matching conditions
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

// console.log(filter([1, 2, 3, 4, 5, 6], 3))
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(nums => nums > 3))