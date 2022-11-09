import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box } from '@mui/system';
import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';

/*****************************************************************
 * Send email using https://formsubmit.co form submission service.
 * See .env for associated email address and random code associated with it
 *
 * const URL = 'https://formsubmit.co/ajax/' + import.meta.env.VITE_EMAIL_ID;
 * Eliminated the use of the .env
 *****************************************************************/
const sendMessage = async (email, message) => {
  const URL = 'https://formsubmit.co/ajax/03b7e0675dcd19872c5789211aade4a5';

  let results;

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.debug(data);
      console.debug('Message Successfully Sent');
      results = data;
    })
    .catch((error) => {
      console.debug(error);
      console.debug('Unable to send message');
      results = error;
    });

  return results;
};

/* Form Validation Schema */

const validationSchema = Yup.object({
  name: Yup.string('Please enter your name')
    .trim()
    .min(1)
    .max(40, '40 character maximum')
    .required('Name is required'),
  email: Yup.string('Please enter your email address')
    .trim()
    .email()
    .required('Email address is required'),
  message: Yup.string('Please enter your message')
    .min(1)
    .max(10000, '10,000 character limit')
    .required('Message is required'),
});

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setMessageSent(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const message = `name: ${values.name}\nmessage:\n${values.message}`;
      const results = await sendMessage(values.email, message);
      if (results.success) {
        setMessageSent(true);
        console.log('Message sent: ', results.success);
      } else {
        console.log('Message not sent');
      }
      resetForm({});
    },
  });

  return (
    <section>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          required
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          required
          fullWidth
          multiline
          rows={10}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{ marginBottom: '1rem' }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            variant="contained"
            sx={{ marginTop: '1em' }}
          >
            Submit
          </Button>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'right' }}>
            <EmailIcon sx={{ marginTop: '7px' }} />
            <Tooltip
              title="Send me an email from your browser instead of using above form"
              enterTouchDelay={0}
            >
              <Button
                className="link"
                href="mailto:kep@kepweb.dev"
                target="_blank"
                underline="hover"
                rel="noopener"
                color="inherit"
              >
                Kep@kepweb.dev
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
        <Snackbar
          open={messageSent}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent!
          </Alert>
        </Snackbar>
      </Box>
    </section>
  );
};

export default ContactForm;
