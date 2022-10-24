import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

/* Insert animation code here */

const Hero = () => {
  return (
    <Box
      id="hero"
      className="sectionHeading"
      sx={{ paddingTop: '12.75em', paddingBottom: '5.25em' }}
    >
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <Typography
            variant="h1"
            sx={{ fontFamily: 'Asap', fontSize: '9rem' }}
          >
            Kep
          </Typography>
        </Grid>

        <Grid item md={8} sm={12}>
          <Typography variant="p" sx={{ fontSize: '2.25rem' }}>
            <br />
            I'm a full stack web developer from Massachusetts.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
