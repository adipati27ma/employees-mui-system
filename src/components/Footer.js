import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: '#e0e8ff',
    padding: theme.spacing(3),
    '& a': {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: theme.palette.primary.main,

      '&:hover': {
        textDecoration: 'underline',
        opacity: '0.8',
      },
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" align="center">
        Made with ❤️ by{' '}
        <a target="blank" href="https://www.instagram.com/adipati_ma/">
          adipatima
        </a>
        . © 2021 All rights reserved
      </Typography>
    </div>
  );
}
