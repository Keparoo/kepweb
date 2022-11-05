import React, { useState } from 'react';

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

  /*****************************************************************
  https://formsubmit.co form submission service.
  
  See .env for associated email address and random code associated with it

  ******************************************************************/

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.name === '' || form.email === '' || form.message === '') {
      isValid('name', form.name);
      isValid('email', form.email);
      isValid('message', form.message);
      return;
    }

    isValid('name', form.name);
    isValid('email', form.email);
    isValid('message', form.message);
    console.log('Tried to submit, less than 3 blank', formError);

    // if (
    //   formError.nameErr !== '' ||
    //   formError.emailErr !== '' ||
    //   formError.messageErr !== ''
    // )
    //   return;

    console.log('Form results', form);
    setForm({ name: '', email: '', message: '' });
    const message = `name: ${form.name}\nmessage:\n${form.message}`;
    sendMessage(form.email, message);
  };

  const isValid = (fieldName, value) => {
    if (fieldName === 'name') {
      if (value.length > 0) {
        setFormError((formError) => ({ ...formError, nameErr: '' }));
        console.log('name', formError);
        // return true;
      } else {
        setFormError((formError) => ({
          ...formError,
          nameErr: 'Please enter a name',
        }));
        console.log('name', formError);
        // return false;
      }
    }

    if (fieldName === 'email') {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        setFormError((formError) => ({ ...formError, emailErr: '' }));
        console.log('email', formError);
      } else {
        setFormError((formError) => ({
          ...formError,
          emailErr: 'Please enter a valid email address',
        }));
        console.log('email', formError);
        // return false;
      }
    }

    if (fieldName === 'message') {
      if (value.length > 0 && value.length < 10000) {
        setFormError((formError) => ({ ...formError, messageErr: '' }));
        console.log('message', formError);
        // return true;
      } else {
        setFormError((formError) => ({
          ...formError,
          messageErr:
            'Please enter a message must be between 1 and 10,000 chars',
        }));
        console.log('message', formError);
        // return false;
      }
    }
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
          error={formError.nameErr !== ''}
          onBlur={() => isValid('name', form.name)}
          helperText={formError.nameErr}
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
