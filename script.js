//MAP
// const doubleMap = (numbers) => {
//   return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 2,  3]))

// let result =[1, 2, 3, 4].map (number => number * 2)
// console.log(result)


// // .filter - loops and returns an array with matching conditions


// // console.log(filter([1, 2, 3, 4, 5, 6], 3))
// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(nums => nums > 3))


//higher order functions
//map - loops and returns an array
//filter
//reduce

// const doubleMap = (numbers) => {
//   return numbers.map(number => number *2)
// }

// console.log (doubleMap([1, 2, 3]))

// let result = [1, 2, 3, 4].map(number => 
//  number *2 )
//   console.log(result)

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

// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num =>
//   num > 4 || num < 2))


const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'leonardo', netWorth: 100000000 },
]

// console.log(nums.filter(num => num > 4 || num < 2))
let result = actors.filter(actor => actor.netWorth > 10)

playground.innerHTML = `<h1>${result[0].name}</h1>`