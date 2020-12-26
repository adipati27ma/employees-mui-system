import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { name, label, value, onChange } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
