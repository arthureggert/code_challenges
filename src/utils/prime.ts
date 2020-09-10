function isPrime(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function primeFactors(num: number): number[] {
  let number: number = num;
  const result: number[] = [];
  for (let i = 2; i <= number; i += 1) {
    while (isPrime(i) && number % i === 0) {
      if (!result.includes(i)) {
        result.push(i);
      }
      number /= i;
    }
  }
  return result;
}

export { isPrime, primeFactors };
