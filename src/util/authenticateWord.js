export const authenticateWord = (word = "", previousWord = "") => {
  const empty = !word.length;
  const onlySpace = !word.replace(/\s/g, "").length;
  const hasSpace = /\s/.test(word);
  const hasWord = !!word.replace(/\s/g, "").length;
  const includesSpace = hasSpace && hasWord;
  if (empty || onlySpace || includesSpace) {
    const msg =
      empty || onlySpace
        ? "Please Type in a word"
        : "The Word cannot contain any space";
    return { state: true, msg };
  } else {
    return { state: false };
  }
};

export const keepsRule = (word, previousWord) => {
  let start = word[0].toLowerCase();
  let end = previousWord.slice(-1).toLowerCase();
  if (previousWord.length && start !== end) {
    return {
      state: true,
      msg: `Next word must start with ${previousWord.slice(-1)}`,
    };
  }
  return { state: false };
};

export const gameOver = (word = "") => {
  if (word.toLowerCase().endsWith("n")) {
    return true;
  }
};

export default authenticateWord;
