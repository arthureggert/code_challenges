function isPalindrome(number: number): boolean {
  const RADIX = 10;
  const pal = parseInt(number.toString().split('').reverse().join(''), RADIX);
  return pal === number;
}

export { isPalindrome };
