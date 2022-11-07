import {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import GameScreen from "./components/GameScreen/GameScreen";
import Keyboard from "./components/Keyboard/Keyboard";
import LettersDisplay from "./components/LettersDisplay/LettersDisplay";
import { getRandomWord } from "./features/word";

const initialState = {
  word: "",
  guessedLetters: [] as string[],
  mistakes: 0,
};

const hangmanGameReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_WORD":
      return {
        ...state,
        word: action.payload,
      };
    case "GUESS_LETTER":
      return state.word.includes(action.payload)
        ? {
            ...state,
            guessedLetters: [...state.guessedLetters, action.payload],
          }
        : {
            ...state,
            guessedLetters: [...state.guessedLetters, action.payload],
            mistakes: state.mistakes + 1,
          };
    case "RESET_GAME":
      return {
        ...initialState,
        word: action.payload,
      };
  }
};

export const HangmanDispatchContext = createContext<Dispatch<any> | null>(null);

function App() {
  const [{ word, guessedLetters, mistakes }, dispatch] = useReducer(
    hangmanGameReducer,
    initialState
  );

  useEffect(() => {
    getRandomWord().then((word) =>
      dispatch({ type: "SET_WORD", payload: word })
    );
  }, []);

  const isLetterGuessed = (letter: string) => {
    return guessedLetters.includes(letter);
  };

  const isGameWon = () => {
    return word.split("").every((letter: string) => isLetterGuessed(letter));
  };

  const isGameLost = () => {
    return mistakes === 6;
  };

  const isGameEnded = () => {
    return isGameWon() || isGameLost();
  };

  return (
    <HangmanDispatchContext.Provider value={dispatch}>
      <div className="game">
        <h4 className="game-title">Hangman</h4>
        <GameScreen
          mistakes={mistakes}
          isGameWon={isGameWon()}
          isGameLost={isGameLost()}
          isGameEnded={isGameEnded()}
        />

        <LettersDisplay
          guessedLetters={guessedLetters}
          isGameEnded={isGameEnded()}
          isGameLost={isGameLost()}
          isLetterGuessed={isLetterGuessed}
          word={word}
        />

        {!isGameEnded() && (
          <Keyboard isLetterGuessed={isLetterGuessed} word={word} />
        )}
      </div>
    </HangmanDispatchContext.Provider>
  );
}

export default App;
