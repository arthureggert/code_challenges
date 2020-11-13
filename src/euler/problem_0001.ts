/**
 * Project EULER
 * Challenge Nº1
 * https://projecteuler.net/problem=1
 *
 * Description:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * ===============================================================================================
 *
 * This is my solution of this problem
 *
 * function solve(numbers: number[]): number {
 *  const multiplesFrom3and5 = numbers.filter((number) => {
 *    return number % 3 === 0 || number % 5 === 0;
 *  });
 *  const sum = multiplesFrom3and5.reduce((previousValue, currentValue) => {
 *    return previousValue + currentValue;
 *  }, 0);
 *  return sum;
 * }
 *
 * ===============================================================================================
 *
 * This solution is not mine, it came from https://projecteuler.net/best_posts=001
 * This solution was given by a user called Marcus
 * The explanation is:
 * Numbers divisible by 03 follow sequence [03,06,09,12,15,...] or 03*n
 * Numbers divisible by 05 follow sequence [05,10,15,20,25,...] or 05*n
 * Numbers divisible by 15 follow sequence [15,30,45,60,75,...] or 15*n
 *
 * NOTE: 15 is because a number that is divisible by 3 and 5 at same time are also divisible by 15
 *
 * We can add the numbers divisible by 3 to the numbers divisible by 5,
 * and then subtract the numbers divisible by 15 to compensate for double counting.
 *
 * Let's look at the 3's as an example. If we wanted to add up consecutive terms that
 * are divisible by 3, notice that we are adding together a bunch of 3*n terms:
 *
 * 3(1) + 3(2) + 3(3) + 3(4) + ...
 *
 * which is the same as:
 *
 * 3(1 + 2 + 3 + 4 + ...)
 *
 * That inner sum can be simplified. The sum on consecutive integers from 1 to c is:
 *
 * c
 * SUM k = [c(c+1)/2]
 * k=1
 *
 * The next logical question to ask is "Okay, but how do we know what c should be?"
 * c, in this case, represents the count of numbers under N divisible by d.
 * This is c = [N-1/d].
 *
 * Finally, we plug in 1000 for N and solve the summations for d=3,5 and 15.
 *
 * The sum for all 3n is 3*three*(t+1)/2 where three = [1000-1/3]
 * The sum for all 5n is 5*five*(f+1)/2 where five = [1000-1/5]
 * The sum for all 15n is 3*fifteen*(x+1)/2 where fifteen = [1000-1/15]
 *
 * Add the first two of these, and subtract the third.
 *
 */

function solve(maximum: number, firstDivisor: number, secondDivisor: number): number {
  const floor = (divisor: number) => Math.floor((maximum - 1) / divisor)
  const sum = (divisor: number) => (divisor * floor(divisor) * (floor(divisor) + 1)) / 2

  const sumOfFirstDivisor = sum(firstDivisor)
  const sumOfSecondDivisor = sum(secondDivisor)
  // lcm = least common multiple
  const sumOfLCM = sum(firstDivisor * secondDivisor)

  return sumOfFirstDivisor + sumOfSecondDivisor - sumOfLCM
}

export { solve }
