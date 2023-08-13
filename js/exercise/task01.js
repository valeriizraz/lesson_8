'use strict';

let num = 15;
  
const generateRandomNumbers = (n) => {
  let numbers = [];
    for (let i = 0; i < n; i ++) {
      numbers.push(Math.round(Math.random() * 100));
    };
  return numbers;
};
const result = generateRandomNumbers(num);
console.log(result);