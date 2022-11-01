import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import computerImage from '../static/pixeltrue-web-development-1.svg';

/* Insert animation code here */

const Hero = () => {
  return (
    <section id="hero" className="sectionHeading">
      <Box sx={{ paddingTop: '12.75em', marginBottom: '8em' }}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Typography
              variant="h1"
              sx={{ fontFamily: 'Asap', fontSize: '9rem' }}
            >
              Kep
            </Typography>
            <Typography variant="p" sx={{ fontSize: '2.25rem' }}>
              <br />
              I'm a full-stack web developer from Massachusetts.
            </Typography>
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
