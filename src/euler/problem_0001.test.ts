import { solve } from './problem_0001'

describe('multiples of 3 and 5', () => {
  it('the sum should be 23 when numbers is array from 1 to 10 and the divisors are 3, 5', () => {
    expect(solve(10, 3, 5)).toBe(23)
  })

  it('the sum should be 233168 when numbers is array from 1 to 1000and the divisors are 3, 5', () => {
    expect(solve(1000, 3, 5)).toBe(233168)
  })

  it('the sum should be 110 when numbers is array from 1 to 20 and the divisors are 2, 5', () => {
    expect(solve(20, 2, 5)).toBe(110)
  })
})
