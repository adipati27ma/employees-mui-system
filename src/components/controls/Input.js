import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { name, label, value, error = null, onChange } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
