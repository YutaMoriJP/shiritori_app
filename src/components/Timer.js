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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  timerID: PropTypes.object,
  time: PropTypes.number,
  setTime: PropTypes.func,
  gameReset: PropTypes.bool,
};

export default Timer;
