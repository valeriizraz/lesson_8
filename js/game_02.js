'use strict' 

const numMin = 3;
const numMax = 25;

let sum = numMax - numMin;
console.log(sum);

let numberOfTimes = Math.floor(sum * 0.3);
console.log(`количество попыток: ${numberOfTimes}`);

const rand = Math.round(Math.random() * (numMax - numMin) + numMin);
console.log(`random: ${rand}`);

let number = 0;
let arrNumbers = [];
const revis = (num) => {
  for (const elem of arrNumbers) {
    if (num === elem) {
      console.log(elem);
      return elem;
    };
  };
};

for (let i = 0; i < numberOfTimes; i++) {
  console.log(`Рандомное число ${rand}`);

  number = +prompt('Угадайте число');
  const resRevis = revis(number, arrNumbers);
  console.log(`Номер пользователя ${number}`);

    if (number > rand) {
      console.log('Больше');
      } else if (number < rand) {
      console.log('Меньше');
      } else if (number === rand) {
      console.log('Верно!');
      } else {
        console.log('Данные не верны');
      };
      
      if (resRevis) {
        console.log('Это число вы вводили, введите другое');
      } else {
        arrNumbers.push(number); 
      }  
        console.log(arrNumbers);
};

