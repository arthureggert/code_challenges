import { solve } from './problem_0006'

describe('sum square difference', () => {
  it('the difference between the sum of the squares and the square of the sum should be 2640', () => {
    const result = solve(10)
    expect(result).toBe(2640)
  })

  it('the difference between the sum of the squares and the square of the sum should be 25164150', () => {
    const result = solve(100)
    expect(result).toBe(2640)
  })
})
