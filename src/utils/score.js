export const calculateScore = (words) => {
  return words.reduce((total, word) => total + word.length, 0);
};