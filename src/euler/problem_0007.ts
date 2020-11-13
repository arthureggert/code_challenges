/**
 * Project EULER
 * Challenge Nº7
 * https://projecteuler.net/problem=7
 *
 * Description:
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */
import { isPrime } from '../utils/prime'

function solve(index: number): number {
  let numberOfPrimes = 0
  let number = 0
  while (numberOfPrimes !== index) {
    number += 1
    if (isPrime(number)) {
      numberOfPrimes += 1
    }
  }

  return number
}

export { solve }
