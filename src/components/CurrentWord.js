import React from "react";

const CurrentWord = ({ currentWord, invalid }) => {
  const text = currentWord => {
    return invalid.invalid ? (
      <p style={{ color: invalid.invalid && "#fa5252" }}>{invalid.msg}</p>
    ) : currentWord.length ? (
      <p>
        {`Current word is`}
        {` `}
        <span style={{ color: "green", fontWeight: 900 }}>{currentWord}</span>
      </p>
    ) : (
      <p style={{ color: invalid.invalid && "#fa5252" }}>
        {"Start the game by typing in a word!"}
      </p>
    );
  };
  return (
    <>
      {text(currentWord)}
      {!!currentWord.length && (
        <p>
          The next word must start with{" "}
          <span style={{ color: "green", backgroundColor: "yellow" }}>
            {currentWord.slice(-1)}
          </span>
        </p>
      )}
    </>
  );
};

export default CurrentWord;
