import React from 'react';

import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import resume from '../static/web-dev-resume-5-2022.pdf';

const Contact = () => {
  return (
    <Box sx={{ marginTop: '72px', marginBottom: '144px' }}>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <Typography variant="h2">
            Work with me <br />
          </Typography>
        </Grid>

        <Grid item md={6} sm={12} sx={{ marginTop: '20px' }}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <EmailIcon />
              <Link
                href="mailto:kep@kepweb.dev"
                target="_blank"
                underline="hover"
                rel="noopener"
              >
                Kep@kepweb.dev
              </Link>
            </Stack>

            <Stack direction="row" spacing={1}>
              <LinkedInIcon />
              <Link
                href="https://www.linkedin.com/in/kep-kaeppeler"
                target="_blank"
                underline="hover"
                rel="noopener"
                sx={{ marginBottom: '4px' }}
              >
                LinkedIn.com/in/kep-kaeppeler
              </Link>
            </Stack>

            <Stack direction="row" spacing={1}>
              <ArticleIcon />
              <Link
                href={resume}
                target="_blank"
                underline="hover"
                sx={{ marginBottom: '4px' }}
                download="kep-kaeppeler-resume"
              >
                Download resume
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
