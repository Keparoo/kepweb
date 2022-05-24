import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box sx={{ marginTop: '72px' }}>
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h2">About Me</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" gutterBottom>
            I’m a Javascript, Node, React, Redux, Python, Flask, and SQL
            developer with graphic design skills who loves to capture the
            personality and flair of a client in the websites and printed
            materials that represent them. Over the past decade, I have created
            websites, restaurant menus, signage, and social media campaigns for
            businesses on Cape Cod establishing for them stronger branding,
            greater community recognition, and increased customer volume.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Client training and tech support are important to me. I excel at
            patiently working with clients until they can confidently use
            technology to further their business needs.
          </Typography>
          <Typography variant="body1" gutterBottom>
            My recent focus has been on backend development skills which now
            allow me to create a more dynamic web experience for clients.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Skills: Javascript, Node.js, Express, Axios, AJAX, Python, Flask,
            SQL, PostgreSQL, React, PHP, HTML, CSS, Git, Jest, Supertest,
            Deployment, Linux, Unix, Data Structures, Algorithms, Android, Adobe
            Creative Suite, Affinity Design Suite
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
