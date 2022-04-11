/**
 * @param {string}
 * @return {boolean}
 */
const isValid = function (s) {
  const inputArr = [...s];
  const stack = [];
  const closingPair = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stackTop = (s) => {
    return s[s.length - 1];
  };
  const isOpenParentheses = (input) => {
    return Object.values(closingPair).some((opening) => opening === input);
  };
  const isValidParenthesesPair = (input) => {
    return closingPair[input] === stackTop(stack);
  };
  for (const input of inputArr) {
    if (isOpenParentheses(input)) {
      stack.push(input);
    } else if (isValidParenthesesPair(input)) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
