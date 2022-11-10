import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

/*******************************
 *
 * toastState = boolean (True for open)
 * closeToast = function: changes toastState to false
 * duration = integer: ms until toast automatically closes
 * severity = string: possible values are success, info, warning, error
 *    severity sets toast color to green/blue/yellow/red
 *
 */

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({
  open,
  closeToast,
  duration,
  message,
  severity,
}) {
  const handleClose = (event, reason) => {
    // Must click the close box or wait duration
    if (reason === 'clickaway') {
      return;
    }

    closeToast();
  };

  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
