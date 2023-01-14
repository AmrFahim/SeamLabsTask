const ACode = "A".charCodeAt(0);
const alphabeticalLen = 26;

function stringToItsSum(myString) {
  try {
    const sLen = myString.length;
    let ans = 0;
    myString = myString.toUpperCase();

    if (!/^[A-Z]+$/.test(myString)) {
      throw "The string contains non-alphabetical character";
    }

    for (let i in myString) {
      ans =
        ans +
        alphabeticalLen ** (sLen - i - 1) *
          (myString.charCodeAt(i) - ACode + 1);
    }
    return ans;
  } catch (err) {
    return "Something went wrong " + err;
  }
}

module.exports = stringToItsSum;
