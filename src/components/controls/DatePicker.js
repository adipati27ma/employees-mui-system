/* eslint react/prop-types: 0 */
import React from "react";
import PropTypes from "prop-types";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        openTo="year"
        views={["year", "month", "date"]}
        label={label}
        format="MMM dd, yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  // value: PropTypes.date, // pusing segala error, date error, func error
  onChange: PropTypes.func,
};

export default DatePicker;
