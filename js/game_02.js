'use strict' 

const numMin = 3;
const numMax = 16;

let sum = numMax - numMin;
console.log(sum);

let numberOfTimes = Math.floor(sum * 0.3);
console.log(`количество попыток: ${numberOfTimes}`);

const rand = Math.round(Math.random() * (numMax - numMin) + numMin);
console.log(`random: ${rand}`);

let number = 0;
let arrNumbers = [];
const revis = (num, arr) => {
  for (const elem of arrNumbers) {
    if (number === elem) {
      console.log(elem);
      return elem;
    };
  };
};
const resRevis = revis(number, arrNumbers);
console.log(resRevis);

for (let i = 0; i < numberOfTimes; i++) {
  rand;
  console.log(`Рандомное число ${rand}`);

  number = +prompt('Угадайте число');
  arrNumbers.push(number); 

  console.log(`Номер пользователя ${number}`);
  console.log(arrNumbers);
    
    if (resRevis) {
      console.log('Это число вы вводили, введите другое');
      };  

    if (number > rand) {
      console.log('Больше');
      }; 
      
    if (number < rand) {
      console.log('Меньше');
      };
    
    if (number === rand) {
      console.log('Верно!');
    } else {
              console.log('Данные не верны');
            };
};

