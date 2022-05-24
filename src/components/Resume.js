import React from 'react';

import { Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';
import resume from '../static/kep-kaeppeler-resume.pdf';

const Resume = () => {
  return (
    <Box id="resume">
      <Typography variant="h2">Resume</Typography>
      <Stack spacing={1}>
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

        <Stack direction="row" spacing={1}>
          <PrintIcon />
          <Link
            href={resume}
            target="_blank"
            underline="hover"
            sx={{ marginBottom: '4px' }}
          >
            Print resume
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Resume;
