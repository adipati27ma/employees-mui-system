import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import breakpoints from 'services/breakpoints';

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

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
    '& .MuiFormControl-root': {
      width: (props) => (props.isMediumDevice ? '100%' : '80%'),
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles(breakpoints());
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
