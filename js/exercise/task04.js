'use strict'

let n = 60;
let m = 2030;

const getYears = (min, max) => {
  const arr = [];

  for (let i = min; i < max; i++) {
    if (i % 4 === 0) {
      arr.push(i);
    };
  }
  return arr;
};
const res = getYears(n, m);
console.log(res);
