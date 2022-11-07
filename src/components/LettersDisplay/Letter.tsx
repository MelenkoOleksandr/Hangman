import { memo } from "react";

interface LetterProps {
  letter: string;
  isGameEnded: boolean;
  isGameLost: boolean;
  isLetterGuessed: boolean;
  isLastGuessedLetter: boolean;
}

const Letter = ({
  isGameEnded,
  isGameLost,
  isLastGuessedLetter,
  isLetterGuessed,
  letter,
}: LetterProps) => {
  return isGameEnded ? (
    <div className={`letter ${isGameLost ? "lost" : "won"}`}>{letter}</div>
  ) : (
    <div className={`letter ${isLastGuessedLetter && "last"}`}>
      {isLetterGuessed ? letter : "_"}
    </div>
  );
};

export default memo(Letter);
