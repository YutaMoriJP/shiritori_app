import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
//import PlayerField from "./PlayerField";
import PlayersStyled from "../styled/PlayersStyled";
import PlayerTurn from "./PlayerTurn";
import Status from "./Status";
import { ButtonNormal } from "../styled/ButtonStyled";

const PlayerField = lazy(() => import("./PlayerField"));

const Players = () => {
  const [active, setActive] = useState({ primary: false, secondary: true });
  const [invalid, setInvalid] = useState({ invalid: false, msg: "" });
  const [firstGame, setFirstGame] = useState(true);
  //timer stuff
  const timerID = useRef(null);
  const [time, setTime] = useState(30);

  const [currentWord, setCurrentWord] = useState("");
  const [gameOver, setGameOver] = useState(true);
  const [gameReset, setGameReset] = useState(false);
  const handleGameStart = () => {
    setGameOver(false);
    setFirstGame(false);
  };
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
      {firstGame ? (
        <ButtonNormal onClick={handleGameStart}>Start Game</ButtonNormal>
      ) : (
        <>
          <Suspense>
            <PlayerTurn
              active={active}
              time={time}
              setTime={setTime}
              timerID={timerID}
              gameOver={gameOver}
              gameReset={gameReset}
            />
          </Suspense>
          <Suspense>
            <Status
              gameOver={gameOver}
              resetGame={resetGame}
              currentWord={currentWord}
              invalid={invalid}
              time={time}
              active={active}
            />
          </Suspense>
        </>
      )}
      <PlayersStyled>
        <Suspense fallback={<div>loading content...</div>}>
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
        </Suspense>
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
