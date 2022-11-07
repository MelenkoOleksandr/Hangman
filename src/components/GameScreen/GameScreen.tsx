import { useContext } from "react";
import { HangmanDispatchContext } from "../../App";
import { getRandomWord } from "../../features/word";
import {
  HangManBody,
  HangManHead,
  HangManLeftArm,
  HangManLeftLeg,
  HangManRightArm,
  HangManRightLeg,
} from "./HangmanParts";
import "./GameScreen.css";

interface GameScreenProps {
  mistakes: number;
  isGameEnded: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
}

const GameScreen = ({
  mistakes,
  isGameWon,
  isGameEnded,
  isGameLost,
}: GameScreenProps) => {
  const bodyParts = [
    HangManHead,
    HangManBody,
    HangManLeftArm,
    HangManRightArm,
    HangManLeftLeg,
    HangManRightLeg,
  ];

  const hangmanDispatch = useContext(HangmanDispatchContext);
  const handleRestartClick = () => {
    if (hangmanDispatch) {
       getRandomWord().then((word) =>
         hangmanDispatch({ type: "RESET_GAME", payload: word })
       );
    }
  };
  return (
    <div className="game-screen">
      <div className="gallows-base" />
      <div className="gallows-body" />
      <div className="gallows-top" />
      <div className="gallows-rope" />
      {bodyParts.map(
        (Part, index) =>
          mistakes >= index + 1 && <Part key={index} isGameLost={isGameLost} />
      )}

      {isGameEnded && (
        <div className="game-finished">
          <h1 className="game-finished-title">
            {isGameWon ? "You won!" : "You lost!"}
          </h1>
          <button className="btn-again" onClick={handleRestartClick}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
