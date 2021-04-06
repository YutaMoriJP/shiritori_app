import React, { useState } from "react";
import PropTypes from "prop-types";
import HelpIcon from "@material-ui/icons/Help";
import PlayerTurnStyled from "../styled/PlayerTurnStyled";
import IconButton from "@material-ui/core/IconButton";
import AlertDialog from "./Dialog";

const PlayerTurn = ({ active }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <PlayerTurnStyled>
        <h1>{!active.primary ? "Player 1's turn" : "Player 2's turn"}</h1>
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
