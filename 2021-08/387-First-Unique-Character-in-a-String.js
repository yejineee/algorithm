const firstUniqChar = function (word) {
  for (let i = 0; i < word.length; i += 1) {
    const ch = word[i];
    const regex = new RegExp(ch, 'g');
    const nChInWord = word.match(regex).length;
    if (nChInWord === 1) {
      return i;
    }
  }
  return -1;
};
