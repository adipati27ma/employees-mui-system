import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    '& .MuiButton-label': {
      textTransform: 'none',
    },
  },
}));

function Button(props) {
  const { text, size, color, variant, onClick, ...others } = props;
  const classes = useStyles();

  return (
    <MuiButton
      className={classes.root}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...others}
    >
      {text}
    </MuiButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
