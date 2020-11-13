/**
 * Project EULER
 * Challenge Nº4
 * https://projecteuler.net/problem=4
 *
 * Description:
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

import { getMinMaxNumber } from '../utils/math'
import { isPalindrome } from '../utils/palindrome'

function solve(numberOfDigits: number): number {
  const { min: MINIMUM, max: MAXIMUM } = getMinMaxNumber(numberOfDigits)
  let maximum = -1

  for (let first = MAXIMUM; first >= MINIMUM; first -= 1) {
    if (maximum >= first * 999) {
      break
    }
    // We do second >= first because we do not need to do the same count again since first * second = second * first
    for (let second = MAXIMUM; second >= first; second -= 1) {
      const product = first * second
      if (maximum < product && isPalindrome(product)) {
        maximum = product
      }
    }
  }
  return maximum
}

export { solve }
