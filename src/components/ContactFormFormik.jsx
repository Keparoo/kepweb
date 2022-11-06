import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box } from '@mui/system';
import { Button, Stack, TextField, Tooltip } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState({
    nameErr: '',
    emailErr: '',
    messageErr: '',
  });
  const [nameError, setNameError] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string('Enter your name')
      .trim()
      .min(1)
      .max(40, '40 character maximum')
      .required('Name is required'),
    email: Yup.string('Enter your email address')
      .trim()
      .required('Email address is required'),
    message: Yum.string('Enter your message to send')
      .min(1)
      .max(10000, '10,000 character limit')
      .required('message is required'),
  });

  /*****************************************************************
   * Send email using https://formsubmit.co form submission service.
   * See .env for associated email address and random code associated with it
   *****************************************************************/

  const sendMessage = (email, message) => {
    const URL = 'https://formsubmit.co/ajax/' + import.meta.env.VITE_EMAIL_ID;

    fetch(URL, {
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
      })
      .catch((error) => {
        console.debug(error);
        console.debug('Unable to send message');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((f) => ({ ...f, [name]: value }));
    validateName();
    checkError();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form results', form);

    setForm({ name: '', email: '', message: '' });
    const message = `name: ${form.name}\nmessage:\n${form.message}`;
    sendMessage(form.email, message);
  };

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
          value={form.name}
          onChange={handleChange}
          error={nameError !== ''}
          onBlur={() => isValid('name', form.name)}
          helperText={nameError}
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
          value={form.email}
          onChange={handleChange}
          error={formError.emailErr !== ''}
          onBlur={() => isValid('email', form.email)}
          helperText={formError.emailErr}
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
          value={form.message}
          onChange={handleChange}
          error={formError.messageErr !== ''}
          onBlur={() => isValid('message', form.message)}
          helperText={formError.messageErr}
          sx={{ marginBottom: '1rem' }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button
            type="submit"
            onClick={handleSubmit}
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
      </Box>
    </section>
  );
};

export default ContactForm;
