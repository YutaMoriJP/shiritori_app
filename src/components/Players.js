import React, { useState } from "react";
import PlayerField from "./PlayerField";
import PlayersStyled from "../styled/PlayersStyled";
import PlayerTurn from "./PlayerTurn";
import CurrentWord from "./CurrentWord";
import Button from "@material-ui/core/Button";

const Players = () => {
  const [active, setActive] = useState({ primary: false, secondary: true });
  const [invalid, setInvalid] = useState({ invalid: false, msg: "" });
  const [currentWord, setCurrentWord] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const handleActive = () => {
    const { primary, secondary } = active;
    setActive({ primary: !primary, secondary: !secondary });
  };
  const resetGame = () => {
    setGameOver(false);
    setCurrentWord("");
  };
  return (
    <>
      <PlayerTurn active={active} />
      {gameOver ? (
        <>
          <h1>Word that ends with "N" was chosen. Game Over</h1>
          <Button onClick={resetGame}>Reset Game</Button>
        </>
      ) : (
        <CurrentWord currentWord={currentWord} invalid={invalid} />
      )}
      <PlayersStyled>
        <PlayerField
          player="primary"
          active={active}
          handleActive={handleActive}
          setCurrentWord={setCurrentWord}
          setInvalid={setInvalid}
          currentWord={currentWord}
          setGameOver={setGameOver}
        />
        <PlayerField
          player="secondary"
          active={active}
          handleActive={handleActive}
          setCurrentWord={setCurrentWord}
          setInvalid={setInvalid}
          currentWord={currentWord}
          setGameOver={setGameOver}
        />
      </PlayersStyled>
    </>
  );
};

export default Players;
