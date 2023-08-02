'use strict' 

/*
Не могу понять как сделать, чтоб бот проверял число и выводил, 
что такое число уже вводили. Как не пытался, не выходит. 
*/

/*
Возможно это можно скомпоновать как то более окуратненько?
Что то запихнуть в функции?
*/

alert('Введите диапазон');

const numMin = 3;//+prompt('Введите ОТ')
const numMax = 20;//+prompt('Введите ДО')

let sum = numMax - numMin;
console.log(sum);

let numberOfTimes = Math.floor(sum * 0.3);
console.log(`количество попыток: ${numberOfTimes}`);

const rand = Math.round(Math.random() * (numMax - numMin) + numMin);
console.log(`random: ${rand}`);

let number = 0;
let arrNumbers = [];

// Функция должна проверять вводилось ли число. Но не получается..
const revis = (num, arr) => {
  for (const elem of arrNumbers) {
    if (number === elem) {
      return true;
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

      } else if (number > rand) {
        console.log('Больше');

        } else if (number < rand) {
          console.log('Меньше');

          } else if (number === rand) {
            console.log('Верно!');

            } else {
              console.log('...');
            };
};

