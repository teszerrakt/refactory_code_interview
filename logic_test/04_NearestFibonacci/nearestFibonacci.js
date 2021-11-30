// create fibonacci recursion
const fibonacci = (num) => {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

const nearestFibonacci = (array) => {
  let n = 0;
  let target = array.reduce((a, b) => a + b, 0);
  let fibArray = [0];

  while (fibArray[n] <= target) {
    if (fibArray[n] === target) {
      return 0;
    }
    fibArray.push(fibonacci(n));
    n++;
  }
  const fibArrayLength = fibArray.length;

  const diffPrevious = Math.abs(target - fibArray[fibArrayLength - 2]); // The difference between target to the previous fibonacci
  const diffAfter = Math.abs(target - fibArray[fibArrayLength - 1]); // The difference between target to the next fibonacci

  return Math.min(diffAfter, diffPrevious);
};

console.log(nearestFibonacci([15, 1, 3]));

module.exports = nearestFibonacci;
