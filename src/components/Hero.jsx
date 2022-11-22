import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import computerImage from '../static/pixeltrue-web-development-1.svg';

/* Insert animation code here */

const Hero = () => {
  return (
    <section id="hero">
      <Box sx={{ paddingTop: '12.75rem', marginBottom: '8em' }}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Typography
              variant="h1"
              sx={{ fontFamily: 'Asap', fontSize: '9rem', color: 'black' }}
            >
              Kep
            </Typography>
            <Typography
              className="hero-subhead"
              variant="p"
              sx={{ display: 'block', fontSize: '2.25rem' }}
            >
              <br />
              I'm a full-stack web developer with a passion for challenges.
            </Typography>
            <Button
              variant="contained"
              href="#contact"
              size="large"
              fullWidth={false}
              sx={{ marginTop: '3em' }}
            >
              Contact Me
            </Button>
          </Grid>

          <Grid item md={6} sm={12}>
            <img className="computer-image" src={computerImage} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Hero;
