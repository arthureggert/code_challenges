const romanNumerals = [
  {
    numeral: 'M',
    value: 1000
  },
  {
    numeral: 'CM',
    value: 900
  },
  {
    numeral: 'D',
    value: 500
  },
  {
    numeral: 'CD',
    value: 400
  },
  {
    numeral: 'C',
    value: 100
  },
  {
    numeral: 'XC',
    value: 90
  },
  {
    numeral: 'L',
    value: 50
  },
  {
    numeral: 'XL',
    value: 40
  },
  {
    numeral: 'X',
    value: 10
  },
  {
    numeral: 'IX',
    value: 9
  },
  {
    numeral: 'V',
    value: 5
  },
  {
    numeral: 'IV',
    value: 4
  },
  {
    numeral: 'I',
    value: 1
  }
]

function convertToRoman(num: number): string {
  let remainingValue = num
  let newRomanNumeral = ''

  for (let i = 0; i < 13; i += 1) {
    const j = Math.floor(remainingValue / romanNumerals[i].value) // j represents the number of times each character is needed
    while (remainingValue >= romanNumerals[i].value) {
      newRomanNumeral += romanNumerals[i].numeral.repeat(j) // Add 'x' Numerals to the string
      remainingValue -= romanNumerals[i].value * j // decrement the remaining value
    }
  }

  return newRomanNumeral
}

export { convertToRoman }
