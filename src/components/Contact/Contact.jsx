import React from 'react';

import { Box, Grid, Stack } from '@mui/material';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section>
      <Box id="contact" sx={{ paddingBottom: '4.5em', paddingTop: '3.75em' }}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <h2 className="secondary-heading">
              Contact me <br />
            </h2>
          </Grid>

          <Grid
            item
            md={6}
            sm={12}
            sx={{ marginTop: '5em', marginBottom: '4em' }}
          >
            <Stack spacing={1}>
              <ContactForm />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Contact;
