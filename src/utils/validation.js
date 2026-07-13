export const isWordRepeated = (words, word) => {
  return words.includes(word);
};

export const followsChainRule = (words, word) => {
  if (words.length === 0) {
    return true;
  }

  const lastWord = words[words.length - 1];

  return (
    lastWord[lastWord.length - 1].toLowerCase() === word[0].toLowerCase()
  );
};