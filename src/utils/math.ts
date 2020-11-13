type MaxMin = {
  max: number
  min: number
}

const getMinMaxNumber = (numberOfDigits: number): MaxMin => {
  const RADIX = 10
  const max = parseInt('9'.repeat(numberOfDigits), RADIX)
  const min = parseInt(`1${'0'.repeat(numberOfDigits > 1 ? numberOfDigits - 1 : numberOfDigits)}`, RADIX)
  return {
    max,
    min
  }
}

export { getMinMaxNumber }
