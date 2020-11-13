import { solve } from './problem_0007'

describe('10001st prime', () => {
  it('should tell that the 6th prime number is 13', () => {
    const result = solve(6)
    expect(result).toBe(13)
  })

  it('should tell that the 10001th prime number is 104743', () => {
    const result = solve(10001)
    expect(result).toBe(104743)
  })
})
