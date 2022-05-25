import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ marginTop: '72px' }} id="about">
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h2">About Me</Typography>
        </Grid>
        <Grid item md={6}>
          <Stack spacing={2} sx={{ marginTop: '26px' }}>
            <Typography variant="h4">Hi, I'm Kep</Typography>
            <Typography variant="body1" gutterBottom>
              I’m a Javascript, Node, React, Redux, Python, Flask, and SQL
              developer with graphic design skills who loves to capture the
              personality and flair of a client in the websites and printed
              materials that represent them. Over the past decade, I have
              created websites, restaurant menus, signage, and social media
              campaigns for businesses on Cape Cod establishing for them
              stronger branding, greater community recognition, and increased
              customer volume.
            </Typography>
            <Typography variant="body1">
              Client training and tech support are important to me. I excel at
              patiently working with clients until they can confidently use
              technology to further their business needs.
            </Typography>
            <Typography variant="body1">
              My recent focus has been on backend development skills which now
              allow me to create a more dynamic web experience for clients.
            </Typography>
            <Typography variant="body1">
              I'm also a musician who spent years as a musical-director and
              conductor of resident and touring productions of Broadway shows
              including Joseph and the Amazing Technicolor Dreamcoat, starring
              Patrick Cassidy, and The King and I, starring Sandy Duncan.
            </Typography>
            <Typography variant="h6">Skills:</Typography>
            <Typography variant="body1">
              <strong>Backend</strong>: Javascript ES6, Python, PHP, Node.js,
              Express, Axios,<br />
              SQL, PostgreSQL, Jest, Vitest, Supertest
            </Typography>
            <Typography variant="body1">
              <strong>Frontend</strong>: HTML, CSS, Flask, React, Next.js, AJAX
            </Typography>
            <Typography variant="body1">
              <strong>Development</strong>: Linux, Unix, Git, Deployment, Data
              Structures, Algorithms, Typography, Android, Adobe Creative Suite,
              Affinity Design Suite
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
