export const getRandomWord = async () => {
  const randomWord = await fetch("https://random-word-api.herokuapp.com/word");
  const word = await randomWord.json();
  return word[0].toUpperCase();
};