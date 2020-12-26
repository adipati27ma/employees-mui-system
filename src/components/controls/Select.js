import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";

function Select(props) {
  const { name, label, value, onChange, option } = props;

  return (
    <FormControl variant="outlined">
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
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  option: PropTypes.array,
};

export default Select;
