import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Controls from 'components/controls/Controls';
import { Close as CloseIcon } from '@material-ui/icons';
import breakpoints from 'services/breakpoints';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    '& .MuiDialog-paper': {
      padding: (props) =>
        props.isSmallDevice ? theme.spacing(1) : theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(0),
    },
    '& .MuiDialogTitle-root': {
      paddingLeft: (props) => props.isSmallDevice && theme.spacing(1),
      paddingRight: (props) => props.isSmallDevice && theme.spacing(1),
    },
    '& .MuiDialogContent-root': {
      marginLeft: (props) => props.isSmallDevice && theme.spacing(-1),
      paddingLeft: (props) => props.isSmallDevice && theme.spacing(1),
      paddingRight: (props) => props.isSmallDevice && theme.spacing(2),
    },
  },
}));

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles(breakpoints());

  return (
    <Dialog open={openPopup} maxWidth="md" className={classes.dialogWrapper}>
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
  openPopup: PropTypes.bool,
  setOpenPopup: PropTypes.func,
};

export default Popup;
