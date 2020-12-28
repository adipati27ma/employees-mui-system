import { React, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name != "mobile") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      if (isNaN(value)) {
        setValues({
          ...values,
          [name]: value,
        });
      } else {
        const convertedMobileVal = Number(value);

        setValues({
          ...values,
          [name]: convertedMobileVal,
        });
      }
    }

    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...others } = props;

  return (
    <form className={classes.root} autoComplete="off" {...others}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.object,
};
