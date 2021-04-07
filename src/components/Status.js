import React from "react";
import { ButtonNormal } from "../styled/ButtonStyled";
import CurrentWord from "./CurrentWord";

const Status = ({
  gameOver,
  resetGame,
  currentWord,
  invalid,
  time,
  active,
}) => {
  return (
    <>
      {gameOver || time === 0 ? (
        <>
          {gameOver && time !== 0 ? (
            <>
              <h1>Word that ends with "N" was chosen. Game Over</h1>
              <p>
                {active.primary ? "Player 2 has won!" : "Player 1 has won!"}
              </p>
            </>
          ) : (
            <>
              <h1>You have run out of time</h1>{" "}
              <p>
                {active.primary ? "Player 1 has won!" : "Player 2 has won!"}
              </p>
            </>
          )}
          <ButtonNormal onClick={resetGame}>Reset Game</ButtonNormal>
        </>
      ) : (
        <CurrentWord
          currentWord={currentWord}
          invalid={invalid}
          resetGame={resetGame}
        />
      )}
    </>
  );
};

export default Status;
