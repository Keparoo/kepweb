import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box } from '@mui/system';
import { Stack, TextField, Tooltip } from '@mui/material';

import Toast from '../Toast';

import EmailIcon from '@mui/icons-material/Email';

import styles from './Contact.module.css';

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
      console.debug('Fetch successful', data);
      results = data;
    })
    .catch((error) => {
      console.debug('Fetch unsuccessful', error);
      results = error;
    });

  return results;
};

/*****  Form Validation Schema *************/

const validationSchema = Yup.object({
  name: Yup.string('Please enter your name')
    .trim()
    .min(1)
    .max(40, '40 character maximum')
    .required('Name is required'),
  email: Yup.string('Please enter your email address')
    .trim()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  message: Yup.string('Please enter your message')
    .trim()
    .min(1)
    .max(2000, '2,000 character limit')
    .required('Message is required'),
});

/********* Contact Form Component *************************/

const ContactForm = () => {
  const [toast, setToast] = useState({
    open: false,
    severity: 'info',
    message: '',
  });

  const closeToast = () => {
    setToast({ ...toast, open: false });
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
        setToast({
          open: true,
          severity: 'success',
          message: 'Message sent!',
        });
        console.log('Message sent: ', results.message);
        resetForm({});
      } else {
        setToast({
          open: true,
          severity: 'error',
          message: 'Unable to send message.',
        });
        console.log('Message not sent', results);
      }
    },
  });

  return (
    <section>
      <Box component="form" noValidate autoComplete="off">
        <div className={styles.textFieldSection}>
          <TextField
            id="name"
            name="name"
            label="Your name"
            variant="outlined"
            required
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            className={styles.textField}
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label=" Your email"
            variant="outlined"
            required
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className={styles.textField}
          />
          <TextField
            id="message"
            name="message"
            label="Message"
            placeholder="Message is limited to 2000 characters"
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
            className={styles.textField}
          />
        </div>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          {formik.errors.name !== undefined ||
          formik.errors.email !== undefined ||
          formik.errors.message !== undefined ? (
            <button
              type="submit"
              className="button"
              onClick={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
              disabled
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="button"
              onClick={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
            >
              Submit
            </button>
          )}

          <Stack direction="row" spacing={1} sx={{ justifyContent: 'right' }}>
            <EmailIcon />
            <Tooltip
              title="Send me an email from your browser instead of using above form"
              enterTouchDelay={0}
            >
              <a
                className="link"
                href="mailto:kep@kepweb.dev"
                target="_blank"
                rel="noopener"
              >
                Kep@kepweb.dev
              </a>
            </Tooltip>
          </Stack>
        </Stack>

        <Toast
          open={toast.open}
          closeToast={closeToast}
          duration={6000}
          message={toast.message}
          severity={toast.severity}
        />
      </Box>
    </section>
  );
};

export default ContactForm;
