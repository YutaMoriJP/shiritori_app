import React, { useState } from "react";
import PropTypes from "prop-types";
import HelpIcon from "@material-ui/icons/Help";
import PlayerTurnStyled from "../styled/PlayerTurnStyled";
import IconButton from "@material-ui/core/IconButton";
import AlertDialog from "./Dialog";
import Timer from "./Timer";

const PlayerTurn = ({
  active,
  time,
  setTime,
  timerID,
  gameReset,
  gameOver,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  console.log(gameOver);
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

        <IconButton onClick={handleOpen}>
          <HelpIcon />
        </IconButton>
      </PlayerTurnStyled>{" "}
      <AlertDialog open={open} setOpen={setOpen} />
    </>
  );
};

PlayerTurn.prototype = {
  active: PropTypes.object,
};

export default PlayerTurn;
