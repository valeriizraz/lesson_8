'use strict'

let number = 10;
const min = -50;
const max = 50;
  
const generateRandomNumbers = (num, n, m) => {
  let numbers = [];
    for (let i = 0; i < num; i ++) {
      numbers.push(Math.round(Math.random() * (m - n) + n));
    };
  return numbers;
};
const result = generateRandomNumbers(number, min, max);
console.log(result);