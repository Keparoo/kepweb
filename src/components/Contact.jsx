import React from 'react';

import { Box, Grid, Stack, Typography } from '@mui/material';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section>
      <Box id="contact" sx={{ paddingBottom: '4.5em', paddingTop: '3.75em' }}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Typography variant="h2" className="sectionHeading">
              Work with me <br />
            </Typography>
          </Grid>

          <Grid item md={6} sm={12} sx={{ marginTop: '1.25em' }}>
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
