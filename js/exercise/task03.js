'use strict'

let number = 50;
const str = '';
const min = -50;
const max = 50;

const generateRandomNumbers = (num, n, m, s) => {
  let numbers = [];
    
    for (let i = 0; i < num; i ++) {
      numbers.push(Math.round(Math.random() * (m - n) + n));

      if (s === 'even' && numbers[i] % 2 !== 0) {
        numbers[i]++; 
        } else if (s === 'odd' && numbers[i] % 2 === 0) {
          numbers[i]++;
          } else {
            numbers[i];
          };
    };

  return numbers;
}
const result = generateRandomNumbers(number, min, max, str);
console.log(result);

/*
Если максимальгое число 50, а нам нужно вывести ++ (не четное число) тогда 
как число станет не четным в этом случае? Ему ж нужно добавить 1, но как бы не куда..
*/