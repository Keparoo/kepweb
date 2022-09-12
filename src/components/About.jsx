import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ paddingTop: '3.75em', paddingBottom: '4.5em' }} id="about">
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h2">About Me</Typography>
        </Grid>
        <Grid item md={6}>
          <Stack spacing={2} sx={{ marginTop: '1.5em' }}>
            <Typography variant="h4" component="h3">
              Hi, I'm Kep
            </Typography>
            <Typography variant="body1" gutterBottom>
              I’m a JavaScript, TypeScript, Node, React, Redux, Python, Flask,
              and SQL developer with graphic design skills who loves to capture
              the personality and zeitgeist of a client in the websites and
              printed materials that represent them. Over the past decade, I
              have created websites, restaurant menus, signage, brand
              identities, and social media campaigns for businesses on Cape Cod
              to establish for them more vital branding, greater community
              recognition, and increased customer volume.
            </Typography>
            <Typography variant="body1">
              Client training and tech support are essential to me. I excel at
              patiently working with clients until they confidently use
              technology to further their business needs.
            </Typography>
            <Typography variant="body1">
              My recent focus has been furthering my backend development skills
              allowing me to create a more dynamic web experience for clients.
            </Typography>

            <Typography variant="body1">
              I'm also a musician who spent years as a musical director and
              conductor of resident and touring productions of Broadway shows
              including <em>Joseph and the Amazing Technicolor Dreamcoat</em>,
              starring Patrick Cassidy, and <em>The King and I</em>, starring
              Sandy Duncan, as well as the keyboard programming for the{' '}
              <em>Celebrating Sondheim Concert</em> at Avery Fisher Hall,
              Lincoln Center, New York City.
            </Typography>
            <Typography>
              Every day I play the piano, further my French &amp; German
              language skills, and practice mindfulness &amp; meditation.
            </Typography>
            <Typography variant="h6" component="h4">
              Skills:
            </Typography>

            <Typography variant="body1">
              <strong>Frontend</strong>: HTML5, CSS3, JavaScript ES6,
              TypeScript, AJAX, Flask, React, Redux, Next.js, Bootstrap,
              Material UI, Tailwind
            </Typography>

            <Typography variant="body1">
              <strong>Backend</strong>: Python, PHP, Node.js, Express, Axios,
              SQL, PostgreSQL, SQLAlchemy, OAuth, Jest, Vitest, Supertest,
              PyTest
            </Typography>

            <Typography variant="body1">
              <strong>Development</strong>: Linux, Unix, Git, GitHub, ZenHub,
              Agile workflow, Data Structures, Algorithms, Deployment, Android
              <br />
            </Typography>

            <Typography variant="body1">
              <strong>Design</strong>: Figma, Typography, Affinity Design Suite,
              Adobe Creative Suite
            </Typography>

            <Typography variant="body1">
              This website was created with <strong>React v18</strong> in a Vite
              environment
              <br />
              with design elements from <strong>Material UI</strong>.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
