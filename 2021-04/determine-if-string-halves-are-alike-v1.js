const countOfVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const count = Array.from(str).reduce(
    (sum, alpha) => sum + (vowels.includes(alpha.toLowerCase()) ? 1 : 0),
    0
  );
  return count;
};

const halvesAreAlike = function (s) {
  const a = s.substring(0, s.length / 2);
  const b = s.substring(s.length / 2);
  return countOfVowels(a) === countOfVowels(b);
};
