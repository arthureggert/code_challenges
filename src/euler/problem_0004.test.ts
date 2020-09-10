import { solve } from './problem_0004';

describe('largest palindrome product', () => {
  it('largest palindrome product of a 3 number digit is 906609', () => {
    const number = solve(3);
    expect(number).toBe(906609);
  });

  it('largest palindrome product of a 2 number digit is 9009', () => {
    const number = solve(3);
    expect(number).toBe(906609);
  });
});
