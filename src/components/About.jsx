import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <section>
      <Box sx={{ paddingTop: '3.75em', paddingBottom: '4.5em' }} id="about">
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h2" className="sectionHeading">
              About Me
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Stack spacing={2} sx={{ marginTop: '1.5em' }}>
              <Typography variant="h4" className="subheading" component="h3">
                Hi, I'm Kep
              </Typography>
              <Typography variant="body1" gutterBottom>
                I’m a JavaScript, TypeScript, Node, React, Redux, Python, Flask,
                and SQL developer with graphic design skills who loves to
                capture the personality and zeitgeist of a client in the
                websites and printed materials that represent them. Over the
                past decade, I have created websites, social media campaigns,
                brand identities, restaurant menus, advertisements, and signage
                for businesses on Cape Cod to establish for them more vital
                branding, greater community recognition, and increased customer
                volume.
              </Typography>
              <Typography variant="body1">
                Client training and tech support are essential to me. I excel at
                patiently working with clients until they confidently use
                technology to further their business needs.
              </Typography>
              <Typography variant="body1">
                My recent focus has been furthering my backend development
                skills allowing me to create a more dynamic web experience for
                clients.
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
              <br />
              <Typography className="subheading" component="h4" variant="h4">
                Skills:
              </Typography>

              <Typography variant="body1">
                <span className="subheading">Frontend</span>: HTML5, CSS3,
                JavaScript ES6, TypeScript, AJAX, Flask, React, Storybook,
                Redux, Next.js, Bootstrap, Material UI, Tailwind
              </Typography>

              <Typography variant="body1">
                <span className="subheading">Backend</span>: Python, PHP,
                Node.js, Express, Axios, SQL, PostgreSQL, SQLAlchemy, OAuth
              </Typography>

              <Typography variant="body1">
                <span className="subheading">Testing</span>: Jest, Vitest,
                Supertest, PyTest
              </Typography>

              <Typography variant="body1">
                <span className="subheading">Development</span>: Linux, Unix,
                Git, GitHub, VS Code, PyCharm, ZenHub, <br />
                Agile workflow, Data Structures, Algorithms, Deployment,
                Windows, Mac, Android, Vite, Heroku, Netlify, Vercel, Digital
                Ocean, Surge
                <br />
              </Typography>

              <Typography variant="body1">
                <span className="subheading">Design</span>: Figma, Typography,
                Affinity Design Suite, Adobe Creative Suite
              </Typography>

              <Typography variant="body1">
                This website was created with <strong>React v18</strong> in a
                Vite environment
                <br />
                using <strong>Material UI</strong> components.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
