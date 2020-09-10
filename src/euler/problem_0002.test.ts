import { fibonacci } from '../utils/fibonacci';
import { solve } from './problem_0002';

describe('even fibonacci numbers', () => {
  it('the sum of even numbers in fibonacci 4 million should be 4613732', () => {
    const numbers = fibonacci(4000000);
    const sum = solve(numbers);
    expect(sum).toBe(4613732);
  });
});
