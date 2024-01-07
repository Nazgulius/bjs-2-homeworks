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
  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.reduce(function (a, b) {
      return a + b;
  });
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max.apply(null, arr) - Math.min.apply(null, arr); 
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }    
  }

  return  sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement  = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {    
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }      
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }

  return maxWorkerResult;
}
