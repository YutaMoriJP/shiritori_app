import React from "react";

const SubmitWrapper = ({ onClick, children }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return <article onKeyPress={handleKeyPress}>{children}</article>;
};

export default SubmitWrapper;
