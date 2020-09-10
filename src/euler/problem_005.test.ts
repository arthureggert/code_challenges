import { solve } from './problem_0005';

describe('Smallest multiple', () => {
  it('the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder is 2520', () => {
    const number = solve(10);
    expect(number).toBe(2520);
  });

  it('the smallest number that can be divided by each of the numbers from 1 to 20 without any remainder is 2520', () => {
    const number = solve(20);
    expect(number).toBe(232792560);
  });
});
