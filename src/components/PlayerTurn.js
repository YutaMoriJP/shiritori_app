import React from "react";
import PropTypes from "prop-types";
import PlayerTurnStyled from "../styled/PlayerTurnStyled";
import Timer from "./Timer";

const PlayerTurn = ({
  active,
  time,
  setTime,
  timerID,
  gameReset,
  gameOver,
}) => {
  return (
    <>
      <PlayerTurnStyled>
        {!gameOver && (
          <article>
            <h1>{!active.primary ? "Player 1's turn" : "Player 2's turn"}</h1>
            <Timer
              gameReset={gameReset}
              time={time}
              setTime={setTime}
              timerID={timerID}
            />
          </article>
        )}
      </PlayerTurnStyled>{" "}
    </>
  );
};

PlayerTurn.prototype = {
  active: PropTypes.object,
};

export default PlayerTurn;
