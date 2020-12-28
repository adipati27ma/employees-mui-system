import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

function Select(props) {
  const { name, label, value, error = null, onChange, option } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {option.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  option: PropTypes.array,
};

export default Select;
