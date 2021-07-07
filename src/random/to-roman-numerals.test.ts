import { convertToRoman } from './to-roman-numerals'

describe('toRomanNumerals', () => {
  it.each`
    a       | expected
    ${10}   | ${'X'}
    ${11}   | ${'XI'}
    ${1058} | ${'MLVIII'}
    ${2638} | ${'MMDCXXXVIII'}
  `('returns $expected when $a', ({ a, expected }) => {
    expect(convertToRoman(a)).toBe(expected)
  })
})
