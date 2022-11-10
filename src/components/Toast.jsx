import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

/*******************************
 *
 * Possible severity values:
 *    success, info, warning, error
 *
 */

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({
  toastState,
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
    <Snackbar
      open={toastState}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
