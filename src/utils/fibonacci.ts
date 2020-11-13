function fibonacci(max: number): number[] {
  const fibonacciArray = []
  let first = 1
  let second = 0
  let temp = null
  while (first < max) {
    temp = first
    first = second + first
    second = temp
    fibonacciArray.push(first)
  }
  return fibonacciArray
}

export { fibonacci }
