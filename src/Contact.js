import React from 'react';

import { Box, Grid, Link, Stack, Tooltip, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';

// import resume from './kep-kaeppeler-resume.pdf';

const Contact = () => {
  return (
    <Box id="contact" sx={{ paddingBottom: '72px', paddingTop: '60px' }}>
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
              <Tooltip title="Send me an email" enterTouchDelay={0}>
                <Link
                  href="mailto:kep@kepweb.dev"
                  target="_blank"
                  underline="hover"
                  rel="noopener"
                  color="inherit"
                >
                  Kep@kepweb.dev
                </Link>
              </Tooltip>
            </Stack>

            <Stack direction="row" spacing={1}>
              <LinkedInIcon />
              <Tooltip title="Open my LinkedIn page" enterTouchDelay={0}>
                <Link
                  href="https://www.linkedin.com/in/kep-kaeppeler"
                  target="_blank"
                  underline="hover"
                  rel="noopener"
                  color="inherit"
                >
                  LinkedIn.com/in/kep-kaeppeler
                </Link>
              </Tooltip>
            </Stack>

            <Stack direction="row" spacing={1}>
              <GitHubIcon />
              <Tooltip title="Open my GitHub page" enterTouchDelay={0}>
                <Link
                  href="https://github.com/Keparoo"
                  target="_blank"
                  underline="hover"
                  rel="noopener"
                  color="inherit"
                >
                  Github.com/Keparoo
                </Link>
              </Tooltip>
            </Stack>

            <Stack direction="row" spacing={1}>
            <TwitterIcon />
            <Tooltip title="Open my Twitter page" enterTouchDelay={0}>
              <Link
                href="https://twitter.com/KepKaeppeler"
                target="_blank"
                underline="hover"
                rel="noopener"
                color="inherit"
              >
                Twitter.com/KepKaeppeler
              </Link>
            </Tooltip>
          </Stack>

            <Stack direction="row" spacing={1}>
              <ArticleIcon />
              <Link
                href="/static/kep-kaeppeler-resume.pdf"
                target="_blank"
                underline="hover"
                download="kep-kaeppeler-resume"
                color="inherit"
              >
                Download resume
              </Link>
            </Stack>

            <Stack direction="row" spacing={1}>
              <PrintIcon />
              <Link
                href="/static/kep-kaeppeler-resume.pdf"
                target="_blank"
                underline="hover"
                color="inherit"
              >
                Print resume
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
