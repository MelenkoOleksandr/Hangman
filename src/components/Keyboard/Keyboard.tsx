import { useContext } from "react";
import { HangmanDispatchContext } from "../../App";
import "./Keyboard.css";

const keyboards = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface KeyboardProps {
  isLetterGuessed: (letter: string) => boolean;
  word: string;
}

const Keyboard = ({ isLetterGuessed, word }: KeyboardProps) => {
  const dispatch = useContext(HangmanDispatchContext);

  const isLetterInWord = (letter: string) => {
    return word.includes(letter);
  };

  const handleLetterClick = (letter: string) => {
    if (dispatch) {
      dispatch({ type: "GUESS_LETTER", payload: letter });
    }
  };

  return (
    <div className="keyboard">
      {keyboards.map((keyboardLetter) => (
        <button
          onClick={() => handleLetterClick(keyboardLetter)}
          className={`keyboard-button ${
            isLetterGuessed(keyboardLetter) && "guessed"
          } ${!isLetterInWord(keyboardLetter) && "wrong"}`}
          disabled={isLetterGuessed(keyboardLetter)}
          key={keyboardLetter}
        >
          {keyboardLetter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
