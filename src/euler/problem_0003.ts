/**
 * Project EULER
 * Challenge Nº3
 * https://projecteuler.net/problem=3
 *
 * Description:
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 */

import { primeFactors } from '../utils/prime'

function solve(numberToCheckPrimeFactors: number): number {
  const primes = primeFactors(numberToCheckPrimeFactors)
  return Math.max(...primes)
}

export { solve }
