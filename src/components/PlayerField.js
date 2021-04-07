import React from "react";
import useInput from "../customHooks/useInput";
import Text from "./Text";
import PlayerFieldContainer from "../styled/PlayerfieldStyled";
import ButtonStyled from "../styled/ButtonStyled";
import PropTypes from "prop-types";
import {
  authenticateWord,
  keepsRule,
  gameOver,
} from "../util/authenticateWord";
import { validateWord } from "../customHooks/useFetch";
import SubmitWrapper from "./SubmitWrapper";

const PlayerField = ({
  player,
  active,
  handleActive,
  setCurrentWord,
  setInvalid,
  currentWord,
  setGameOver,
  setTime,
  isGameOver,
}) => {
  const [value, reset] = useInput("");
  const handleClick = async () => {
    const { value: word } = value;
    const autenticate = authenticateWord(word, currentWord);
    const validate = await validateWord(value.value);
    if (gameOver(word)) {
      setGameOver(true);
    }
    if (autenticate.state) {
      setInvalid({ invalid: true, msg: autenticate.msg });
      return;
    }
    const notBroken = keepsRule(word, currentWord);
    if (notBroken.state) {
      setInvalid({ invalid: true, msg: notBroken.msg });
      return;
    }
    if (!validate) {
      setInvalid({
        invalid: true,
        msg:
          "Please check if the word is a valid English word or possibly misspelled",
      });
      return;
    }
    setInvalid({ invalid: false });
    reset();
    handleActive();
    setCurrentWord(word);
    setTime(30);
  };
  return (
    <>
      <PlayerFieldContainer>
        <h1>Player {player === "primary" ? 1 : 2}</h1>
        <SubmitWrapper onClick={handleClick}>
          <Text value={value} disabled={active[player] || isGameOver} />
          <ButtonStyled
            aria-label="Submit"
            variant="contained"
            color={player}
            onClick={handleClick}
            disabled={active[player] || isGameOver}
          >
            Submit
          </ButtonStyled>
        </SubmitWrapper>
      </PlayerFieldContainer>
    </>
  );
};

PlayerField.propTypes = {
  player: PropTypes.string,
  active: PropTypes.object,
  handleActive: PropTypes.func,
  setCurrentWord: PropTypes.func,
  setInvalid: PropTypes.func,
  currentWord: PropTypes.string,
  setGameOver: PropTypes.func,
  setTime: PropTypes.func,
  isGameOver: PropTypes.bool,
};

export default PlayerField;
/*
  if (error) {
      setInvalid({
        invalid: true,
        msg:
          "Please check if the word is a valid English word or possibly misspelled",
      });
      return;
    }
    */
