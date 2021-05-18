const howManyHundreds = function (num) {
  const sobra = num % 100;
  const qty = (num - sobra) / 100;
  return qty
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(1234), "=?", 12);