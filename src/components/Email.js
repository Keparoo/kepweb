import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

// <form
// action="mailto:contact@yourdomain.com"
// method="POST"
// enctype="multipart/form-data"
// name="EmailForm"
// />

const Email = () => {
  const [ form, setForm ] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleSubmit = () => {
    console.log(form.name, form.email, form.message);
  };

  return (
    <div>
      <Typography variant="h2">Contact me</Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        action="mailto:kep@kep.dev"
        method="post"
        enctype="text/plain"
      >
        <Stack>
          <TextField
            label="Name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={8}
          />
        </Stack>
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </div>
  );
};

export default Email;
