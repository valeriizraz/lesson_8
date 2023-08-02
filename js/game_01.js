'use strict'

const rand = Math.round(Math.random() * 100);
let num = +prompt('Угадайте число от 1 до 100');

const guessNumber = (n) => {  
    if (!(n)) {
      alert('GAME OVER');
      } else if (!Number.isFinite(n)) {
        console.log('Введите число пожалуйста');
        } else if (n < rand) {
          console.log('Меньше');
          prompt('Введите другой вариант');
          } else if (n > rand) {
            console.log('Больше');
            prompt('Введите другой вариант');
            } else if (n === rand) {
              console.log('Верно!');
              } else {
                console.log('Не корректно');
              }
  return n;
}
const resultguessNumber = guessNumber(num);
console.log(resultguessNumber);

/*
как лучше сформировать это все? использовать ли функции?
может можно как то по другому? проще? лучше?
*/