import { primeFactors } from './prime';

describe('prime factor', () => {
  it('the prime factors of 13195 are [5, 7, 13, 29]', () => {
    const numbers = primeFactors(13195);
    expect(numbers).toEqual([5, 7, 13, 29]);
  });
});
