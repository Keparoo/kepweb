import React from 'react';

import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';

import resume from '../static/kep-kaeppeler-resume.10.1.pdf';
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
