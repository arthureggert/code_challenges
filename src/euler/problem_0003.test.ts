import { solve } from './problem_0003'

describe('largest prime factor', () => {
  it('largest prime of 600851475143 is ', () => {
    const number = solve(600851475143)
    expect(number).toBe(6857)
  })
})
