const maxNumOfDigits = 20;
const numberToExclude = 5;

function getAppearanceArray() {
  let appearArr = new Array(maxNumOfDigits);

  for (let i = 0; i < maxNumOfDigits; i++) {
    if (i <= 1) appearArr[i] = i;
    else appearArr[i] = appearArr[i - 1] * 9 + 10 ** (i - 1);
  }

  return appearArr;
}

function countExcludedNumbers(num, appearArr) {
  if (num < numberToExclude) return 0;

  let digitsCount = num.toString().length;
  let base = 10 ** (digitsCount - 1);
  let firstDigit = Math.floor(num / base);

  if (firstDigit == numberToExclude)
    return firstDigit * appearArr[digitsCount - 1] + (num % base) + 1;

  let cur = 0;
  if (firstDigit > numberToExclude)
    cur = (firstDigit - 1) * appearArr[digitsCount - 1] + base;
  else cur = firstDigit * appearArr[digitsCount - 1];

  return cur + countExcludedNumbers(num % base, appearArr);
}

function countNumbers(start, end) {
  let ans = end - start + 1;
  let appearArr = getAppearanceArray();
  let startExcludedNumbers = countExcludedNumbers(Math.abs(start), appearArr);
  let endExcludedNumbers = countExcludedNumbers(Math.abs(end), appearArr);

  if (start >= 0) ans = ans - (endExcludedNumbers - startExcludedNumbers);
  else if (end <= 0) ans = ans - (startExcludedNumbers - endExcludedNumbers);
  else ans = ans - (startExcludedNumbers + endExcludedNumbers);
  return ans;
}

module.exports = countNumbers;
