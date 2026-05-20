export default function randomGEN(obj) {
  const { length, upperCase, lowerCase, number, symbol } = obj;
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbersChar = '0123456789';
  const symbolsChar = '!@#$%^&*()_+[]{}|;:,.<>?';
  let allowedChar = '';
  if (upperCase) allowedChar += upperChars;
  if (lowerCase) allowedChar += lowerChars;
  if (number) allowedChar += numbersChar;
  if (symbol) allowedChar += symbolsChar;
  if (!allowedChar) return null;

  let passWord = '';
  for (let i = 0; i < length; i++) {
    const randomIND = Math.floor(Math.random() * allowedChar.length);
    passWord += allowedChar[randomIND];
  }
  return passWord;
}
// console.log(
//   randomGEN({
//     length: 20,
//     upperCase: true,
//     lowerCase: true,
//     number: true,
//     symbol: true,
//   })
// );
