'use strict';

const rand = Math.round(Math.random() * 100);
let num = +prompt('Угадайте число от 1 до 100');

const guessNumber = (n) => {  
    if (!(n)) {
      alert('GAME OVER');
      }; 
    
    if (!Number.isFinite(n)) {
      console.log('Введите число пожалуйста');
      }; 
        
    if (n < rand) {
      console.log('Меньше');
      prompt('Введите другой вариант');
      }; 
      
    if (n > rand) {
      console.log('Больше');
      prompt('Введите другой вариант');
      };
      
    if (n === rand) {
      console.log('Верно!');
      } else {
        console.log('Не корректно');
      }
    return rand;
};
const resultguessNumber = guessNumber(num);
console.log(resultguessNumber);
