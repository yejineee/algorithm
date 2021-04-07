const countOfVowels = (str) => {
  const vowelRegex = /[aeiou]/gi;
  const matchedResult = str.match(vowelRegex);
  return matchedResult ? matchedResult.length : 0;
};

const halvesAreAlike = function (s) {
  const a = s.substring(0, s.length / 2);
  const b = s.substring(s.length / 2);
  return countOfVowels(a) === countOfVowels(b);
};
