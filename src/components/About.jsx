import React from 'react';
import { Box, Button, Grid, Stack, Tooltip, Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';

import resume from '../static/kep-kaeppeler-resume.11.1.pdf';

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
                JavaScript ES6, TypeScript, AJAX, Flask, React, Storybook, d3,
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
              <br />

              <Typography className="subheading" component="h4" variant="h4">
                Links:
              </Typography>

              <Stack spacing={1}>
                <Stack direction="row" spacing={1}>
                  <EmailIcon sx={{ marginTop: '7px' }} />
                  <Tooltip
                    title="Send me an email from your browser"
                    enterTouchDelay={0}
                  >
                    <Button
                      className="link"
                      href="mailto:kep@kepweb.dev"
                      target="_blank"
                      underline="hover"
                      rel="noopener"
                      color="inherit"
                    >
                      Kep@kepweb.dev
                    </Button>
                  </Tooltip>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <LinkedInIcon sx={{ marginTop: '7px' }} />
                  <Tooltip title="Open my LinkedIn page" enterTouchDelay={0}>
                    <Button
                      className="link"
                      href="https://www.linkedin.com/in/kep-kaeppeler"
                      target="_blank"
                      underline="hover"
                      rel="noopener"
                      color="inherit"
                    >
                      LinkedIn.com/in/kep-kaeppeler
                    </Button>
                  </Tooltip>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <GitHubIcon sx={{ marginTop: '7px' }} />
                  <Tooltip title="Open my GitHub page" enterTouchDelay={0}>
                    <Button
                      className="link"
                      href="https://github.com/Keparoo"
                      target="_blank"
                      underline="hover"
                      rel="noopener"
                      color="inherit"
                    >
                      Github.com/Keparoo
                    </Button>
                  </Tooltip>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <TwitterIcon sx={{ marginTop: '7px' }} />
                  <Tooltip title="Open my Twitter page" enterTouchDelay={0}>
                    <Button
                      className="link"
                      href="https://twitter.com/KepKaeppeler"
                      target="_blank"
                      underline="hover"
                      rel="noopener"
                      color="inherit"
                    >
                      Twitter.com/KepKaeppeler
                    </Button>
                  </Tooltip>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <ArticleIcon sx={{ marginTop: '7px' }} />
                  <Button
                    className="link"
                    href={resume}
                    target="_blank"
                    underline="hover"
                    download="kep-kaeppeler-resume"
                    color="inherit"
                  >
                    Download resume
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <PrintIcon sx={{ marginTop: '7px' }} />
                  <Button
                    className="link"
                    href={resume}
                    target="_blank"
                    underline="hover"
                    color="inherit"
                  >
                    Print resume
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
