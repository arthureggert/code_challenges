/**
 * Project EULER
 * Challenge Nº5
 * https://projecteuler.net/problem=5
 *
 * Description:
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function solve(maximumDivisor: number): number {
  let result = maximumDivisor
  let count = 0

  for (let x = 1; x <= maximumDivisor; x += 1) {
    while (count < maximumDivisor) {
      for (let j = 1; j <= maximumDivisor; j += 1) {
        if (result % j === 0) {
          count += 1
        } else {
          count = 0
          result += maximumDivisor
        }
      }
    }
  }
  return result
}

export { solve }
