interface HeadProps {
  isGameLost: boolean;
}

export const HangManHead = ({ isGameLost }: HeadProps) => (
  <div className={`hangman-head ${isGameLost && "dead"}`} />
);

export const HangManBody = () => <div className="hangman-body" />;
export const HangManLeftArm = () => <div className="hangman-left-arm" />;
export const HangManRightArm = () => <div className="hangman-right-arm" />;
export const HangManLeftLeg = () => <div className="hangman-left-leg" />;
export const HangManRightLeg = () => <div className="hangman-right-leg" />;
