const isEven = function (num) {
  const evenOrOdd = (num % 2 === 0 ? `${num} is even` : `${num} is odd`)
  return evenOrOdd
}

console.log(isEven(10))
console.log(isEven(11))