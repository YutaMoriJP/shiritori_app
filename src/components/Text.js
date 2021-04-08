import React from "react";
import PropTypes from "prop-types";
import TextStyled from "../styled/TextStyled";

const Text = ({
  type = "text",
  label = "Start typing",
  value,
  disabled = false,
  id,
}) => {
  return (
    <TextStyled
      type={type}
      {...value}
      label={label}
      disabled={disabled}
      variant="outlined"
      id={id}
    />
  );
};

Text.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

export default Text;
