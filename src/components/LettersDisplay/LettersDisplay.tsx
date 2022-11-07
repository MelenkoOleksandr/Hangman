import Letter from "./Letter";
import "./LettersDisplay.css";

interface LettersDisplayProps {
  word: string;
  guessedLetters: string[];
  isGameEnded: boolean;
  isGameLost: boolean;
  isLetterGuessed: (letter: string) => boolean;
}

const LettersDisplay = ({
  guessedLetters,
  isGameEnded,
  isGameLost,
  word,
  isLetterGuessed,
}: LettersDisplayProps) => {
  const isLastGuessedLetter = (letter: string) => {
    return guessedLetters[guessedLetters.length - 1] === letter;
  };

  return (
    <div className="letters">
      {word.split("").map((letter: string, index: number) => (
        <Letter
          isGameEnded={isGameEnded}
          isGameLost={isGameLost}
          isLastGuessedLetter={isLastGuessedLetter(letter)}
          isLetterGuessed={isLetterGuessed(letter)}
          letter={letter}
          key={index}
        />
      ))}
    </div>
  );
};

export default LettersDisplay;
