function getArrayParams(...arr) {
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i]
    }

    sum += arr[i];    
  }

  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.includes()) {
    arr.reduce(function (a, b) {
      return a + b;
    });
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  return Math.max.apply(null, arr) - Math.min.apply(null, arr); 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumEvenElement++;
    } else {
      sumOddElement++;
    }    
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement  = 0;
  let countEvenElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (arr[i] % 2) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }      
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
