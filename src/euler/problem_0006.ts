/**
 * Project EULER
 * Challenge Nº6
 * https://projecteuler.net/problem=6
 *
 * Description:
 *
 * The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385.
 * The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
function solve(number: number): number {
  const numbers = [...Array(number + 1).keys()]
  const { sum, sumOfSquare } = numbers.reduce(
    (prev, curr) => {
      return {
        sum: prev.sum + curr,
        sumOfSquare: prev.sumOfSquare + curr ** 2
      }
    },
    {
      sum: 0,
      sumOfSquare: 0
    }
  )

  return sum ** 2 - sumOfSquare
}

export { solve }
