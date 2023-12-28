"use strict";


function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;  
  if (d < 0) {
    arr.push(0);
  } if (d === 0) {
    arr.push(-b / (2 * a));
  } if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2 * a));
    arr.push((-b - Math.sqrt(d) )/(2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPlus = percent / 100;
  let betMounth = percentPlus / 12;
  let months = 12;
  let sumCredit = amount - contribution;
  let partPercent = percent / 12;
  let paymentMonths = amount * (partPercent + (partPercent / (Math.pow((1 + partPercent), countMonths) - 1)));
  let sumAll = (paymentMonths * countMonths) +  contribution;
  let sum = (sumAll).toFixed(2);

  return Number(sum);
}