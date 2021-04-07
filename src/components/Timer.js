import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ timerID, time, setTime, gameReset }) => {
  console.log("timer");
  useEffect(() => {
    timerID.current = setInterval(
      () => setTime(prevTime => prevTime - 1),
      1000
    );
    return () => clearInterval(timerID.current);
  }, [gameReset]);
  useEffect(() => {
    if (time === 0) {
      clearInterval(timerID.current);
    }
  });
  return (
    <>
      <h1>
        00:{time < 10 ? "0" : ""}
        {time}
      </h1>
    </>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number,
};

export default Timer;
