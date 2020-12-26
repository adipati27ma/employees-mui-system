import React from "react";
import PropTypes from "prop-types";
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormControl,
} from "@material-ui/core";

function Checkbox(props) {
  const { name, label, value, onChange } = props;

  // KOMPLEKS PARAH... akan menghasilkan objek "target.name" atau "target.value" untuk dipakai di handleInputChange
  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
