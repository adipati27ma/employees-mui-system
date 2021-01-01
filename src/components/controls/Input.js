import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { name, label, value, error = null, onChange, ...others } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...others}
      {...(error && { error: true, helperText: error })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
