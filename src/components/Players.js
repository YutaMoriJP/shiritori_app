import React, { useState, useRef, useEffect } from "react";
import PlayerField from "./PlayerField";
import PlayersStyled from "../styled/PlayersStyled";
import PlayerTurn from "./PlayerTurn";
import Status from "./Status";

const Players = () => {
  const [active, setActive] = useState({ primary: false, secondary: true });
  const [invalid, setInvalid] = useState({ invalid: false, msg: "" });

  //timer stuff
  const timerID = useRef(null);
  const [time, setTime] = useState(30);

  const [currentWord, setCurrentWord] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameReset, setGameReset] = useState(false);
  const handleActive = () => {
    const { primary, secondary } = active;
    setActive({ primary: !primary, secondary: !secondary });
  };
  const resetGame = () => {
    setGameOver(false);
    setCurrentWord("");
    setTime(30);
    setGameReset(prevBool => !prevBool);
  };
  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
    }
  }, [time]);
  return (
    <>
      <PlayerTurn
        active={active}
        time={time}
        setTime={setTime}
        timerID={timerID}
        gameOver={gameOver}
        gameReset={gameReset}
      />
      <Status
        gameOver={gameOver}
        resetGame={resetGame}
        currentWord={currentWord}
        invalid={invalid}
        time={time}
        active={active}
      />
      <PlayersStyled>
        {["primary", "secondary"].map(player => (
          <PlayerField
            key={player}
            player={player}
            active={active}
            handleActive={handleActive}
            setCurrentWord={setCurrentWord}
            setInvalid={setInvalid}
            currentWord={currentWord}
            setGameOver={setGameOver}
            setTime={setTime}
            isGameOver={gameOver}
          />
        ))}
      </PlayersStyled>
    </>
  );
};

export default Players;
/*
 <PlayerField
          player="primary"
          active={active}
          handleActive={handleActive}
          setCurrentWord={setCurrentWord}
          setInvalid={setInvalid}
          currentWord={currentWord}
          setGameOver={setGameOver}
          setTime={setTime}
        />
        <PlayerField
          player="secondary"
          active={active}
          handleActive={handleActive}
          setCurrentWord={setCurrentWord}
          setInvalid={setInvalid}
          currentWord={currentWord}
          setGameOver={setGameOver}
          setTime={setTime}
        />
        */
